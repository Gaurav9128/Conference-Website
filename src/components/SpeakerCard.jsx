import { motion } from "framer-motion";

const SpeakerCard = ({ speaker, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="text-center"
    >
      {/* Circular Image */}
      <div className="flex justify-center">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="
            w-40
            h-40
            rounded-full
            object-cover
            border-[4px]
            border-[#23439B]
            shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          "
        />
      </div>

      {/* Name */}
      <h3 className="mt-6 text-[32px] font-bold text-[#173F91] leading-tight">
        {speaker.name}
      </h3>

      {/* Designation */}
      <p className="mt-2 text-[18px] text-[#23439B] font-medium">
        {speaker.designation}
      </p>

      {/* Organization */}
      <p className="mt-3 text-[17px] leading-8 text-gray-600 max-w-[360px] mx-auto">
        {speaker.organization}
      </p>

      {/* University */}
      {speaker.university && (
        <p className="mt-1 text-[17px] leading-8 text-gray-600 max-w-[360px] mx-auto">
          {speaker.university}
        </p>
      )}
    </motion.div>
  );
};

export default SpeakerCard;