import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: 
            "" 
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullname.trim()) newErrors.fullname = "Le nom complet est requis";
            if (!formData.email.trim()) newErrors.email = "L'email est requis";
                else if (!/\S+@\S+.\S+/.test(formData.email)) newErrors.email = "Format d'email invalide";
        if (!formData.password) newErrors.password = "Le mot de passe est requis";
        else if (formData.password.length < 6) newErrors.password = "Minimum 6 caractères";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
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
    console.log("Inscription avec:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/login");
    } catch (error) {
    console.error("Erreur:", error);
    setErrors({ general: "Erreur lors de l'inscription" });
    } finally {
    setIsSubmitting(false);
    }
    };

    return (
        <div className="h-screen w-screen flex">
            <div className="hidden lg:flex w-1/2 h-full relative">
                <img
                    src="/src/assets/regois.jpg"
                    alt="Inscription"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 text-white">
                    <div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-start">
                                <img src="/src/assets/logoApp.jpg" alt="Logo App" className="w-30 md:w-40 lg:w-50" />
                            </div>
                            <h1 className="text-4xl font-bold">Rejoignez-nous et <span className="text-yellow-300">voyagez</span> en toute confiance</h1>
                            <p className="text-lg opacity-90">Créez votre compte pour réserver vos vols, hôtels et activités</p>
                        </div>
                    </div>
                </div>
            </div>
    <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
        {/* Logo mobile */}
        <div className=" flex justify-center mb-8">
             <div className=" flex justify-center mb-2">
                <div className="flex items-center space-x-3">
                <div>
                   <img src="/src/assets/logoApp.jpg" alt="Logo App"  className="w-30 md:w-40 lg:w-50"/>
                </div>
                </div>
            </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Créez votre compte</h2>
            <p className="text-gray-600 mt-2">Commencez votre aventure dès maintenant</p>
            </div>

            {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center text-red-700">{errors.general}</div>
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
           

        
            <div>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                disabled={isSubmitting}
                className={`block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                    errors.email ? "border-red-300" : "border-gray-300"
                }`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div className="relative">
                <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
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
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
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
                {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
            <div className="flex justify-center items-center gap-2 text-base text-gray-500">
                <div className="bg-gradient-to-r from-gray-100/10 via-gray-200 to-gray-100/10 h-1 w-30"></div> ou <div className="bg-gradient-to-r from-gray-100/10 via-gray-200 to-gray-100/10 h-1 w-30"></div>
            </div>

            <div className="flex items-center justify-center gap-5 ">
                    <div className="">
                        <Link to={""}>
                            <div className="relative  p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 ">
                                <div className="flex items-center pointer-events-none">
                                    <img src="/src/assets/goolge-removebg-preview.png" alt="logo goolge" className="w-7 h-7"/>
                                </div>
                            </div>
                        </Link>
                    </div>

                     <div className="">
                        <Link to={""}>
                        <div className="relative  flex items-center p-2 rounded-full justify-center cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 ">
                            <div className="flex items-center pointer-events-none">
                                <img src="/src/assets/facebppk-removebg-preview.png" alt="logo goolge" className="w-11"/>
                            </div>
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                        </Link>
                    </div>

                        <div className="">
                            <Link to={""}>

                        <div className="relative  p-2 rounded-full flex items-center  justify-center   cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 ">
                            <div className="flex items-center justify-center pointer-events-none">
                                <img src="/src/assets/logoapple-removebg-preview.png" alt="logo goolge" className="w-6"/>
                            </div>
                        </div>
                        </Link>
                    </div>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg text-blue-500 font-bold border-2 border-blue-200 bg-blue-100/50 cursor-pointer transition ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
            >
                {isSubmitting ? "Inscription en cours..." : "S'inscrire"}
            </button>

            <div className="text-center mt-4">
                <p className="text-gray-700 text-xs md:text-sm">
                Déjà un compte?{' '}
                <Link to="/login" className="underline font-bold hover:text-blue-500 cursor-pointer">
                    Connectez-vous
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
