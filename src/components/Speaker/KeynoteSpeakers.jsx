import { motion } from "framer-motion";
import speakers from "../../data/speakers";
import SpeakerCard from "./SpeakerCard";

const KeynoteSpeakers = () => {
  return (
    <section className="bg-[#f6f6f6] py-24">
      <div className="max-w-[1450px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">

          {/* <h2 className="text-[52px] font-bold text-[#23439B]">
            Distinguished Keynote Speakers
          </h2> */}

          <div className="w-32 h-1.5 bg-yellow-500 rounded-full mx-auto mt-5"></div>

        </div>

        {/* Speakers Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">

          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default KeynoteSpeakers;