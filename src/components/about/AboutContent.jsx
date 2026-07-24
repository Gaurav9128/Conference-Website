import aboutImage from "../../assets/about.jpg";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Peer-reviewed international conference",
  "Scopus Indexed Conference Proceedings",
  "Keynote talks by renowned experts",
  "Industry & Academic networking",
  "Paper presentation opportunities",
  "Best Paper Awards",
];

const AboutContent = () => {
  return (
    <section className="bg-[#F7F8FC]  py-80">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block bg-[#EEF5FF] text-[#23439B] px-4 py-2 rounded-full font-semibold text-sm">
              ABOUT CONFERENCE
            </span>

            <h2 className="text-4xl font-bold text-[#23439B] mt-6 leading-tight">
              International Conference on Intelligent Systems &
              Emerging Technologies
            </h2>

            <p className="text-[#555] mt-8 text-lg leading-9">
              The conference aims to provide a global platform for
              researchers, academicians, industry experts, and students
              to exchange innovative ideas, present research findings,
              and discuss emerging trends in intelligent computing,
              artificial intelligence, machine learning, IoT, cloud
              computing, cybersecurity, and modern digital technologies.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">

                  <FaCheckCircle className="text-[#23439B] mt-1 text-xl" />

                  <p className="text-[#374151]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}

          <div>

            <img
              src={aboutImage}
              alt="Conference"
              className="
                w-full
                h-[550px]
                object-cover
                rounded-[30px]
                shadow-xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutContent;