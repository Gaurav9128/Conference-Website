import heroVideo from "../../assets/Video.mp4";
import ConferencePartners from "../ConferencePartners";
import ConferenceBanner from "../layout/ConferenceBanner";
import IndustryPartners from "./IndustryPartners";
import PublicationInfo from "./PublicationInfo";
import PublicationPartners from "./PublicationPartners";

const PartnersPublication = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-16 lg:py-24">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">


        <div className="relative">


          {/* Video */}

          <video
            className="
            w-full
            h-[250px]
            sm:h-[380px]
            lg:h-[520px]
            object-cover
            rounded-2xl
            sm:rounded-[32px]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            "
            autoPlay
            muted
            loop
            playsInline
          >

            <source src={heroVideo} type="video/mp4" />

          </video>



          {/* Floating Card */}

          <div className="
            absolute
            left-1/2
            -translate-x-1/2
            -bottom-20
            sm:-bottom-28
            lg:-bottom-40
            w-[90%]
            sm:w-auto
          ">


            <div
              className="
              bg-white
              rounded-2xl
              sm:rounded-[20px]
              shadow-[0_15px_40px_rgba(0,0,0,0.15)]
              w-full
              sm:w-[600px]
              lg:w-[730px]
              py-5
              sm:py-7
              lg:py-8
              px-4
              sm:px-8
              lg:px-10
              text-center
              "
            >


              <h2 className="
                text-2xl
                sm:text-3xl
                lg:text-[30px]
                font-bold
                text-[#23439B]
                leading-tight
              ">

                Partners & Publication

              </h2>



              <p className="
                mt-3
                sm:mt-4
                text-sm
                sm:text-base
                lg:text-[18px]
                text-gray-500
              ">

                Conference proceedings and journal publication opportunities

              </p>



              <div className="
                w-24
                sm:w-32
                lg:w-36
                h-1
                sm:h-1.5
                bg-[#EAB308]
                rounded-full
                mx-auto
                mt-4
                sm:mt-5
              "></div>


            </div>


          </div>


        </div>


      </div>




      {/* Space for Floating Card */}

      <div className="h-28 sm:h-32 lg:h-40"></div>



      <IndustryPartners />

      <ConferencePartners />

      <PublicationPartners />

      <PublicationInfo />

      <ConferenceBanner />


    </section>
  );
};

export default PartnersPublication;