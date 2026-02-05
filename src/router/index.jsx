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
import Camerounagencevoyage from "../pages/Camerounagencevoyage";



import Guidevoyages from "../pages/Guidevoyages";
import Aproposcameroun from "../pages/Aproposcameroun";
import Infocameroun from "../pages/Infocameroun";
import Guidevoyagecameroun from "../pages/Guidevoyagecameroun";
import Affairecameroun from "../pages/Affairecameroun";




import Forfaittouristiques from "../pages/Forfaittourisques";
import Decouverteculturelle from "../pages/Decouverteculturelle";
import Visiteplages from "../pages/Visiteplages";
import Ecotourisme2 from "../pages/Ecotourisme2";
import Voyageetude from "../pages/Voyageetude";
import Safarifaune from "../pages/Safarifaune";
import Plongetours from "../pages/Plongetours";
import Gorilletours from "../pages/Gorilletours";
import Ornithologietours from "../pages/Ornithologietours";



import Clone from "../pages/Clone";
import Evasionlecairealexandrie from "../pages/Evasionlecairealexandrie";
import Croisierenilclassique from "../pages/Croisierenilclassique";



import Cameroun from "../pages/Cameroun";
import Tresorscamerounyaoundekribi from "../pages/Tresorscamerounyaoundekribi";
import Randonnemontagneouest from "../pages/Randonnemontagneouest";
import Decouvertecompletecameroun from "../pages/Decouvertecompletecameroun";
import Safariwaza from "../pages/Safariwaza";
import Culturebamileke from "../pages/Culturebamileke";
import Afriqueminiaturetourcomplet from "../pages/Afriqueminiaturetourcomplet";
import Aventureforettropicale from "../pages/Aventureforettropicale";
import Coteplagelittoral from "../pages/Coteplagelittoral";
import Rencontrenord from "../pages/Rencontrenord";


import Tchad from "../pages/Tchad";
import Decouvertesudtchadien from "../pages/Decouvertesudtchadien";
import Royaumescentre from "../pages/Royaumescentre";
import Expeditionsaharienne from "../pages/Expeditionsaharienne";
import Massif from "../pages/Massif";
import Safarizakouma from "../pages/Safarizakouma";
import Tchadcomplet from "../pages/Tchadcomplet";
import Decouvertelactchad from "../pages/Decouvertelactchad";
import Patrimoinesud from "../pages/Patrimoinesud";
import Aventuresahara from "../pages/Aventuresahara";





import Guineeequatorial from "../pages/Guineeequatorial";
import Decouvertedeuxrives from "../pages/Decouvertedeuxrives";
import Aventurebioko from "../pages/Aventurebioko";
import Riomuni from "../pages/Riomuni";
import Iles from "../pages/Iles";
import Naturesauvage from "../pages/Naturesauvage";
import Guineeequatorialcomplete from "../pages/Guineeequatorialcomplete";
import Cote from "../pages/Cote";
import Luxemalabo from "../pages/Luxemalabo";
import Affairesdecouverte from "../pages/Affairesdecouverte";



import Saotome from "../pages/Saotome";
import Decouvertesaotome from "../pages/Decouvertesaotome";
import Randonneplantation from "../pages/Randonneplantation";
import Plageparadis from "../pages/Plageparadis";
import Aventuregrande from "../pages/Aventuregrande";
import Circuitdeuxiles from "../pages/Circuitdeuxiles";
import Naturebiodiversite from "../pages/Naturebiodiversite";
import Cacao from "../pages/Cacao";
import Plagesecrete from "../pages/Plagesecrete";
import Culturetradition from "../pages/Culturetradition";





import Congo from "../pages/Congo";
import Congoexpress from "../pages/Congoexpress";
import Safaricongo from "../pages/Safaricongo";
import Aventurecotiere from "../pages/Aventurecotiere";
import Gorilleforet from "../pages/Gorilleforet";
import Grandtourcongo from "../pages/Grandtourcongo";
import Valleemontagne from "../pages/Valleemontagne";
import Ecotourismecongo from "../pages/Ecotourismecongo"; 
import Patrimoinecongo from "../pages/Patrimoinecongo";
import Congonature from "../pages/Congonature";


