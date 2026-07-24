import heroVideo from "../../assets/Video.mp4";

const AboutHero = () => {
  return (
    <section className="bg-[#F7F8FC] pt-10 sm:pt-16 lg:pt-24 pb-28 sm:pb-40">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        {/* Hero Video */}

        <div className="relative">


          <video
            className="
              w-full
              h-[250px]
              sm:h-[380px]
              lg:h-[550px]
              object-cover
              rounded-2xl
              sm:rounded-[32px]
              shadow-[0_25px_60px_rgba(0,0,0,0.12)]
            "
            autoPlay
            muted
            loop
            playsInline
          >

            <source src={heroVideo} type="video/mp4" />

          </video>



          {/* Dark Overlay */}

          <div className="
            absolute
            inset-0
            rounded-2xl
            sm:rounded-[32px]
            bg-black/20
          "></div>




          {/* Floating Card */}

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-20
              sm:-bottom-32
              lg:-bottom-45
              z-10
              w-[90%]
              sm:w-auto
            "
          >


            <div
              className="
                bg-white
                w-full
                sm:w-[550px]
                lg:w-[650px]
                rounded-2xl
                sm:rounded-[28px]
                px-5
                sm:px-8
                lg:px-12
                py-6
                sm:py-8
                lg:py-10
                text-center
                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              "
            >



              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[45px]
                  font-extrabold
                  text-[#23439B]
                  leading-tight
                "
              >

                About the Conference

              </h1>




              <p
                className="
                  mt-3
                  sm:mt-4
                  text-sm
                  sm:text-base
                  lg:text-[17px]
                  text-gray-600
                  leading-6
                "
              >

                1st International Conference on Intelligent Systems and
                Emerging Technologies

              </p>




              <div
                className="
                  w-14
                  sm:w-16
                  h-1
                  sm:h-[5px]
                  bg-[#EAB308]
                  rounded-full
                  mx-auto
                  mt-5
                  sm:mt-6
                "
              ></div>



            </div>


          </div>



        </div>


      </div>


    </section>
  );
};

export default AboutHero;