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

              International Conference on Intelligent Systems &
              Emerging Technologies

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

              The conference aims to provide a global platform for
              researchers, academicians, industry experts, and students
              to exchange innovative ideas, present research findings,
              and discuss emerging trends in intelligent computing,
              artificial intelligence, machine learning, IoT, cloud
              computing, cybersecurity, and modern digital technologies.

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