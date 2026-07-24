import { FaCheck, FaPlane, FaTrain, FaCar } from "react-icons/fa";

const conferenceFacilities = [
  "Large auditorium for keynote sessions",
  "Multiple meeting rooms for parallel sessions",
  "High-speed WiFi",
  "Advanced audio-visual equipment",
];

const amenities = [
  "On-campus dining",
  "Parking available",
  "Refreshment lounges",
  "Accessible facilities",
];

const travelInfo = [
  {
    icon: <FaPlane />,
    title: "By Air",
    description:
      "Jaipur International Airport (JAI) is well connected to major cities.",
    info: "Distance: ~13 km | Time: ~30 minutes",
  },
  {
    icon: <FaTrain />,
    title: "By Rail",
    description:
      "Jaipur Railway Station connects to all major Indian cities.",
    info: "Distance: ~12 km | Time: ~25 minutes",
  },
  {
    icon: <FaCar />,
    title: "By Road",
    description:
      "Excellent highway connectivity from Delhi and nearby states.",
    info: "Delhi to Jaipur: ~260 km | ~4.5 hours",
  },
];

const VenueFacilities = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-[40px] font-bold text-[#12284B] mb-20">
          Venue Facilities
        </h2>

        {/* Top */}

        <div className="grid lg:grid-cols-2 gap-40">

          {/* Left */}

          <div>

            <h3 className="text-[20px] font-semibold text-[#12284B] mb-8">
              Conference Facilities
            </h3>

            <div className="space-y-5">

              {conferenceFacilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <FaCheck className="text-[#21439B] mt-1 text-lg" />

                  <p className="text-[15px] text-[#4B5563]">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-[20px] font-semibold text-[#12284B] mb-8">
              Amenities
            </h3>

            <div className="space-y-5">

              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <FaCheck className="text-[#21439B] mt-1 text-lg" />

                  <p className="text-[18px] text-[#4B5563]">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-28">

          <h2 className="text-[32px] font-bold text-[#12284B] mb-20">
            Getting to Jaipur
          </h2>

          <div className="grid md:grid-cols-3 gap-16">

            {travelInfo.map((item, index) => (

              <div key={index}>

                <h3 className="flex items-center gap-3 text-[20px] font-semibold text-[#12284B] mb-6">
                  {item.title}
                  <span className="text-[#21439B] text-2xl">
                    {item.icon}
                  </span>
                </h3>

                <p className="text-[15px] leading-9 text-[#4B5563]">
                  {item.description}
                </p>

                <p className="mt-8 text-[12px] text-[#6B7280]">
                  {item.info}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default VenueFacilities;