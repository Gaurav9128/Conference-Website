import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c1222] text-white">
      <div className="max-w-[1380px] mx-auto px-8 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h3 className="text-[17px] font-semibold uppercase">
              Navigation
            </h3>

            <div className="w-8 h-[2px] bg-[#2d62ff] mt-2 mb-4 rounded"></div>

            <ul className="space-y-3 text-[14px] text-gray-300">
              <li>
                <a href="#about" className="hover:text-white duration-300">
                  About
                </a>
              </li>

              <li>
                <a href="#committee" className="hover:text-white duration-300">
                  Committees
                </a>
              </li>

              <li>
                <a href="#callpaper" className="hover:text-white duration-300">
                  Call for Paper
                </a>
              </li>

              <li>
                <a href="#speaker" className="hover:text-white duration-300">
                  Speakers
                </a>
              </li>

              <li>
                <a href="#partner" className="hover:text-white duration-300">
                  Partners
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Website */}
          <div>
            <h3 className="text-[17px] font-semibold uppercase">
              Website
            </h3>

            <div className="w-8 h-[2px] bg-[#2d62ff] mt-2 mb-4 rounded"></div>

            <ul className="space-y-3 text-[14px] text-gray-300">
              <li className="hover:text-white duration-300 cursor-pointer">
                Sitemap
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                Report
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                Developer
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[17px] font-semibold uppercase">
              Contact
            </h3>

            <div className="w-8 h-[2px] bg-[#2d62ff] mt-2 mb-4 rounded"></div>

            <div className="space-y-4 text-[14px] text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-400 text-sm" />
                <span>icraidt2027@poornima.edu.in</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-400 text-sm" />
                <span>ravi.soni1@poornima.edu.in</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-400 text-sm" />
                <span>+91-9928166649</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-400 text-sm mt-1" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-5">
          <p className="text-[13px] text-gray-400 text-center lg:text-left">
            © 2026 Poornima University. All rights reserved.
          </p>

          <div className="text-[13px] text-gray-400 leading-6 text-center lg:text-right">
            <p className="font-medium text-white mb-1">Developed by</p>
            <p>Mr. Gaurav Jain (Assistant Professor), Poornima University</p>
            <p>Mr. Ashutosh Bhardwaj (Assistant Professor), Poornima University</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;