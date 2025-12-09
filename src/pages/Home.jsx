import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CurrencyModal from "../components/CurrencyModal";
import SpacePub from "../components/SpacePub";
import ElementsPopulaire from "../components/ElementsPopulaire";

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
      <Hero />
      <SpacePub/>
      <CurrencyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelection}
      />

      {/* Contenu de Home */}
    </>
  );
}
