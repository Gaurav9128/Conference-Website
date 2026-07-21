import keynoteVideo from "../../assets/Video.mp4"; // your video
import ConferenceBanner from "../layout/ConferenceBanner";
import KeynoteSpeakers from "../Speaker/KeynoteSpeakers";

const KeynoteHeader = () => {
  return (
    <section className="bg-[#f6f6f6] pt-24 pb-36">
      <div className="max-w-[1150px] mx-auto px-6">

        {/* Video */}
        <div className="relative">

          <video
            className="
              w-full
              h-[420px]
              object-cover
              rounded-[30px]
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
              -bottom-50
            "
          >
            <div
              className="
                bg-white
                w-[500px]
                rounded-[28px]
                px-12
                py-10
                text-center
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >
              <h2
                className="
                  text-[40px]
                  font-extrabold
                  text-[#23439B]
                  leading-none
                "
              >
                Keynote Speakers
              </h2>

              <p className="mt-4 text-[18px] text-[#6B7280]">
                Distinguished speakers sharing their expertise
              </p>

              <div className="w-36 h-[5px] bg-[#E9B308] rounded-full mx-auto mt-5"></div>

            </div>
          </div>

        </div>

      </div>
      &nbsp;
      <KeynoteSpeakers />
      <ConferenceBanner />
    </section>
  );
};

export default KeynoteHeader;