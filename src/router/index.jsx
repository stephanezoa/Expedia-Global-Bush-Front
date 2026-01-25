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
import Places from "../pages/Places";
import Market from "../pages/Market";

import Visa from "../pages/Visa";
import Transferts from "../pages/Transferts";
import Esim from "../pages/Esim";
import Insurance from "../pages/Insurance";
import Cancelation from "../pages/Cancelation";
import Holiday from "../pages/Holiday";
import Contactus from "../pages/Contactus";
import Nossolutions from "../pages/Nossolutions";


import Voyagesaffaires from "../pages/Voyagesaffaires";
import Gestionvoyages from "../pages/Gestionvoyages";
import Voyagesmaritime from "../pages/Voyagesmaritime";
import Ecotourisme from "../pages/Ecotourisme";
import Visitefamille from "../pages/Visitefamille";
import Circuitscycliste from "../pages/Circuitscycliste";
import Circuitgolf from "../pages/Circuitgolf";
import Voyagenoces from "../pages/Voyagenoces";
import Hebergementhotelier from "../pages/Hebergementhotelier";
import Gestionreunions from "../pages/Gestionreunions";
import Locationvoiture from "../pages/Locationvoiture";
import Transfertaeoport from "../pages/Transfertaeoport";
import Rencontreaccueil from "../pages/Rencontreaccueil";
import Voyageloisir from "../pages/Voyageloisir";



import Preparersonvoyage from "../pages/Preparersonvoyage";
import Raisons12 from "../pages/Raisons12";
import Chauffeursguides from "../pages/Chauffeursguides";
import Guidevoyage from "../pages/Guidevoyage";
import Dosdont from "../pages/Dosdont";
import FAQ from "../pages/FAQ";
import Developpementdurable from "../pages/Developpementdurable";

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
      { path: "visa", element: <Visa /> },
      { path: "places", element: <Places /> },
      { path: "market", element: <Market /> },
      { path: "transferts", element: <Transferts /> },
      { path: "esim", element: <Esim /> },
      { path: "insurance", element: <Insurance /> },
      { path: "cancelation", element: <Cancelation /> },
      { path: "holiday", element: <Holiday /> },
      { path: "contactus", element: <Contactus /> },
      { path: "Nossolutions", element: <Nossolutions /> },

      { path: "voyagesaffaires", element: <Voyagesaffaires /> },
      { path: "gestionvoyages", element: <Gestionvoyages /> },
      { path: "voyagesmaritime", element: <Voyagesmaritime /> },
      { path: "ecotourisme", element: <Ecotourisme /> },
      { path: "visitefamille", element: <Visitefamille /> },
      { path: "circuitscycliste", element: <Circuitscycliste /> },
      { path: "circuitgolf", element: <Circuitgolf /> },
      { path: "voyagenoces", element: <Voyagenoces /> },
      { path: "hebergementhotelier", element: <Hebergementhotelier /> },
      { path: "gestionreunions", element: <Gestionreunions /> },
      { path: "locationvoiture", element: <Locationvoiture /> },
      { path: "transfertaeoport", element: <Transfertaeoport /> },
      { path: "rencontreaccueil", element: <Rencontreaccueil /> },
      { path: "voyageloisir", element: <Voyageloisir /> },


      { path: "preparersonvoyage", element: <Preparersonvoyage /> },
      { path: "raisons12", element: <Raisons12 /> },
      { path: "chauffeursguides", element: <Chauffeursguides /> },
      { path: "guidevoyage", element: <Guidevoyage /> },
      { path: "dosdont", element: <Dosdont /> },
      { path: "faq", element: <FAQ /> },
      { path: "developpementdurable", element: <Developpementdurable /> },


       



    ]
  }
]);

export default router;  