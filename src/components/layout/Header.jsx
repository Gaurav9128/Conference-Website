import logo from "../../assets/logo1.png";
import NavLinks from "./NavLinks";
import RegisterButton from "./RegisterButton";
import scopusLogo from "../../assets/logo 2.png";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-10 pt-6">

        {/* Top Row */}
        <div className="flex items-center justify-between mb-6">

          {/* Logo */}
          <div className="w-[250px]">
            <img
              src={logo}
              alt="Logo"
              className="w-full object-contain"
            />
          </div>

          {/* Heading */}
          <div className="flex justify-center">
            <img
              src={scopusLogo}
              alt="Scopus Indexed"
              className="h-30 object-contain"
            />
          </div>

        </div>

        {/* Navigation */}
        <div className="bg-white rounded-[35px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-[72px] px-10 flex items-center justify-between">

          <NavLinks />

          <RegisterButton />

        </div>

      </div>
    </header>
  );
};

export default Header;