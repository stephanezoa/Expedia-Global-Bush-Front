import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
});

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const handleChange = (e) => {
const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
}));

if (errors[name]) {
    setErrors((prev) => ({ ...prev, [name]: "" }));
    }
};

const validateForm = () => {
const newErrors = {};
    if (!formData.email.trim()) {
    newErrors.email = "L'email est requis";
} else if (!/\S+@\S+.\S+/.test(formData.email)) {
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
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
    }   
    setIsSubmitting(true);
    try {
        console.log("Connexion avec:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        navigate("/dashboard");
    } catch (error) {
        console.error("Erreur:", error);
        setErrors({ general: "Email ou mot de passe incorrect" });
    } finally {
        setIsSubmitting(false);
    }
};

return (
    <div className="h-screen w-screen flex">
        <div className="hidden lg:flex w-1/2 h-full relative"> 
            <img src="/src/assets/login.jpg" alt="Login" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 text-white">
                    <div>
                        <div className=" flex justify-start mb-2">
                            <div className="flex items-start space-x-3">
                                <img src="/src/assets/logoApp.jpg" alt="Logo App"  className="w-30 md:w-40 lg:w-50"/>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold mt-8"> Voyagez avec <span className="text-yellow-300">Confiance</span> </h1> 
                        <p className="mt-4 text-lg opacity-90"> Réservez vos vols, hôtels et activités en toute simplicité </p> 
                    </div>
                </div>
        </div>


        <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md">
            <div className=" flex justify-center mb-2">
                <div className="flex items-center space-x-3">
                <div>
                   <img src="/src/assets/logoApp.jpg" alt="Logo App"  className="w-30 md:w-40 lg:w-50"/>
                </div>
                </div>
            </div>

            {/* Formulaire */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Bienvenue à bord</h2>
                <p className="text-gray-600 mt-2">Connectez-vous pour accéder à votre compte</p>
                </div>

                {errors.general && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center text-red-700">{errors.general}</div>
                </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">

                     <div className="">
                        <Link to={""}>

                            <div className="relative  rounded-lg flex items-center  gap-3 justify-center py-3 cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 ">
                                <div className="flex items-center pointer-events-none">
                                    <img src="/src/assets/goolge-removebg-preview.png" alt="logo goolge" className="w-7 h-7"/>
                                </div>
                                <p className="font-bold">continuer avec google</p>
                            </div>
                        </Link>
                    </div>

                     <div className="">
                        <Link to={""}>

                        <div className="relative  rounded-lg flex items-center  gap-3 justify-center py-3 cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 ">
                            <div className="flex items-center pointer-events-none">
                                <img src="/src/assets/facebppk-removebg-preview.png" alt="logo goolge" className="w-11"/>
                            </div>
                            <p className="font-bold">continuer avec Facebook</p>
                        </div>
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                        </Link>
                    </div>

                        <div className="">
                            <Link to={""}>

                        <div className="relative  rounded-lg flex items-center  gap-3 justify-center py-3 cursor-pointer hover:bg-gray-100 transition text-gray-500 bg-gray-100 border border-gray-200 ">
                            <div className="flex items-center justify-center pointer-events-none">
                                <img src="/src/assets/logoapple-removebg-preview.png" alt="logo goolge" className="w-6"/>
                            </div>
                            <p className="font-bold">continuer avec Apple</p>
                        </div>
                        </Link>
                    </div>


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
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                        errors.email ? "border-red-300" : "border-gray-300"
                        }`}
                    />
                    </div>

                </div>

                                <div>

                    <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        disabled={isSubmitting}
                        className={`block w-full pl-3 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
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
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        disabled={isSubmitting}
                    />
                    <label className="ml-2 block text-sm text-gray-700">Se souvenir de moi</label>
                    </div>
                    <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    Mot de passe oublié?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg text-blue-600 font-bold bg-blue-100 transition ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                >
                    {isSubmitting ? "Connexion en cours..." : "Se connecter"}
                </button>
                <div className="flex items-center justify-center">
                    <p className="text-gray-700 text-xs md:text-sm ">vous avez vesoin de <span className="underline font-bold hover:text-blue-500 cursor-pointer">creer un compte ?</span></p>
                </div>


                <div className="text-center mt-4">
                    <p className="text-gray-700 text-xs md:text-sm ">
                        en acceptant, vous acceptez nos {' '}
                        <Link to="/register" className="underline font-bold hover:text-blue-500 cursor-pointer">
                            conditions d'utilisation {' '}
                        </Link>
                        et {' '}
                        <Link to="/register" className="underline font-bold hover:text-blue-500 cursor-pointer">
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
