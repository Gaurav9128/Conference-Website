const AboutFaculty = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-12">
          <div className="w-[5px] h-14 bg-[#F4B400] rounded-full"></div>

          <h2 className="text-[34px] font-bold text-[#23439B] leading-tight">
            About Faculty of Computer Engineering (FCE)
          </h2>
        </div>

        {/* Description */}

        <div className="space-y-10">

          <p className="text-[#374151] text-[15px] leading-[2.1] text-justify">
            The Faculty of Computer Science & Engineering at Poornima
            University is a dynamic hub of technological learning,
            innovation, and research excellence. It is committed to shaping
            future-ready professionals equipped with the skills and mindset
            required to excel in an increasingly digital world. With a strong
            emphasis on emerging technologies such as Artificial
            Intelligence, Machine Learning, Cyber Security, Cloud Computing,
            Internet of Things (IoT), Blockchain, Data Analytics, DevOps,
            and Full-Stack Development, the Faculty integrates scientific
            knowledge with real-world applications.
          </p>

          <p className="text-[#374151] text-[15px] leading-[2.1] text-justify">
            By fostering interdisciplinary collaboration, research
            engagement, and ethical computing practices, the Faculty of
            Computer Science & Engineering plays a pivotal role in driving
            innovation within the university. It aspires to cultivate
            skilled engineers capable of addressing modern technological
            challenges, adapting to evolving industry trends, and leading
            with integrity in global digital environments.
          </p>

        </div>

        {/* Read More */}

        <div className="mt-16 flex justify-center">
          <button className="group text-[#23439B] text-2xl font-semibold hover:text-[#F4B400] transition-all duration-300">
            Read More
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutFaculty;