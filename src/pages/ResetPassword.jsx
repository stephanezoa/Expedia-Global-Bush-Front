import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams(); // Récupère le token depuis l'URL
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidToken, setIsValidToken] = useState(null); // null = loading, true/false
  const [resetSuccess, setResetSuccess] = useState(false);

  // Vérifier si le token est valide au chargement
  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!token) {
        setIsValidToken(false);
        return;
      }

      try {
        // Simuler une vérification API
        console.log("Vérification du token:", token);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Ici, normalement vous vérifiez avec votre API Python
        // const response = await api.get(`/verify-reset-token/${token}`);
        // setIsValidToken(response.data.valid);
        
        // Pour l'exemple, on suppose que le token est valide
        setIsValidToken(true);
      } catch (error) {
        console.error("Erreur de vérification:", error);
        setIsValidToken(false);
      }
    };

    checkTokenValidity();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password = "Minimum 8 caractères";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Doit contenir majuscule, minuscule et chiffre";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Réinitialisation avec token:", token);
      console.log("Nouveau mot de passe:", formData.password);
      
      // Simulation d'appel API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Ici, normalement :
      // await api.post(`/reset-password/${token}`, {
      //   password: formData.password
      // });
      
      // Succès
      setResetSuccess(true);
      
      // Redirection automatique après 3 secondes
      setTimeout(() => {
        navigate("/login?reset=success");
      }, 3000);
      
    } catch (error) {
      console.error("Erreur:", error);
      setErrors({ 
        general: error.response?.data?.message || 
        "Erreur lors de la réinitialisation" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Écran de chargement pendant la vérification
  if (isValidToken === null) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification du lien en cours...</p>
        </div>
      </div>
    );
  }

  // Token invalide
  if (isValidToken === false) {
    return (
      <div className="h-screen w-screen flex">
        {/* Section Image */}
        <div className="hidden lg:flex w-1/2 h-full relative">
          <img
            src="/src/assets/login.jpg"
            alt="Lien invalide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Section Message d'erreur */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-md text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❌</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Lien invalide ou expiré
              </h2>
              <p className="text-gray-600 mb-6">
                Ce lien de réinitialisation n'est plus valide. Il a peut-être expiré ou déjà été utilisé.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/forgot-password")}
                  className="w-full py-3 px-4 rounded-lg text-blue-500 font-bold border-2 border-blue-200 bg-blue-100/50 hover:bg-blue-100 transition"
                >
                  Demander un nouveau lien
                </button>
                <Link
                  to="/login"
                  className="block w-full py-3 px-4 rounded-lg font-bold border-2 border-gray-200 hover:bg-gray-50 transition text-center"
                >
                  Retour à la connexion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Succès de réinitialisation
  if (resetSuccess) {
    return (
      <div className="h-screen w-screen flex">
        <div className="hidden lg:flex w-1/2 h-full relative">
          <img
            src="/src/assets/login.jpg"
            alt="Succès"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-md text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Mot de passe réinitialisé !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre mot de passe a été modifié avec succès.
              </p>
              <div className="mb-4">
                <div className="animate-pulse text-blue-500">
                  Redirection vers la connexion dans 3 secondes...
                </div>
              </div>
              <button
                onClick={() => navigate("/login")}
                className="w-full py-3 px-4 rounded-lg text-blue-500 font-bold border-2 border-blue-200 bg-blue-100/50 hover:bg-blue-100 transition"
              >
                Se connecter maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Formulaire normal
  return (
    <div className="h-screen w-screen flex">
      {/* Section Image */}
      <div className="hidden lg:flex w-1/2 h-full relative">
        <img
          src="/src/assets/login.jpg"
          alt="Nouveau mot de passe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-start">
              <img
                src="/src/assets/logoApp.jpg"
                alt="Logo App"
                className="w-30 md:w-40 lg:w-50"
              />
            </div>
            <h1 className="text-4xl font-bold">
              Créez votre <span className="text-yellow-300">nouveau mot de passe</span>
            </h1>
            <p className="text-lg opacity-90">
              Choisissez un mot de passe sécurisé pour protéger votre compte
            </p>
          </div>
          <div className="mt-8">
            <p className="text-lg font-semibold">Conseils de sécurité :</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="flex items-center">
                <span className="mr-2">🔐</span> Minimum 8 caractères
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔐</span> Majuscules et minuscules
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔐</span> Au moins un chiffre
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔐</span> Évitez les mots courants
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex justify-center">
              <img
                src="/src/assets/logoApp.jpg"
                alt="Logo App"
                className="w-30 md:w-40 lg:w-50"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Nouveau mot de passe</h2>
              <p className="text-gray-600 mt-2">
                Créez un nouveau mot de passe pour votre compte
              </p>
            </div>

            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {errors.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Nouveau mot de passe"
                  disabled={isSubmitting}
                  className={`block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirmez le mot de passe"
                  disabled={isSubmitting}
                  className={`block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.confirmPassword ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Indicateur de force du mot de passe */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Force du mot de passe</span>
                  <span className={
                    formData.password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password) 
                      ? "text-green-600" 
                      : formData.password.length >= 6 
                      ? "text-yellow-600" 
                      : "text-red-600"
                  }>
                    {formData.password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)
                      ? "Très fort"
                      : formData.password.length >= 8
                      ? "Fort"
                      : formData.password.length >= 6
                      ? "Moyen"
                      : "Faible"
                    }
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      formData.password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)
                        ? "bg-green-600 w-full"
                        : formData.password.length >= 8
                        ? "bg-blue-600 w-3/4"
                        : formData.password.length >= 6
                        ? "bg-yellow-600 w-1/2"
                        : formData.password.length > 0
                        ? "bg-red-600 w-1/4"
                        : "w-0"
                    }`}
                  ></div>
                </div>
                
                {/* Checkboxes des critères */}
                <div className="mt-3 space-y-1 text-sm">
                  <div className={`flex items-center ${formData.password.length >= 8 ? "text-green-600" : "text-gray-400"}`}>
                    <span className="mr-2">{formData.password.length >= 8 ? "✓" : "○"}</span>
                    Au moins 8 caractères
                  </div>
                  <div className={`flex items-center ${/(?=.*[a-z])/.test(formData.password) ? "text-green-600" : "text-gray-400"}`}>
                    <span className="mr-2">{/(?=.*[a-z])/.test(formData.password) ? "✓" : "○"}</span>
                    Une minuscule
                  </div>
                  <div className={`flex items-center ${/(?=.*[A-Z])/.test(formData.password) ? "text-green-600" : "text-gray-400"}`}>
                    <span className="mr-2">{/(?=.*[A-Z])/.test(formData.password) ? "✓" : "○"}</span>
                    Une majuscule
                  </div>
                  <div className={`flex items-center ${/(?=.*\d)/.test(formData.password) ? "text-green-600" : "text-gray-400"}`}>
                    <span className="mr-2">{/(?=.*\d)/.test(formData.password) ? "✓" : "○"}</span>
                    Un chiffre
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg text-blue-500 font-bold border-2 border-blue-200 bg-blue-100/50 cursor-pointer transition ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Réinitialisation..." : "Réinitialiser le mot de passe"}
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-700 text-xs md:text-sm">
                  <Link
                    to="/login"
                    className="underline font-bold hover:text-blue-500 cursor-pointer"
                  >
                    ← Retour à la connexion
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>Le lien expire automatiquement après 1 heure pour des raisons de sécurité.</p>
            <p className="mt-1">Si vous rencontrez des problèmes, contactez le support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}