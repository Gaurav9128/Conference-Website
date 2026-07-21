import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import SpecialSession from "./components/home/SpecialSession";
import ConferenceTracks from "./components/home/conferenceTracks";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/special-session" element={<SpecialSession />} />
        <Route path="/conference-Tracks" element={<ConferenceTracks />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;