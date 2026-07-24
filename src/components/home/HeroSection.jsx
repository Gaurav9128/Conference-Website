import heroVideo from "../../assets/Video.mp4";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-[#f8f9fc] py-10 sm:py-12 md:py-16"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111827] leading-snug md:leading-tight">
            International Conference on Responsible Artificial Intelligence and
            Digital Trust
            <br />
            <span className="block mt-3 sm:mt-4">(ICRAIDT 2027)</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-[#23439B]">
            January 22–23, 2027
          </p>

          <div className="mt-8 sm:mt-10 space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl text-[#23439B] font-medium">
              Organizing by
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#23439B]">
              Department of Computer Applications
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#23439B]">
              Poornima University, Jaipur
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="mt-10 sm:mt-12 md:mt-16 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;