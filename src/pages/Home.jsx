import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CurrencyModal from "../components/CurrencyModal";
import SpacePub from "../components/SpacePub";
import ElementsPopulaire from "../components/ElementsPopulaire";
import InfoGlogush from "../components/InfoGlobush";
import Footer from "../components/Footer";
import VolsPopulaire from "../components/vols/VolsPopulaire";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState("XAF");

  const handleSelection = ({ region, language, currency }) => {
    setCurrentCurrency(currency);
    setModalOpen(false);
  };

  return (
    <>
      <Header
        currentCurrency={currentCurrency}
        openCurrencyModal={() => setModalOpen(true)}
      />
      <div className="">
        <Hero />
      </div>
      <div className="bg-gradient-to-tr from-blue-100 via-white to-blue-200  py-13 lg:p-20">
        <SpacePub/>
      </div>
      <ElementsPopulaire 
                title="Destinations Populaires"
                seeAllLink="/destinations"
            />
      <VolsPopulaire />
      <InfoGlogush/> 
      <CurrencyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelection}
      />
      <Footer />
      {/* Contenu de Home */}
    </>
  );
}
