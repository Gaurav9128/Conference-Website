import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#0c1222] text-white">

      <div className="max-w-[1380px] mx-auto px-8 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_0.8fr_0.8fr_1fr] gap-12">

          {/* Left */}

          <div>

            <img
              src={logo}
              alt="Poornima University"
              className="w-[350px] bg-white rounded-lg p-2"
            />

            {/* <p className="mt-6 text-[13px] leading-7 text-gray-300">

              The Microsoft CMT service was used for managing the
              peer-reviewing process for this conference. This service
              was provided for free by Microsoft and they bore all
              expenses, including costs for Azure cloud services as
              well as for software development and support.

            </p>

            <div className="border-l-2 border-[#2d62ff] pl-3 mt-5">

              <a
                href="https://cmt3.research.microsoft.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#7aa7ff] text-[13px] hover:text-white duration-300"
              >
                ✓ Conference Management Toolkit (CMT) by Microsoft
              </a>

            </div> */}

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-[17px] font-semibold uppercase">
              Navigation
            </h3>

            <div className="w-8 h-[2px] bg-[#2d62ff] mt-2 mb-4 rounded"></div>

            <ul className="space-y-3 text-[14px] text-gray-300">

              <li><a href="#about" className="hover:text-white">About</a></li>

              <li><a href="#committee" className="hover:text-white">Committees</a></li>

              <li><a href="#callpaper" className="hover:text-white">Call for Paper</a></li>

              <li><a href="#speaker" className="hover:text-white">Speakers</a></li>

              <li><a href="#partner" className="hover:text-white">Partners</a></li>

              <li><a href="#contact" className="hover:text-white">Contact</a></li>

            </ul>

          </div>

          {/* Website */}

          <div>

            <h3 className="text-[17px] font-semibold uppercase">
              Website
            </h3>

            <div className="w-8 h-[2px] bg-[#2d62ff] mt-2 mb-4 rounded"></div>

            <ul className="space-y-3 text-[14px] text-gray-300">

              <li className="hover:text-white cursor-pointer">Sitemap</li>

              <li className="hover:text-white cursor-pointer">Report</li>

              <li className="hover:text-white cursor-pointer">Developer</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-[17px] font-semibold uppercase">
              Contact
            </h3>

            <div className="w-8 h-[2px] bg-[#2d62ff] mt-2 mb-4 rounded"></div>

            <div className="space-y-3 text-[13px] text-gray-300">

              <div className="flex items-center gap-2.5">

                <FaEnvelope className="text-pink-400 text-[11px]" />

                <span>icraidt2027@poornima.edu.in</span>

              </div>

              <div className="flex items-center gap-2.5">

                <FaEnvelope className="text-pink-400 text-[11px]" />

                <span>ravi.soni1@poornima.edu.in</span>

              </div>

              <div className="flex items-center gap-2.5">

                <FaPhoneAlt className="text-pink-400 text-[11px]" />

                <span>+91-9928166649</span>

              </div>

              <div className="flex items-center gap-2.5">

                <FaMapMarkerAlt className="text-pink-400 text-[11px]" />

                <span>Jaipur, Rajasthan, India</span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-8 pt-5 flex flex-col lg:flex-row justify-between items-start gap-5">

          <p className="text-[12px] text-gray-400">
            © 2026 Poornima University. All rights reserved.
          </p>

          <div className="text-[12px] text-gray-400 leading-5">

            <p>Developed by -</p>

            <p>Mr. Gaurav Jain (Assistant Professor), Poornima University</p>

            <p>Mr. Ashutosh Bhardwaj (Assistant Professor), Poornima University</p>

            {/* <p>Bhavya Agrawal (Student), Poornima University</p> */}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;