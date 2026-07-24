import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import SpecialSession from "./components/home/SpecialSession";
import ConferenceTracks from "./components/home/conferenceTracks";
import PartnersPublication from "./components/home/PartnersPublication";
import KeynoteHeader from "./components/home/KeynoteHeader";
import KeynoteSpeakers from "./components/Speaker/KeynoteSpeakers";
import SponsorshipHeader from "./components/home/SponsorshipHeader";

// Import Modal
import SubmitPaperModal from "./components/SubmitPaperModal";
import AboutHero from "./components/about/AboutHero";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import PartnersPage from "./components/committee/PartnersPage";


function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Website open hote hi popup show hoga
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <SubmitPaperModal onClose={() => setShowModal(false)} />
      )}

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/special-session" element={<SpecialSession />} />
          <Route
            path="/conference-Tracks"
            element={<ConferenceTracks />}
          />
          <Route
            path="/PartnersPublication"
            element={<PartnersPublication />}
          />
          <Route path="/keynote" element={<KeynoteHeader />} />
          <Route path="/keynotes" element={<KeynoteSpeakers />} />
          <Route
            path="/sponsorship"
            element={<SponsorshipHeader />}
          />
          <Route path="/aboutsection" element={<AboutHero />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/committee" element={<PartnersPage />}/>

        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;