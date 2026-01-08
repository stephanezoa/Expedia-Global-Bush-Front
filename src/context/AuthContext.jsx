// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/auth';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger l'utilisateur au démarrage
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      setLoading(true);
      
      if (authService.isAuthenticated()) {
        const userData = await authService.getMe();
        setUser(userData);
      }
    } catch (err) {
      console.error('Erreur lors du chargement de l\'utilisateur:', err);
      // En cas d'erreur, nettoyer les tokens invalides
      if (err.response?.status === 401) {
        await authService.logout();
      }
    } finally {
      setLoading(false);
    }
  };

  // Inscription
  const register = async (userData) => {
    try {
      setError(null);
      const result = await authService.register(userData);

      // Si l'API retourne directement l'utilisateur connecté
      if (result.user && result.accessToken) {
        setUser(result.user);
      } else if (result.accessToken) {
        // token présent mais pas l'utilisateur : récupérer via /auth/me
        try {
          const me = await authService.getMe();
          setUser(me);
        } catch (e) {
          console.error('Impossible de récupérer l\'utilisateur après inscription:', e);
        }
      }

      return result;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur lors de l\'inscription';
      setError(errorMessage);
      throw err;
    }
  };

  // Connexion
  const login = async (credentials) => {
    try {
      setError(null);
      const result = await authService.login(credentials);

      // Si l'API retourne l'utilisateur, on le met en contexte.
      if (result.user) {
        setUser(result.user);
      } else if (result.accessToken) {
        // token présent mais pas l'utilisateur : récupérer via /auth/me
        try {
          const me = await authService.getMe();
          setUser(me);
        } catch (e) {
          console.error('Impossible de récupérer l\'utilisateur après login:', e);
        }
      }

      return result;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Identifiants invalides';
      setError(errorMessage);
      throw err;
    }
  };

  // Connexion Google
  const googleLogin = async (googleToken) => {
    try {
      setError(null);
      const result = await authService.googleAuth(googleToken);
      setUser(result.user);
      return result;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur Google Auth';
      setError(errorMessage);
      throw err;
    }
  };

  // Déconnexion
  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      setError(null);
    } catch (err) {
      console.error('Erreur lors de la déconnexion:', err);
      setError('Erreur lors de la déconnexion');
      throw err;
    }
  };

  // Vérification email
  const verifyEmail = async (token) => {
    try {
      setError(null);
      const result = await authService.verifyEmail(token);
      
      // Mettre à jour l'utilisateur si connecté
      if (user) {
        const updatedUser = { ...user, emailVerified: true };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
      
      return result;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur de vérification';
      setError(errorMessage);
      throw err;
    }
  };

  // Mettre à jour le profil
  const updateProfile = async (userData) => {
    try {
      setError(null);
      const updatedUser = await authService.updateMe(userData);
      setUser(updatedUser);
      return updatedUser;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur de mise à jour';
      setError(errorMessage);
      throw err;
    }
  };

  // Demander réinitialisation mot de passe
  const requestResetPassword = async (email) => {
    try {
      setError(null);
      return await authService.requestResetPassword(email);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur de demande';
      setError(errorMessage);
      throw err;
    }
  };

  // Réinitialiser mot de passe
  const resetPassword = async (token, newPassword) => {
    try {
      setError(null);
      return await authService.resetPassword(token, newPassword);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur de réinitialisation';
      setError(errorMessage);
      throw err;
    }
  };

  // Changer mot de passe
  const changePassword = async (currentPassword, newPassword) => {
    try {
      setError(null);
      return await authService.changePassword(currentPassword, newPassword);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur de changement';
      setError(errorMessage);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    isEmailVerified: user?.emailVerified || false,
    
    // Actions
    register,
    login,
    googleLogin,
    logout,
    verifyEmail,
    updateProfile,
    requestResetPassword,
    resetPassword,
    changePassword,
    
    // Utilitaires
    clearError: () => setError(null),
    refreshUser: loadUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};