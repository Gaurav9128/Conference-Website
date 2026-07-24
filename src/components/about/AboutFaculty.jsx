const AboutFaculty = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        {/* Heading */}

        <div
          className="
            flex
            items-start
            sm:items-center
            gap-4
            sm:gap-5
            mb-8
            sm:mb-12
          "
        >

          <div
            className="
              w-[5px]
              h-10
              sm:h-14
              bg-[#F4B400]
              rounded-full
              flex-shrink-0
            "
          ></div>



          <h2
            className="
              text-2xl
              sm:text-3xl
              lg:text-[34px]
              font-bold
              text-[#23439B]
              leading-snug
            "
          >

            About Faculty of Computer Engineering (FCE)

          </h2>


        </div>





        {/* Description */}

        <div className="space-y-6 sm:space-y-10">


          <p
            className="
              text-[#374151]
              text-sm
              sm:text-[15px]
              leading-7
              sm:leading-[2.1]
              text-justify
            "
          >

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





          <p
            className="
              text-[#374151]
              text-sm
              sm:text-[15px]
              leading-7
              sm:leading-[2.1]
              text-justify
            "
          >

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

        <div className="mt-10 sm:mt-16 flex justify-center">


          <button
            className="
              group
              text-[#23439B]
              text-lg
              sm:text-xl
              lg:text-2xl
              font-semibold
              hover:text-[#F4B400]
              transition-all
              duration-300
            "
          >

            Read More


            <span
              className="
                ml-2
                sm:ml-3
                inline-block
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >

              →

            </span>


          </button>


        </div>



      </div>


    </section>
  );
};

export default AboutFaculty;