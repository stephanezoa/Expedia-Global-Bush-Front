import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import HotelDetail from "../pages/HotelDetail";

// creation de la liste des route avec createBrowserROuter

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/hotel/:id", element: <HotelDetail /> },
]);

export default router;