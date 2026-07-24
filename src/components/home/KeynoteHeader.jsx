import keynoteVideo from "../../assets/Video.mp4"; 
import ConferenceBanner from "../layout/ConferenceBanner";
import KeynoteSpeakers from "../Speaker/KeynoteSpeakers";

const KeynoteHeader = () => {
  return (
    <section className="bg-[#f6f6f6] pt-10 sm:pt-16 lg:pt-24 pb-28 sm:pb-36">

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">


        {/* Video */}

        <div className="relative">


          <video
            className="
              w-full
              h-[230px]
              sm:h-[320px]
              lg:h-[420px]
              object-cover
              rounded-2xl
              sm:rounded-[30px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
            autoPlay
            muted
            loop
            playsInline
          >

            <source src={keynoteVideo} type="video/mp4" />

            Your browser does not support the video tag.

          </video>




          {/* Floating Card */}

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-20
              sm:-bottom-32
              lg:-bottom-50
              w-[90%]
              sm:w-auto
            "
          >


            <div
              className="
                bg-white
                w-full
                sm:w-[450px]
                lg:w-[500px]
                rounded-2xl
                sm:rounded-[28px]
                px-5
                sm:px-8
                lg:px-12
                py-6
                sm:py-8
                lg:py-10
                text-center
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >


              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[40px]
                  font-extrabold
                  text-[#23439B]
                  leading-tight
                "
              >

                Keynote Speakers

              </h2>



              <p
                className="
                  mt-3
                  sm:mt-4
                  text-sm
                  sm:text-base
                  lg:text-[18px]
                  text-[#6B7280]
                "
              >

                Distinguished speakers sharing their expertise

              </p>



              <div
                className="
                  w-24
                  sm:w-32
                  lg:w-36
                  h-1
                  sm:h-[5px]
                  bg-[#E9B308]
                  rounded-full
                  mx-auto
                  mt-4
                  sm:mt-5
                "
              ></div>


            </div>


          </div>


        </div>


      </div>


      {/* Space for Floating Card */}

      <div className="h-24 sm:h-32 lg:h-40"></div>


      <KeynoteSpeakers />

      <ConferenceBanner />


    </section>
  );
};

export default KeynoteHeader;