// src/services/auth.js
import api from './api';

export const authService = {
  // 1. Inscription
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    // Si l'API renvoie un message d'erreur dans le corps avec status 200, remonter sous forme d'exception
    if (response.data && (response.data.error || (response.data.message && !response.data.accessToken && !response.data.user))) {
      const msg = response.data.error || response.data.message || 'Erreur lors de l\'inscription';
      const err = new Error(msg);
      err.response = { data: response.data };
      throw err;
    }
    return response.data;
  },

  // 2. Vérification email
  verifyEmail: async (token) => {
    const response = await api.post('/auth/verify-email', { token });
    return response.data;
  },

  // 3. Connexion
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);

    // Même logique : si l'API renvoie un message d'erreur dans le corps, rejeter
    if (response.data && (response.data.error || (response.data.message && !response.data.accessToken && !response.data.user))) {
      const msg = response.data.error || response.data.message || 'Erreur lors de la connexion';
      const err = new Error(msg);
      err.response = { data: response.data };
      throw err;
    }

    // Stocker les tokens dans le localStorage
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      // Stocker les infos utilisateur si fournies
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
    }

    return response.data;
  },

  // 4. Connexion Google
  googleAuth: async (googleToken) => {
    const response = await api.post('/auth/google', { token: googleToken });

    if (response.data && (response.data.error || (response.data.message && !response.data.accessToken && !response.data.user))) {
      const msg = response.data.error || response.data.message || 'Erreur Google Auth';
      const err = new Error(msg);
      err.response = { data: response.data };
      throw err;
    }

    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
    }

    return response.data;
  },

  // 5. Déconnexion
  logout: async () => {
    try {
      // Appeler l'API de déconnexion
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Erreur lors de la déconnexion API:', error);
    } finally {
      // Nettoyer le localStorage quoi qu'il arrive
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  },

  // 6. Rafraîchir le token
  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('Aucun refresh token disponible');
    }
    
    const response = await api.post('/auth/refresh', { refreshToken });
    
    // Mettre à jour le token d'accès
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }
    
    return response.data;
  },

  // 7. Récupérer infos utilisateur
  getMe: async () => {
    const response = await api.get('/auth/me');
    
    // Mettre à jour les infos dans le localStorage
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    
    return response.data;
  },

  // 8. Mettre à jour profil
  updateMe: async (userData) => {
    const response = await api.put('/auth/me', userData);
    
    // Mettre à jour les infos dans le localStorage
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    
    return response.data;
  },

  // 9. Demander réinitialisation mot de passe
  requestResetPassword: async (email) => {
    const response = await api.post('/auth/request-reset-password', { email });
    return response.data;
  },

  // 10. Réinitialiser mot de passe
  resetPassword: async (token, newPassword) => {
    const response = await api.post('/auth/reset-password', {
      token,
      newPassword
    });
    return response.data;
  },

  // 11. Changer mot de passe
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.post('/auth/change-password', {
      currentPassword,
      newPassword
    });
    return response.data;
  },

  // Fonctions utilitaires
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getAccessToken: () => {
    return localStorage.getItem('accessToken');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('accessToken');
  },

  // Vérifier si l'email est vérifié
  isEmailVerified: () => {
    const user = authService.getCurrentUser();
    return user ? user.emailVerified : false;
  }
};