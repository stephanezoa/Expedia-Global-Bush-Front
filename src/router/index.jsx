// src/router.js (version mise à jour)
import { createBrowserRouter } from "react-router-dom";

// Import de toutes vos pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import FlightsPage from "../pages/FlightsPage";
import FlightsDetailPage from "../pages/FlightsDetailPage";
import ReservationPage from "../pages/ReservationPage";
import HotelsPage from "../pages/HotelsPage";
import HotelsDetailPage from "../pages/HotelsDetailPage";
import HotelGalleryPage from "../components/HotelGalleryPage";
import CarsPage from "../pages/CarPage";
import JourneysPage from "../pages/JourneysPage";
import JourneyDetailPage from "../pages/JourneyDetailPage";
import JourneyGalleryPage from "../pages/JourneyGalleryPage";
import CarDetailPage from "../pages/CarDetailPage";
import CarGalleryPage from "../components/CarGalleryPage";
import Destinations from "../pages/Destination";
import DestinationDetail from "../pages/DestinationDetail";
import DestinationGallery from "../pages/DestinationGallery";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import Feedback from "../pages/Feedback";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Cookies from "../pages/Cookies";
import DestinationPays from "../pages/DestinationPays";
import DestinationsCameroun from "../pages/DestinationsCameroun";



import Careers from "../pages/Careers";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Aboutus from "../pages/Aboutus";
import Mission from "../pages/Mission";

// Import du Layout avec Header intégré
import Layout from "../pages/Layout";
import Newsrooms from "../pages/Newsrooms";
import ContentGuidelines from "../pages/ContentGuidelines";

// Création du router avec Layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout contient le Header
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "hotels", element: <HotelsPage /> },
      { path: "vols", element: <FlightsPage /> },
      { path: "vols/:id", element: <FlightsDetailPage /> },
      { path: "hotels/:id", element: <HotelsDetailPage /> },
      { path: "hotels/:id/gallery", element: <HotelGalleryPage /> },
      { path: "cars", element: <CarsPage /> },
      { path: "journeys", element: <JourneysPage /> },
      { path: "journeys/:id", element: <JourneyDetailPage /> },
      { path: "journeys/:id/gallery", element: <JourneyGalleryPage /> },
      { path: "destination", element: <Destinations /> },
      { path: "destination-cameroun", element: <DestinationsCameroun /> },
      { path: "destination-pays", element: <DestinationPays /> },
      { path: "destination/:id", element: <DestinationDetail /> },
      { path: "destination/:id/gallery", element: <DestinationGallery /> },
      { path: "cars/:id", element: <CarDetailPage /> },
      { path: "cars/:id/gallery", element: <CarGalleryPage /> },
      { path: "reservation", element: <ReservationPage /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "/legal/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/legal/terms-conditions", element: <TermsConditions /> },
      { path: "/legal/content-guidelines", element: <ContentGuidelines /> },
      { path: "newsrooms", element: <Newsrooms /> },
      { path: "feedback", element: <Feedback /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "/legal/cookies", element: <Cookies /> },

      { path: "careers", element: <Careers /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "aboutus", element: <Aboutus /> },
      { path: "mission", element: <Mission /> },
      


    ]
  }
]);

export default router;  