import heroVideo from "../../assets/Video.mp4";
//import ConferenceBanner from "../layout/ConferenceBanner";
import AwardSection from "./AwardSection";
import TrackSection from "./TrackSection";

const ConferenceTracks = () => {
  return (
    <section
      id="callpaper"
      className="bg-[#f5f5f5] py-10 sm:py-16 lg:py-24"
    >

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">


        {/* Video Section */}
        <div className="relative">

          <video
            className="w-full h-[250px] sm:h-[380px] lg:h-[520px] object-cover rounded-2xl sm:rounded-[30px] shadow-xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>



          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 sm:-bottom-20 lg:-bottom-24 w-[90%] sm:w-auto">


            <div className="
              bg-white
              rounded-2xl
              sm:rounded-[22px]
              shadow-2xl
              w-full
              sm:w-[520px]
              py-5
              sm:py-8
              px-4
              sm:px-10
              text-center
            ">


              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#23439B] leading-tight">
                Conference Tracks
              </h2>


              <p className="mt-3 text-sm sm:text-lg lg:text-[21px] text-gray-600">
                ICRAIDT - 2027 invites original research papers
              </p>


              <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-[#eab308] rounded-full mx-auto mt-4 sm:mt-5"></div>


            </div>

          </div>


        </div>



        {/* Space for Floating Card */}
        <div className="h-32 sm:h-36 lg:h-44"></div>




        {/* ================= Submission Guidelines ================= */}

        <div className="text-center">

          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-[#23439B]">
            Submission Guidelines
          </h2>

        </div>



        <div className="
          mt-3
          bg-white
          rounded-2xl
          sm:rounded-[24px]
          border
          border-gray-200
          shadow-md
          px-5
          sm:px-8
          lg:px-14
          py-8
          sm:py-10
          lg:py-12
        ">


          <p className="text-sm sm:text-base lg:text-[18px] leading-7 sm:leading-8 lg:leading-[2.1] text-[#374151]">


            The theme of the conference will be{" "}

            <span className="font-bold italic text-[#23439B]">
              “International Conference on Responsible Artificial Intelligence and Digital Trust”.
            </span>

            {" "}
            Besides contributions addressing the conference theme, ICRAIDT - 2027also
            welcomes authors to submit their original research results in
            traditional and emerging research areas across a wide range of
            application and technological domains within the context of
            International Conference on Responsible Artificial Intelligence and Digital Trust.


          </p>



          <p className="mt-8 sm:mt-12 text-sm sm:text-base lg:text-[18px] leading-7 sm:leading-8 lg:leading-[2] text-[#374151]">

            The research areas include, but are not limited to the following
            tracks mentioned below.

          </p>


        </div>




        {/* Button */}

        <div className="flex justify-center mt-5">


          <button
            className="
            bg-[#23439B]
            hover:bg-[#1d377d]
            text-white
            text-sm
            sm:text-base
            lg:text-[18px]
            font-semibold
            px-6
            sm:px-10
            lg:px-14
            py-3
            sm:py-4
            lg:py-5
            rounded-xl
            sm:rounded-2xl
            shadow-lg
            duration-300
            text-center
            "
          >

            CMT paper Submission Guidelines

          </button>


        </div>


      </div>



      <TrackSection />

      <AwardSection />

      {/* <ConferenceBanner /> */}


    </section>
  );
};

export default ConferenceTracks;