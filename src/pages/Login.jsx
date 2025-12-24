import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import du contexte
// IMPORTS DES IMAGES (obligatoire avec Vite)
import loginImg from "../assets/login.jpg";
import logoApp from "../assets/logoApp.jpg";
import googleLogo from "../assets/goolge-removebg-preview.png";
import facebookLogo from "../assets/facebppk-removebg-preview.png";
import appleLogo from "../assets/logoapple-removebg-preview.png";

export default function Login() {
  const navigate = useNavigate();
  const { login, googleLogin, isAuthenticated, loading } = useAuth(); // Utilisation du contexte
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState(""); // Pour les erreurs de l'API

  // Rediriger si déjà connecté
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Effacer les erreurs quand l'utilisateur tape
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (apiError) {
      setApiError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 caractères";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation locale
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setApiError(""); // Réinitialiser les erreurs API
    
    try {
      // Appel à l'API via le contexte Auth
      await login({
        email: formData.email.trim(),
        password: formData.password
      });
      
      // Si rememberMe est coché, stocker dans localStorage
      if (formData.rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
      
      // Redirection vers la page d'accueil
      navigate("/");
      
    } catch (error) {
      console.error("Erreur de connexion API:", error);
      
      // Gestion des erreurs spécifiques de l'API
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setApiError("Email ou mot de passe incorrect");
            break;
          case 403:
            setApiError("Votre compte n'est pas activé");
            break;
          case 422:
            setApiError("Données de connexion invalides");
            break;
          case 500:
            setApiError("Erreur serveur. Veuillez réessayer plus tard");
            break;
          default:
            setApiError("Une erreur est survenue. Veuillez réessayer");
        }
      } else if (error.request) {
        setApiError("Impossible de joindre le serveur. Vérifiez votre connexion");
      } else {
        setApiError("Erreur de connexion. Veuillez réessayer");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestion de la connexion Google
  const handleGoogleLogin = async () => {
    try {
      setIsSubmitting(true);
      setApiError("");
      
      // Ici, vous devez intégrer l'authentification Google
      // Pour l'instant, on simule avec un token
      // Dans une vraie implémentation, vous utiliseriez Google Sign-In
      
      const googleToken = "simulated-google-token"; // À remplacer par le vrai token
      
      await googleLogin(googleToken);
      navigate("/");
      
    } catch (error) {
      console.error("Erreur Google Login:", error);
      setApiError("Erreur lors de la connexion avec Google");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestion de la connexion Facebook (similaire à Google)
  const handleFacebookLogin = async () => {
    try {
      setIsSubmitting(true);
      setApiError("");
      
      // Implémentation Facebook à ajouter ici
      console.log("Facebook login clicked");
      // await facebookLogin(facebookToken);
      
      // Pour l'instant, on simule
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApiError("Connexion Facebook non encore implémentée");
      
    } catch (error) {
      console.error("Erreur Facebook Login:", error);
      setApiError("Erreur lors de la connexion avec Facebook");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestion de la connexion Apple (similaire)
  const handleAppleLogin = async () => {
    try {
      setIsSubmitting(true);
      setApiError("");
      
      // Implémentation Apple à ajouter ici
      console.log("Apple login clicked");
      // await appleLogin(appleToken);
      
      // Pour l'instant, on simule
      await new Promise(resolve => setTimeout(resolve, 1000));
      setApiError("Connexion Apple non encore implémentée");
      
    } catch (error) {
      console.error("Erreur Apple Login:", error);
      setApiError("Erreur lors de la connexion avec Apple");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si l'API est en cours de chargement initial
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex">
      {/* Section Image (gauche) */}
      <div className="hidden lg:flex w-1/2 h-full relative"> 
        <img src={loginImg} className="w-full h-full object-cover" alt="Voyage" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <div className="flex justify-start mb-2">
              <div className="flex items-start space-x-3">
                <img src={logoApp} className="w-30 md:w-40 lg:w-50" alt="Logo" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mt-8">Voyagez avec <span className="text-yellow-300">Confiance</span></h1> 
            <p className="mt-4 text-lg opacity-90">Réservez vos vols, hôtels et activités en toute simplicité</p> 
          </div>
        </div>
      </div>

      {/* Section Formulaire (droite) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-2">
            <div className="flex items-center space-x-3">
              <div>
                <img src={logoApp} className="w-30 md:w-40 lg:w-50" alt="Logo" />
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Bienvenue à bord</h2>
              <p className="text-gray-600 mt-2">Connectez-vous pour accéder à votre compte</p>
            </div>

            {/* Message d'erreur API */}
            {apiError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center text-red-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {apiError}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Boutons de connexion sociale */}
              <div>
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isSubmitting}
                  className="w-full relative rounded-lg flex items-center gap-3 justify-center py-3 cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center">
                    <img src={googleLogo} className="w-7 h-7" alt="Google" />
                  </div>
                  <p className="font-bold">Continuer avec Google</p>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleFacebookLogin}
                  disabled={isSubmitting}
                  className="w-full relative rounded-lg flex items-center gap-3 justify-center py-3 cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center">
                    <img src={facebookLogo} className="w-11" alt="Facebook" />
                  </div>
                  <p className="font-bold">Continuer avec Facebook</p>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleAppleLogin}
                  disabled={isSubmitting}
                  className="w-full relative rounded-lg flex items-center gap-3 justify-center py-3 cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center">
                    <img src={appleLogo} className="w-6" alt="Apple" />
                  </div>
                  <p className="font-bold">Continuer avec Apple</p>
                </button>
              </div>

              {/* Séparateur */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou connectez-vous avec email</span>
                </div>
              </div>

              {/* Champ Email */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    disabled={isSubmitting}
                    autoComplete="email"
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } ${isSubmitting ? "bg-gray-50" : ""}`}
                  />
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Champ Mot de passe */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    disabled={isSubmitting}
                    autoComplete="current-password"
                    className={`block w-full pl-3 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.password ? "border-red-300" : "border-gray-300"
                    } ${isSubmitting ? "bg-gray-50" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    disabled={isSubmitting}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <label className={`ml-2 block text-sm ${isSubmitting ? 'text-gray-400' : 'text-gray-700'}`}>
                    Se souvenir de moi
                  </label>
                </div>
                <Link 
                  to="/forgot-password" 
                  className={`text-sm font-medium ${isSubmitting ? 'text-gray-400' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  Mot de passe oublié?
                </Link>
              </div>

              {/* Bouton de connexion */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg text-blue-600 font-bold bg-blue-100 transition ${
                  isSubmitting 
                    ? "opacity-75 cursor-not-allowed bg-blue-200" 
                    : "hover:bg-blue-200"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    Connexion en cours...
                  </div>
                ) : (
                  "Se connecter"
                )}
              </button>

              {/* Lien vers inscription */}
              <div className="flex items-center justify-center mt-4">
                <p className="text-gray-700 text-xs md:text-sm">
                  Vous avez besoin de{' '}
                  <Link 
                    to="/register" 
                    className={`underline font-bold ${isSubmitting ? 'text-gray-400' : 'hover:text-blue-500 cursor-pointer'}`}
                  >
                    créer un compte ?
                  </Link>
                </p>
              </div>

              {/* Conditions d'utilisation */}
              <div className="text-center mt-4">
                <p className="text-gray-700 text-xs md:text-sm">
                  En acceptant, vous acceptez nos{' '}
                  <Link 
                    to="/terms" 
                    className={`underline font-bold ${isSubmitting ? 'text-gray-400' : 'hover:text-blue-500 cursor-pointer'}`}
                  >
                    conditions d'utilisation
                  </Link>
                  {' '}et{' '}
                  <Link 
                    to="/privacy" 
                    className={`underline font-bold ${isSubmitting ? 'text-gray-400' : 'hover:text-blue-500 cursor-pointer'}`}
                  >
                    politique de confidentialité
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}