import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/logo1.png";
import NavLinks from "./NavLinks";
import RegisterButton from "./RegisterButton";
import scopusLogo from "../../assets/logo 2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 lg:pt-6">

        {/* Top Row */}
        <div className="flex items-center justify-between mb-6">

          {/* Logo */}
          <div className="w-[150px] sm:w-[200px] lg:w-[250px]">
            <img
              src={logo}
              alt="Logo"
              className="w-full object-contain"
            />
          </div>

          {/* Right Logo (Desktop) */}
          <div className="flex justify-center">
            <img
              src={scopusLogo}
              alt="Scopus Indexed"
              className="h-20 lg:h-30 object-contain"
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-3xl text-[#24439B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-white rounded-[35px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-[72px] px-10 items-center justify-between">

          <NavLinks />

          <RegisterButton />

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl border border-gray-200 p-5">

            <div className="flex flex-col gap-5">

              <NavLinks />

              <RegisterButton />

            </div>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;