// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Si vous en avez un

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Ceci affichera le contenu de la page actuelle */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;