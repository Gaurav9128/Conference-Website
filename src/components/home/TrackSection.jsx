import { motion } from "framer-motion";
import TrackCard from "./TrackCard";
import { tracks } from "./trackData";

const TrackSection = () => {
  return (
    <section id="conference-track" className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="uppercase tracking-[5px] text-[#8A98BA] font-semibold">
            Conference
          </span>

          <h2 className="mt-3 text-[48px] font-bold text-[#23439B]">
            Conference Tracks
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-4"></div>

          <p className="max-w-3xl mx-auto mt-6 text-[18px] text-gray-600 leading-8">
            ICRAIDT 2027 features five specialized conference tracks covering
            Intelligent Systems, AI, Cyber Security, Cloud Computing, Data
            Science and Emerging Technologies.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackSection;