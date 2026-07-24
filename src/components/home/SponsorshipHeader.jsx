import heroVideo from "../../assets/Video.mp4";
import { FaCheck } from "react-icons/fa";
import ConferenceBanner from "../layout/ConferenceBanner";

const sponsorshipPlans = [
  {
    title: "Diamond Sponsorship",
    price: "30000",
    benefits: [
      "Three full conference registrations free of cost",
      "Three Stall spaces for exhibits",
      "Inclusion of company name & logo in web advertising",
      "Prominent acknowledgment in opening address",
    ],
  },
  {
    title: "Gold Sponsorship",
    price: "20000",
    benefits: [
      "Two full conference registrations free of cost",
      "Two Stall spaces for exhibits",
      "Inclusion of company name & logo in web advertising",
      "Acknowledgment in opening address",
    ],
  },
  {
    title: "Gold Sponsorship",
    price: "10000",
    benefits: [
      "Two full conference registrations free of cost",
      "Two Stall spaces for exhibits",
      "Inclusion of company name & logo in web advertising",
      "Acknowledgment in opening address",
    ],
  },
];

const SponsorshipHeader = () => {
  return (
    <section className="bg-[#f6f6f6] pt-24 pb-28">
      <div className="max-w-[1250px] mx-auto px-6">

        {/* ================= Hero Video ================= */}

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
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Floating Card */}

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-40">
            <div
              className="
                bg-white
                w-[450px]
                rounded-[28px]
                px-10
                py-9
                text-center
                shadow-[0_18px_45px_rgba(0,0,0,0.12)]
              "
            >
              <h2
                className="
                  text-[45px]
                  font-extrabold
                  leading-none
                  text-[#23439B]
                "
              >
                Sponsorship
              </h2>

              <p className="mt-3 text-[16px] text-[#6B7280]">
                Partnership and sponsorship opportunities
              </p>

              <div className="w-20 h-[5px] bg-[#EAB308] rounded-full mx-auto mt-5"></div>
            </div>
          </div>
        </div>

        {/* ================= Description ================= */}

        <div className="max-w-4xl mx-auto mt-52">
          <p className="text-center text-[#253858] text-[20px] leading-[1.9]">
            Sponsorship of <span className="font-semibold">ICRAIDT-2027</span>{" "}
            provides companies and organizations a unique opportunity to
            increase visibility and product awareness within a highly
            specialized and influential community of researchers,
            academicians, industry professionals, and technology leaders in
            intelligent computing and emerging digital technologies.
          </p>
        </div>

        {/* ================= Sponsorship Cards ================= */}

        <div className="mt-24 space-y-14">

          {sponsorshipPlans.map((plan, index) => (
            <div
              key={index}
              className="
                bg-[#EDF5FF]
                rounded-[30px]
                px-12
                py-12
                border border-[#E3ECF9]
                transition-all
                duration-300
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                hover:-translate-y-1
              "
            >
              {/* Heading */}

              <h2 className="text-[25px] font-bold text-[#21479C]">
                {plan.title}
                <span className="font-bold">
                  {" "}
                  (Rs. {plan.price})
                </span>
              </h2>

              {/* Benefits */}

              <div className="mt-10 space-y-6">

                {plan.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4"
                  >
                    <FaCheck className="text-[#21479C] text-lg mt-2 flex-shrink-0" />

                    <p className="text-[18px] leading-10 text-[#253858]">
                      {benefit}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      
      </div>
      &nbsp;&nbsp;
      <ConferenceBanner />
       
    </section>
    
  );
};

export default SponsorshipHeader;