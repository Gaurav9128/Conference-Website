import heroVideo from "../../assets/Video.mp4";
import ConferencePartners from "../ConferencePartners";
import ConferenceBanner from "../layout/ConferenceBanner";
import IndustryPartners from "./IndustryPartners";
import PublicationInfo from "./PublicationInfo";
import PublicationPartners from "./PublicationPartners";

const PartnersPublication = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="relative">

          {/* Video */}

          <video
            className="w-full h-[520px] object-cover rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Floating Card */}

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-40">

            <div className="bg-white rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] w-[730px] py-8 px-10 text-center">

              <h2 className="text-[45px] font-bold text-[#23439B] leading-none">

                Partners & Publication

              </h2>

              <p className="mt-4 text-[18px] text-gray-500">

                Conference proceedings and journal publication opportunities

              </p>

              <div className="w-36 h-1.5 bg-[#EAB308] rounded-full mx-auto mt-5"></div>

            </div>

          </div>

        </div>

      </div>

      {/* Space for Floating Card */}

      <div className="h-32"></div>
      <IndustryPartners />
      <ConferencePartners />
      <PublicationPartners />
      <PublicationInfo />
      <ConferenceBanner />
    </section>
    
  );
};

export default PartnersPublication;