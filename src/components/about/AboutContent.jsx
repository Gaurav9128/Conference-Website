import aboutImage from "../../assets/about.jpg";
import { FaCheckCircle } from "react-icons/fa";

const features = [
];

const AboutContent = () => {
  return (
    <section className="bg-[#F7F8FC] py-16 sm:py-24 lg:py-40">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">


          {/* Left Content */}

          <div>


            <span className="
              inline-block
              bg-[#EEF5FF]
              text-[#23439B]
              px-4
              py-2
              rounded-full
              font-semibold
              text-xs
              sm:text-sm
            ">
              ABOUT CONFERENCE
            </span>




            <h2 className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-[#23439B]
              mt-5
              sm:mt-6
              leading-snug
            ">

              International Conference on Responsible Artificial Intelligence and Digital Trust

            </h2>




            <p className="
              text-[#555]
              mt-6
              sm:mt-8
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              sm:leading-9
            ">

              We are pleased to announce the upcoming International Conference on Responsible Artificial Intelligence and Digital Trust (ICRAIDT - 2027), is a premier international forum dedicated to advancing research, innovation, and collaboration in the fields of Artificial Intelligence, Digital Trust, Cybersecurity, Data Science, Cloud Computing, Blockchain, Human-Centric Computing, and Emerging Digital Technologies. Organized by the Department of Computer Applications, Poornima University, Jaipur, the conference aims to bring together researchers, academicians, industry experts, practitioners, policymakers, and students from across the globe to exchange ideas, present research findings, and discuss emerging challenges and opportunities in the digital era.

              Under the theme ICRAIDT - 2027 "Responsible AI for a Secure, Transparent and Inclusive Digital Future," ICRAIDT - 2027 seeks to foster meaningful dialogue on the development and deployment of technologies that are innovative, ethical, trustworthy, and socially beneficial.

            </p>





            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              sm:gap-5
              mt-8
              sm:mt-10
            ">


              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >


                  <FaCheckCircle
                    className="
                    text-[#23439B]
                    mt-1
                    text-lg
                    sm:text-xl
                    flex-shrink-0
                    "
                  />


                  <p className="
                    text-sm
                    sm:text-base
                    text-[#374151]
                    leading-6
                  ">

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
                h-[300px]
                sm:h-[420px]
                lg:h-[550px]
                object-cover
                rounded-2xl
                sm:rounded-[30px]
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