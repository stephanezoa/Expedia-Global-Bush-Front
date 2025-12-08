import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [step, setStep] = useState(1); // 1 = email, 2 = nouveau mot de passe

  // Vérifier si on est dans l'étape de réinitialisation (avec token)
  const isResetStep = location.pathname.includes("/reset-password/");

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

  const validateEmailForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    return newErrors;
  };

  const validatePasswordForm = () => {
    const newErrors = {};
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 caractères";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    return newErrors;
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const formErrors = validateEmailForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Envoi d'email à:", formData.email);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsEmailSent(true);
      // Dans la réalité, vous enverriez la requête à votre API
    } catch (error) {
      console.error("Erreur:", error);
      setErrors({ general: "Erreur lors de l'envoi de l'email" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const formErrors = validatePasswordForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Réinitialisation avec:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Rediriger vers login avec message de succès
      navigate("/login?reset=success");
    } catch (error) {
      console.error("Erreur:", error);
      setErrors({ general: "Erreur lors de la réinitialisation" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Section Image à gauche */}
      <div className="hidden lg:flex w-1/2 h-full relative">
        <img
          src="/src/assets/Voyage-naturel-au-cameroun-1024x683.jpg"
          alt="Réinitialisation mot de passe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-start">
                <img
                  src="/src/assets/logoApp.jpg"
                  alt="Logo App"
                  className="w-30 md:w-40 lg:w-50"
                />
              </div>
              <h1 className="text-4xl font-bold">
                Réinitialisez votre <span className="text-yellow-300">mot de passe</span>
              </h1>
              <p className="text-lg opacity-90">
                Accédez à nouveau à votre compte et continuez vos aventures
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg">
              <span className="font-bold">Conseil :</span> Utilisez un mot de passe fort et unique
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Minimum 6 caractères
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Lettres et chiffres
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Un caractère spécial recommandé
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Formulaire à droite */}
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

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {isResetStep ? "Nouveau mot de passe" : "Mot de passe oublié ?"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isResetStep
                  ? "Créez un nouveau mot de passe sécurisé"
                  : "Entrez votre email pour recevoir un lien de réinitialisation"}
              </p>
            </div>

            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center text-red-700">{errors.general}</div>
              </div>
            )}

            {isEmailSent && !isResetStep ? (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email envoyé !</h3>
                  <p className="text-gray-600">
                    Un lien de réinitialisation a été envoyé à{" "}
                    <span className="font-semibold">{formData.email}</span>
                  </p>
                  <p className="text-gray-600 mt-2">
                    Vérifiez votre boîte de réception et suivez les instructions.
                  </p>
                </div>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setIsEmailSent(false);
                      setErrors({});
                    }}
                    className="w-full py-3 px-4 rounded-lg text-blue-500 font-bold border-2 border-blue-200 bg-blue-100/50 hover:bg-blue-100 transition"
                  >
                    Renvoyer l'email
                  </button>
                  <Link
                    to="/login"
                    className="block w-full py-3 px-4 rounded-lg font-bold border-2 border-gray-200 hover:bg-gray-50 transition text-center"
                  >
                    Retour à la connexion
                  </Link>
                </div>
              </div>
            ) : isResetStep ? (
              // Étape de réinitialisation du mot de passe
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
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
                    placeholder="Confirmez le nouveau mot de passe"
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
                    <span>Sécurité du mot de passe</span>
                    <span className={
                      formData.password.length >= 8 ? "text-green-600" : 
                      formData.password.length >= 6 ? "text-yellow-600" : 
                      "text-red-600"
                    }>
                      {formData.password.length >= 8 ? "Fort" : 
                       formData.password.length >= 6 ? "Moyen" : 
                       "Faible"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        formData.password.length >= 8 ? "bg-green-600 w-full" : 
                        formData.password.length >= 6 ? "bg-yellow-600 w-2/3" : 
                        formData.password.length > 0 ? "bg-red-600 w-1/3" : 
                        "w-0"
                      }`}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Utilisez au moins 8 caractères avec des lettres, chiffres et symboles
                  </p>
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
              </form>
            ) : (
              // Étape d'envoi d'email
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email"
                    disabled={isSubmitting}
                    className={`block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="font-semibold text-blue-800 mb-1">Comment ça marche :</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Entrez votre adresse email ci-dessus</li>
                    <li>Cliquez sur "Envoyer le lien"</li>
                    <li>Vérifiez votre boîte de réception</li>
                    <li>Suivez le lien pour créer un nouveau mot de passe</li>
                  </ol>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg text-blue-500 font-bold border-2 border-blue-200 bg-blue-100/50 cursor-pointer transition ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le lien"}
                </button>
              </form>
            )}

            {/* Liens de navigation */}
            <div className="text-center mt-6 space-y-2">
              {!isEmailSent && !isResetStep && (
                <>
                  <p className="text-gray-700 text-xs md:text-sm">
                    Vous vous souvenez de votre mot de passe ?{' '}
                    <Link
                      to="/login"
                      className="underline font-bold hover:text-blue-500 cursor-pointer"
                    >
                      Connectez-vous
                    </Link>
                  </p>
                  <p className="text-gray-700 text-xs md:text-sm">
                    Pas encore de compte ?{' '}
                    <Link
                      to="/register"
                      className="underline font-bold hover:text-blue-500 cursor-pointer"
                    >
                      Inscrivez-vous
                    </Link>
                  </p>
                </>
              )}

              {isResetStep && (
                <p className="text-gray-700 text-xs md:text-sm">
                  Retour à la{' '}
                  <Link
                    to="/login"
                    className="underline font-bold hover:text-blue-500 cursor-pointer"
                  >
                    connexion
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* Footer informatif */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Global Bush Voyages. Tous droits réservés.</p>
            <p className="mt-1">Pour toute assistance, contactez-nous à support@globalbush.cm</p>
          </div>
        </div>
      </div>
    </div>
  );
}