import heroVideo from "../../assets/Video.mp4";

const PartnersHero = () => {
  return (
    <section className="bg-[#F7F8FC] pt-24 pb-56">
      <div className="max-w-7xl mx-auto px-6">

        {/* Video */}
        <div className="relative">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-[550px]
              object-cover
              rounded-[32px]
              shadow-[0_25px_60px_rgba(0,0,0,0.15)]
            "
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-[32px]"></div>

          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-40 z-20">
            <div className="
                bg-white
                w-[720px]
                rounded-[28px]
                px-12
                py-10
                text-center
                shadow-[0_20px_45px_rgba(0,0,0,0.12)]
            ">

              <h1 className="text-[60px] font-extrabold text-[#23439B] leading-none">
                Partners & Publication
              </h1>

              <p className="mt-5 text-[18px] text-gray-500">
                Conference proceedings and journal publication opportunities
              </p>

              <div className="w-24 h-[5px] bg-[#F4B400] rounded-full mx-auto mt-5"></div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PartnersHero;