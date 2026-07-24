import { FaCheck } from "react-icons/fa";

const SponsorshipCard = ({ title, price, benefits }) => {
  return (
    <div className="w-full bg-[#EEF5FF] rounded-2xl p-5 md:p-6 border border-[#E5EDF9] hover:shadow-lg transition-all duration-300">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-[#1F3F95] mb-5">
        {title} <span>(Rs. {price})</span>
      </h2>

      {/* Benefits */}
      <div className="space-y-3">
        {benefits.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <FaCheck className="text-[#1F3F95] text-xs mt-1.5 flex-shrink-0" />

            <p className="text-[#233A68] text-sm md:text-base leading-7">
              {item}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SponsorshipCard;