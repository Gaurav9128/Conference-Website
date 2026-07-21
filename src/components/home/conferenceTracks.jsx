import heroVideo from "../../assets/Video.mp4";
import ConferenceBanner from "../layout/ConferenceBanner";
import AwardSection from "./AwardSection";
import TrackSection from "./TrackSection";

const ConferenceTracks = () => {
  return (
    <section
      id="callpaper"
      className="bg-[#f5f5f5] py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Video Section */}
        <div className="relative">

          <video
            className="w-full h-[520px] object-cover rounded-[30px] shadow-xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Floating Card */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-24">

            <div className="bg-white rounded-[22px] shadow-2xl w-[520px] py-8 px-10 text-center">

              <h2 className="text-[52px] font-bold text-[#23439B] leading-none">
                Call for Papers
              </h2>

              <p className="mt-3 text-[21px] text-gray-600">
                ICISET 2026 invites original research papers
              </p>

              <div className="w-32 h-1.5 bg-[#eab308] rounded-full mx-auto mt-5"></div>

            </div>

          </div>

        </div>

        {/* Space for Floating Card */}
        <div className="h-44"></div>

        {/* ================= Submission Guidelines ================= */}

        <div className="text-center">

          <h2 className="text-[35px] font-bold text-[#23439B]">
            Submission Guidelines
          </h2>

        </div>

        <div className="mt-3 bg-white rounded-[24px] border border-gray-200 shadow-md px-14 py-12">

          <p className="text-[18px] leading-[2.1] text-[#374151]">

            The theme of the conference will be{" "}
            <span className="font-bold italic text-[#23439B]">
              “International Conference on Responsible Artificial Intelligence and Digital Trust”.
            </span>{" "}
            Besides contributions addressing the conference theme, ICRAIDT also
            welcomes authors to submit their original research results in
            traditional and emerging research areas across a wide range of
            application and technological domains within the context of
            International Conference on Responsible Artificial Intelligence and Digital Trust.

          </p>

          <p className="mt-12 text-[18px] leading-[2] text-[#374151]">

            The research areas include, but are not limited to the following
            tracks mentioned below.

          </p>

        </div>

        {/* Button */}

        <div className="flex justify-center mt-5">

          <button className="bg-[#23439B] hover:bg-[#1d377d] text-white text-[18px] font-semibold px-14 py-5 rounded-2xl shadow-lg duration-300">

            CMT paper Submission Guidelines

          </button>

        </div>

      </div>
      <TrackSection />
      <AwardSection />
      <ConferenceBanner />
    </section>
  );
};

export default ConferenceTracks;