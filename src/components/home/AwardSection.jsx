import { motion } from "framer-motion";

const AwardSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* Award Box */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#FFFBEA] border border-[#F4D35E] rounded-[24px]
          px-16 py-12 shadow-sm"
        >

          <h2 className="text-center text-[25px] font-bold text-[#13294B] leading-relaxed">

            Session wise{" "}
            <span className="text-[#23439B]">
              "Best Paper Award"
            </span>{" "}
            along with certificates to all the authors.

          </h2>

        </motion.div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mt-14"
        >

          <button
            className="bg-[#23439B]
            hover:bg-[#1b347e]
            text-white
            text-[18px]
            font-semibold
            px-16
            py-6
            rounded-[15px]
            shadow-[0_15px_35px_rgba(35,67,155,0.25)]
            duration-300
            hover:-translate-y-1"
          >
            Submit Your Paper
          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default AwardSection;