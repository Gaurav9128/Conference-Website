import { motion } from "framer-motion";

const TrackCard = ({ track, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: track.reverse ? 120 : -120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      className={`flex overflow-hidden rounded-[28px] bg-white shadow-xl
      ${track.reverse ? "flex-row-reverse" : ""}`}
    >
      {/* Content */}

      <div className="w-[74%] px-10 py-9">

        <p className="uppercase tracking-[3px] text-sm text-gray-400 font-semibold">
          Track {track.id}
        </p>

        <h2 className="text-[34px] font-bold text-[#23439B] mt-3">
          {track.title}
        </h2>

        <div className="grid grid-cols-2 gap-3 mt-8">

          {track.topics.map((topic) => (
            <div
              key={topic}
              className="bg-[#EEF3FB] rounded-full px-4 py-2.5 text-[14px] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>

              {topic}
            </div>
          ))}

        </div>

      </div>

      {/* Number */}

      <div
        className={`w-[26%] bg-gradient-to-br ${track.color}
        flex items-center justify-center relative`}
      >
        <div className="absolute w-48 h-48 rounded-full bg-white/10 -top-6 -right-6"></div>

        <div className="absolute w-32 h-32 rounded-full bg-white/10 bottom-4 left-4"></div>

        <h1 className="text-[130px] font-bold text-white/20">
          {track.id}
        </h1>
      </div>
    </motion.div>
  );
};

export default TrackCard;