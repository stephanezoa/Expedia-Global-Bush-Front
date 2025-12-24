// src/services/api.js
import axios from 'axios';
import { authService } from './auth';

const API_BASE_URL = 'http://38.242.144.227:5105';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Flag pour éviter les boucles de rafraîchissement
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Intercepteur pour ajouter le token aux requêtes
api.interceptors.request.use(
  (config) => {
    const token = authService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs 401 et rafraîchir le token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Si erreur 401 et pas déjà en train de rafraîchir
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Mettre en file d'attente
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }
      
      originalRequest._retry = true;
      isRefreshing = true;
      
      try {
        // Rafraîchir le token
        const { accessToken } = await authService.refreshToken();
        
        // Mettre à jour l'en-tête de la requête originale
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        
        // Traiter la file d'attente
        processQueue(null, accessToken);
        
        // Réessayer la requête originale
        return api(originalRequest);
      } catch (refreshError) {
        // Échec du rafraîchissement, déconnecter l'utilisateur
        processQueue(refreshError, null);
        await authService.logout();
        
        // Rediriger vers la page de login
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    
    // Gestion d'autres erreurs
    if (error.response) {
      switch (error.response.status) {
        case 403:
          console.error('Accès interdit');
          break;
        case 404:
          console.error('Ressource non trouvée');
          break;
        case 422:
          console.error('Données invalides', error.response.data);
          break;
        case 500:
          console.error('Erreur serveur');
          break;
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;