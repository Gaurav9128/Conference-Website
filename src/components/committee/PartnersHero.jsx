import heroVideo from "../../assets/Video.mp4";

const PartnersHero = () => {
  return (
    <section className="bg-[#F7F8FC] pt-14 sm:pt-20 lg:pt-24 pb-36 sm:pb-44 lg:pb-56">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        {/* Video */}

        <div className="relative">


          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-[280px]
              sm:h-[400px]
              lg:h-[550px]
              object-cover
              rounded-2xl
              sm:rounded-[32px]
              shadow-[0_25px_60px_rgba(0,0,0,0.15)]
            "
          >

            <source src={heroVideo} type="video/mp4" />

          </video>



          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/20
              rounded-2xl
              sm:rounded-[32px]
            "
          />




          {/* Floating Card */}

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-28
              sm:-bottom-32
              lg:-bottom-40
              z-20
              w-[92%]
              sm:w-[90%]
              lg:w-auto
            "
          >


            <div
              className="
                bg-white
                rounded-2xl
                sm:rounded-[28px]
                px-5
                sm:px-10
                lg:px-12
                py-7
                sm:py-9
                lg:py-10
                text-center
                shadow-[0_20px_45px_rgba(0,0,0,0.12)]
              "
            >



              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[60px]
                  font-extrabold
                  text-[#23439B]
                  leading-tight
                "
              >
                Partners & Publication
              </h1>




              <p
                className="
                  mt-3
                  sm:mt-5
                  text-sm
                  sm:text-base
                  lg:text-[18px]
                  text-gray-500
                  leading-6
                "
              >
                Conference proceedings and journal publication opportunities
              </p>




              <div
                className="
                  w-20
                  sm:w-24
                  h-1
                  sm:h-[5px]
                  bg-[#F4B400]
                  rounded-full
                  mx-auto
                  mt-4
                  sm:mt-5
                "
              />



            </div>


          </div>



        </div>


      </div>


    </section>
  );
};


export default PartnersHero;