import heroVideo from "../../assets/Video.mp4";

const HeroSection = () => {
  return (

    <section 
      id="home"

    className="bg-[#f8f9fc] py-16">

      <div className="max-w-[1450px] mx-auto px-6">

        {/* Title */}

        <div className="text-center">

          <h1 className="text-5xl font-extrabold text-[#111827] leading-tight">

            1<sup>st</sup> International Conference on Intelligent
            <br />
            Systems and Emerging Technologies
            <br />
            (ICISET-2026)

          </h1>

          <p className="mt-8 text-2xl font-semibold text-[#23439B]">
            November 27–28, 2026
          </p>

          <div className="mt-10 space-y-2">

            <p className="text-2xl text-[#23439B]">
              Organizing by
            </p>

            <p className="text-[22px] text-[#23439B]">
              Department of Computer Science and Engineering
            </p>

            <p className="text-[22px] text-[#23439B]">
              Poornima University, Jaipur
            </p>

          </div>

        </div>

        {/* Video */}

        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">

          <video
            className="w-full h-[450px] object-cover"
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