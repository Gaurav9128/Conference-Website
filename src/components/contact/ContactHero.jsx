import heroVideo from "../../assets/Video.mp4";

const ContactHero = () => {
  return (
    <section className="bg-[#F7F8FC] pt-24 pb-48">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Video */}
        <div className="relative">

          <video
            className="
              w-full
              h-[550px]
              object-cover
              rounded-[32px]
              shadow-[0_25px_60px_rgba(0,0,0,0.12)]
            "
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-[32px]"></div>

          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-28 z-10">
            <div
              className="
                bg-white
                w-[560px]
                rounded-[28px]
                px-12
                py-10
                text-center
                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              "
            >
              <h1 className="text-[52px] font-extrabold text-[#23439B] leading-tight">
                Contact & Venue
              </h1>

              <p className="mt-4 text-[18px] text-gray-500">
                Conference location and contact information
              </p>

              <div className="w-24 h-[5px] bg-[#EAB308] rounded-full mx-auto mt-6"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;