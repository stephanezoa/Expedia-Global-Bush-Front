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

import CarsPage from "../pages/CarPage";
import CarDetailPage from "../pages/CarDetailPage";
import CarGalleryPage from "../components/CarGalleryPage";





// creation de la liste des route avec createBrowserROuter

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/vols", element: <FlightsPage /> },
  { path: "/hotels", element: <HotelsPage /> },

  { path: "/vols/:id", element: <FlightsDetailPage /> },
  { path: "/hotels/:id", element: <HotelsDetailPage /> },

  { path: "/hotels/:id/gallery", element: <HotelGalleryPage /> },

  { path: "/cars", element: <CarsPage /> },
  { path: "/cars/:id", element: <CarDetailPage /> },
  { path: "/cars/:id/gallery", element: <CarGalleryPage /> },


  { path: "/register", element: <Register /> },
  { path: "/reservation", element: <ReservationPage /> },

  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },

]);




export default router;