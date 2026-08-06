import aboutImage from "../../assets/p1.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/AboutPage");
  };

  const paragraphStyle =
    "text-[16px] lg:text-[16px] font-normal leading-[42px] tracking-[0.2px] text-[#4b5563] text-justify";

  return (

    <section
      id="about"
      className="bg-[#f7f9fc] py-10 sm:py-14 lg:py-20"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-[30px] font-bold text-[#1d2939] mb-8 leading-tight">
              About the ICRAIDT - 2027 Conference
            </h2>

            <p className={paragraphStyle}>
              We are pleased to announce the upcoming
              <span className="font-semibold text-[#2d3d6f]">
                {" "}
                International Conference on Responsible Artificial Intelligence
                and Digital Trust (ICRAIDT - 2027),
              </span>
              {" "}
              is a premier international forum dedicated to advancing research,
              innovation, and collaboration in the fields of Artificial
              Intelligence, Digital Trust, Cybersecurity, Data Science, Cloud
              Computing, Blockchain, Human-Centric Computing, and Emerging
              Digital Technologies. Organized by the Department of Computer
              Applications, Faculty of Computer Science and Engineering Poornima University, Jaipur, the conference aims to
              bring together researchers, academicians, industry experts,
              practitioners, policymakers, and students from across the globe
              to exchange ideas, present research findings, and discuss emerging
              challenges and opportunities in the digital era.
            </p>

            <p className={`${paragraphStyle} mt-8`}>
              Under the theme
              <span className="font-semibold text-[#2d3d6f]">
                {" "}ICRAIDT - 2027
              </span>
              {" "}
              <span className="font-medium">
                "Responsible AI for a Secure, Transparent and Inclusive Digital
                Future,"
              </span>{" "}
              ICRAIDT - 2027 seeks to foster meaningful dialogue on the
              development and deployment of technologies that are innovative,
              ethical, trustworthy, and socially beneficial.
            </p>

            <button
              onClick={handleReadMore}
              className="mt-10 bg-[#23439B] hover:bg-[#1d367e] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Read More
            </button>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">

            <img
              src={aboutImage}
              alt="About ICRAIDT - 2027"
              className="w-full max-w-[690px] h-[250px] sm:h-[360px] lg:h-[430px] object-cover rounded-2xl shadow-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;