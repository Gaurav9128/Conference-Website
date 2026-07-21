import aboutImage from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#f7f9fc] py-20"
    >
      <div className="max-w-[1450px] mx-auto px-8">

        <div className="grid lg:grid-cols-[1.02fr_0.98fr] items-center gap-12">

          {/* Left */}

          <div>

            <h2 className="text-[30px] font-bold text-[#1c2434] mb-8">
              About the ICISET–2026 Conference
            </h2>

            <p className="text-[15px] leading-10 text-[#4b5563] text-justify">

              We are pleased to announce the upcoming
              <span className="font-bold text-[#2d3d6f]">
                {" "}
                International Conference on Intelligent Systems and Emerging
                Technologies (ICISET-2026),
              </span>
              {" "}which aims to promote high-quality research and real-world
              technological impact through international collaboration. This
              conference will bring together world-class researchers,
              academicians, industry experts, and technology leaders to explore
              and discuss the latest developments and innovations in the fields
              of Intelligent Computing and Emerging Digital Technologies.

            </p>

            <p className="mt-10 text-[18px] leading-10 text-[#4b5563] text-justify">

              The primary objective of
              <span className="font-bold text-[#2d3d6f]">
                {" "}ICISET-2026
              </span>
              {" "}is to create a global platform where researchers and
              professionals from different parts of the world can exchange
              knowledge, present innovative research findings, and build strong
              professional networks. Through such interactions, the conference
              seeks to encourage meaningful collaborations and open new
              opportunities for interdisciplinary research and technological
              innovation.

            </p>

            <button className="mt-14 bg-[#23439B] hover:bg-[#1d367e] text-white px-7 py-4 rounded-lg font-medium text-lg transition">
              Read More
            </button>

          </div>

          {/* Right */}

          <div className="flex justify-end">

            <img
              src={aboutImage}
              alt=""
              className="w-[690px] h-[430px] object-cover rounded-2xl shadow-md"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;