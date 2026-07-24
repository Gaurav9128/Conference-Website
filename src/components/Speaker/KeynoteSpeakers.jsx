import { motion } from "framer-motion";
import speakers from "../../data/speakers";
import SpeakerCard from "./SpeakerCard";

const KeynoteSpeakers = () => {
  return (
    <section className="bg-[#f6f6f6] py-12 sm:py-16 lg:py-24">

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">


        {/* Heading */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">


          {/* <h2 className="text-[52px] font-bold text-[#23439B]">
            Distinguished Keynote Speakers
          </h2> */}


          <div className="
            w-24
            sm:w-32
            h-1
            sm:h-1.5
            bg-yellow-500
            rounded-full
            mx-auto
            mt-4
            sm:mt-5
          "></div>


        </div>




        {/* Speakers Grid */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-6
          lg:gap-x-16
          gap-y-12
          lg:gap-y-24
          "
        >


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