import Republique from "../pages/Republique";
import Coeurcentre from "../pages/Coeurcentre";
import Megoli from "../pages/Megoli";
import Expedition from "../pages/Expedition";
import Safarizanga from "../pages/Safarizanga";
import Aventuresahel from "../pages/Aventuresahel";
import Tourouest from "../pages/Tourouest";
import Chutes from "../pages/Chutes";
import Immersionforet from "../pages/Immersionforet";
import Routecentre from "../pages/Routecentre";


import Angola from "../pages/Angola";
import Tresorangola from "../pages/Tresorangola";
import Plateaucentre from "../pages/Plateaucentre";
import Nordangola from "../pages/Nordangola";
import Desertnamibe from "../pages/Desertnamibe";
import Enclave from "../pages/Enclave";
import Sudangola from "../pages/Sudangola"; 
import Coteangola from "../pages/Coteangola";
import Valleefertile from "../pages/Valleefertile";
import Safariiona from "../pages/Safariiona"; 



import Rdcongo from "../pages/Rdcongo"; 
import Tresorbascongo from "../pages/Tresorbascongo"; 
import Expeditioncoeur from "../pages/Expeditioncoeur";
import Gorillevolcan from "../pages/Gorillevolcan";
import Foretequatorialcongo from "../pages/Foretequatorialcongo";
import Minesavane from "../pages/Minesavane";
import Rdccomplet from "../pages/Rdccomplet";
import Rivemontagne from "../pages/Rivemontagne";
import Culturetraditions from "../pages/Culturetraditions";
import Villehistorique from "../pages/Villehistorique";


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
      { path: "developpementdurable", element: <Developpementdurable /> },




      { path: "guidevoyages", element: <Guidevoyages /> },
      { path: "aproposcameroun", element: <Aproposcameroun /> },
     
      { path: "camerounagencevoyage", element: <Camerounagencevoyage /> },
      { path: "infocameroun", element: <Infocameroun /> },
      { path: "guidevoyagecameroun", element: <Guidevoyagecameroun /> },
      { path: "affairecameroun", element: <Affairecameroun /> },



      { path: "forfaittouristiques", element: <Forfaittouristiques /> },
      { path: "decouverteculturelle", element: <Decouverteculturelle /> },
      { path: "visiteplages", element: <Visiteplages /> },
      { path: "ecotourisme2", element: <Ecotourisme2 /> },
      { path: "voyageetude", element: <Voyageetude /> },
      { path: "safarifaune", element: <Safarifaune /> },
      { path: "plongetours", element: <Plongetours /> },
      { path: "gorilletours", element: <Gorilletours /> },
      { path: "ornithologietours", element: <Ornithologietours /> },



      { path: "clone", element: <Clone /> },
      { path: "evasionlecairealexandrie", element: <Evasionlecairealexandrie /> },
      { path: "croisierenilclassique", element: <Croisierenilclassique /> },


      { path: "cameroun", element: <Cameroun /> },
      { path: "tresorscamerounyaoundekribi", element: <Tresorscamerounyaoundekribi /> },
      { path: "randonnemontagneouest", element: <Randonnemontagneouest /> },
      { path: "decouvertecompletecameroun", element: <Decouvertecompletecameroun /> },
      { path: "safariwaza", element: <Safariwaza /> },
      { path: "culturebamileke", element: <Culturebamileke /> },
      { path: "afriqueminiaturetourcomplet", element: <Afriqueminiaturetourcomplet /> },
      { path: "aventureforettropicale", element: <Aventureforettropicale /> },
      { path: "coteplagelittoral", element: <Coteplagelittoral /> },
      { path: "rencontrenord", element: <Rencontrenord /> },



      { path: "tchad", element: <Tchad /> },
      { path: "decouvertesudtchadien", element: <Decouvertesudtchadien /> },
      { path: "royaumescentre", element: <Royaumescentre /> },
      { path: "expeditionsaharienne", element: <Expeditionsaharienne /> },
      { path: "massif", element: <Massif /> },
      { path: "safarizakouma", element: <Safarizakouma /> },
      { path: "tchadcomplet", element: <Tchadcomplet /> },
      { path: "decouvertelactchad", element: <Decouvertelactchad /> },
      { path: "patrimoinesud", element: <Patrimoinesud /> },
      { path: "aventuresahara", element: <Aventuresahara /> },





      { path: "guineeequatorial", element: <Guineeequatorial /> },
      { path: "decouvertedeuxrives", element: <Decouvertedeuxrives /> },
      { path: "aventurebioko", element: <Aventurebioko /> },
      { path: "aventurebioko", element: <Aventurebioko /> },
      { path: "riomuni", element: <Riomuni /> },
      { path: "iles", element: <Iles /> },
      { path: "naturesauvage", element: <Naturesauvage /> },
      { path: "guineeequatorialcomplete", element: <Guineeequatorialcomplete /> },
      { path: "luxemalabo", element: <Luxemalabo /> },
      { path: "Affairesdecouverte", element: <Affairesdecouverte /> },



      { path: "saotome", element: <Saotome /> },
      { path: "decouvertesaotome", element: <Decouvertesaotome /> },
      { path: "randonneplantation", element: <Randonneplantation /> },
      { path: "plageparadis", element: <Plageparadis /> },
      { path: "aventuregrande", element: <Aventuregrande /> },
      { path: "circuitdeuxiles", element: <Circuitdeuxiles /> },
      { path: "naturebiodiversite", element: <Naturebiodiversite /> },
      { path: "cacao", element: <Cacao /> },
      { path: "plagesecrete", element: <Plagesecrete /> },
      { path: "culturetradition", element: <Culturetradition /> },



      { path: "congo", element: <Congo /> },
      { path: "congoexpress", element: <Congoexpress /> },
      { path: "safaricongo", element: <Safaricongo /> },
      { path: "aventurecotiere", element: <Aventurecotiere /> },
      { path: "gorilleforet", element: <Gorilleforet /> },
      { path: "grandtourcongo", element: <Grandtourcongo /> },
      { path: "valleemontagne", element: <Valleemontagne /> },
      { path: "ecotourismecongo", element: <Ecotourismecongo /> },
      { path: "patrimoinecongo", element: <Patrimoinecongo /> },
      { path: "congonature", element: <Congonature /> },





      { path: "republique", element: <Republique /> },
      { path: "coeurcentre", element: <Coeurcentre /> },
      { path: "megoli", element: <Megoli /> },
      { path: "expedition", element: <Expedition /> },
      { path: "safarizanga", element: <Safarizanga /> },
      { path: "aventuresahel", element: <Aventuresahel /> },
      { path: "tourouest", element: <Tourouest /> },
      { path: "chutes", element: <Chutes /> },
      { path: "immersionforet", element: <Immersionforet /> },
      { path: "routecentre", element: <Routecentre /> },





      { path: "angola", element: <Angola /> },
      { path: "tresorangola", element: <Tresorangola /> },
      { path: "plateaucentre", element: <Plateaucentre /> },
      { path: "nordangola", element: <Nordangola /> },
      { path: "desertnamibe", element: <Desertnamibe /> },
      { path: "enclave", element: <Enclave /> },
      { path: "sudangola", element: <Sudangola /> },
      { path: "coteangola", element: <Coteangola /> },
      { path: "valleefertile", element: <Valleefertile /> },
      { path: "safariiona", element: <Safariiona /> },




      { path: "rdcongo", element: <Rdcongo /> },
      { path: "tresorbascongo", element: <Tresorbascongo /> },
      { path: "expeditioncoeur", element: <Expeditioncoeur /> },
      { path: "gorillevolcan", element: <Gorillevolcan /> },
      { path: "foretequatorialcongo", element: <Foretequatorialcongo /> },
      { path: "minesavane", element: <Minesavane /> },
      { path: "rdccomplet", element: <Rdccomplet /> },
      { path: "rivemontagne", element: <Rivemontagne /> },
      { path: "culturetraditions", element: <Culturetraditions /> },
      { path: "villehistorique", element: <Villehistorique /> },




      



    ]
  }
]);

export default router;  