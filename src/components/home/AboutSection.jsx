import aboutImage from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#f7f9fc] py-10 sm:py-14 lg:py-20"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.02fr_0.98fr] items-center gap-8 lg:gap-12">

          {/* Left */}
          <div>

            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#1c2434] mb-6 lg:mb-8">
              About the ICRAIDT 2027 Conference
            </h2>

            <p className="text-[15px] sm:text-[16px] lg:text-[15px] leading-7 sm:leading-8 lg:leading-10 text-[#4b5563] text-justify">

              We are pleased to announce the upcoming
              <span className="font-bold text-[#2d3d6f]">
                {" "}
                International Conference on Responsible Artificial Intelligence and Digital Trust (ICRAIDT 2027),
              </span>
              {" "}is a premier international forum dedicated to advancing research, innovation, and collaboration in the fields of Artificial Intelligence, Digital Trust, Cybersecurity, Data Science, Cloud Computing, Blockchain, Human-Centric Computing, and Emerging Digital Technologies. Organized by the Department of Computer Applications, Poornima University, Jaipur, the conference aims to bring together researchers, academicians, industry experts, practitioners, policymakers, and students from across the globe to exchange ideas, present research findings, and discuss emerging challenges and opportunities in the digital era.

            </p>

            <p className="mt-6 lg:mt-10 text-[15px] sm:text-[16px] lg:text-[18px] leading-7 sm:leading-8 lg:leading-10 text-[#4b5563] text-justify">

              Under the theme
              <span className="font-bold text-[#2d3d6f]">
                {" "}ICRAIDT 2027
              </span>
              {" "}
              "Responsible AI for a Secure, Transparent and Inclusive Digital Future," ICRAIDT 2027 seeks to foster meaningful dialogue on the development and deployment of technologies that are innovative, ethical, trustworthy, and socially beneficial.

            </p>

            <button className="mt-8 lg:mt-14 bg-[#23439B] hover:bg-[#1d367e] text-white px-6 sm:px-7 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition">
              Read More
            </button>

          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">

            <img
              src={aboutImage}
              alt="About ICRAIDT 2027"
              className="w-full max-w-[690px] h-[250px] sm:h-[350px] lg:h-[430px] object-cover rounded-2xl shadow-md"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;