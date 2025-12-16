import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import FlightSearch from "../components/FlightSearch";
import FlightsPage from "../pages/FlightsPage";
import FlightsDetailPage from "../pages/FlightsDetailPage";
import ReservationPage from "../pages/ReservationPage";
import HotelsPage from "../pages/HotelsPage";
import HotelsDetailPage from "../pages/HotelsDetailPage";
import HotelGalleryPage from "../components/HotelGalleryPage";




// creation de la liste des route avec createBrowserROuter

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/vols", element: <FlightsPage /> },
  { path: "/hotels", element: <HotelsPage /> },

  { path: "/vols-details", element: <FlightsDetailPage /> },
  { path: "/hotels-details", element: <HotelsDetailPage /> },
  { path: "/hotels/:id", element: <HotelsDetailPage /> },
  { path: "/hotels/:id/gallery", element: <HotelGalleryPage /> },



  { path: "/register", element: <Register /> },
  { path: "/reservation", element: <ReservationPage /> },

  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },

]);




export default router;