const AboutDepartment = () => {
    return (
        <section className="bg-white py-14 sm:py-20 lg:py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">


                {/* Heading */}

                <div className="
          flex
          items-start
          sm:items-center
          gap-4
          sm:gap-5
          mb-8
          sm:mb-12
        ">

                    <div
                        className="
              w-[4px]
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
              lg:text-4xl
              font-bold
              text-[#23439B]
              leading-tight
            "
                    >

                        About Department of Computer Applications

                    </h2>


                </div>




                {/* Content */}

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

                        The Department of Computer Applications at Poornima University is dedicated to excellence in computing education, research, and innovation. The department strives to prepare students for the rapidly evolving digital landscape through a balanced combination of theoretical foundations, practical learning, research engagement, and industry interaction.

                        With a focus on emerging technologies and application-oriented learning, the department nurtures future professionals, researchers, entrepreneurs, and technology leaders capable of addressing real-world challenges through innovative computing solutions. The department actively contributes to the University's mission of promoting academic excellence, technological advancement, and societal development.


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

                        PU is recognized by the University Grants Commission (UGC) under
                        Section 2(f) and 12(B) with the right to confer degrees as per
                        Section 22(1) of the UGC Act, 1956. Its architecture program is
                        approved by the Council of Architecture (CoA) and the hotel
                        management program is approved by NCHMCT. Currently, PU has more
                        than 8000 students enrolled in nine faculties and fourteen
                        departments of UG/PG and PhD programs in various areas such as
                        Management, Engineering, Computer Application Sciences,
                        Architecture, Design, Public Health and Hotel Management. The
                        University is committed to fostering research and innovation, and
                        this conference is part of its mission to promote cutting-edge
                        research in sustainable computing and intelligent systems.

                    </p>



                </div>





                {/* Button */}

                <div className="mt-10 sm:mt-16 flex justify-center">


                    <a

                        href="https://poornima.edu.in/academics/faculty-of-computer-science/bca/vision-mission-learning-outcomes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              text-[#23439B]
              text-lg
              sm:text-xl
              lg:text-2xl
              font-semibold
              hover:text-[#F4B400]
              transition-all
              duration-300
              group
            "
                    >

                        Read More


                        <span
                            className="
                ml-2
                sm:ml-3
                inline-block
                group-hover:translate-x-2
                transition-transform
                duration-300
              "
                        >
                            →

                        </span>


                    </a>


                </div>



            </div>


        </section>
    );
};

export default AboutDepartment;