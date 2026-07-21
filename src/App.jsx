import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import SpecialSession from "./components/home/SpecialSession";
import ConferenceTracks from "./components/home/conferenceTracks";
import PartnersPublication from "./components/home/PartnersPublication";
import KeynoteHeader from "./components/home/KeynoteHeader";
import KeynoteSpeakers from "./components/Speaker/KeynoteSpeakers";
import SponsorshipHeader from "./components/home/SponsorshipHeader";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-session" element={<SpecialSession />} />
        <Route path="/conference-Tracks" element={<ConferenceTracks />} />
        <Route path="/PartnersPublication" element={<PartnersPublication />}/>
        <Route path="/keynote" element={<KeynoteHeader/>} />
        <Route path="/keynotes" element={<KeynoteSpeakers />}/>
        <Route path="/sponsorship" element={<SponsorshipHeader />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;