import {
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import person1 from "../../assets/team/person1.png";
import person2 from "../../assets/team/person2.png";
import person3 from "../../assets/team/person3.png";
import person4 from "../../assets/team/person4.png";
import person5 from "../../assets/team/person5.png";

const teamMembers = [
  {
    role: "Organizing Chair",
    name: "Dr. Saurabh Shandilya",
    designation: "Professor, PU Jaipur",
    department: "Faculty of Computer Science & Engineering",
    email: "saurabh.shandilya@poornima.edu.in",
    phone: "+91-9887587811",
    image: person1,
  },
  {
    role: "Convener",
    name: "Dr. Sumit Kumar Kapoor",
    designation: "Associate Professor",
    department: "Faculty of CSE",
    email: "sumit.kapoor@poornima.edu.in",
    phone: "+91-8006690016",
    image: person2,
  },
  {
    role: "Convener",
    name: "Dr. Ravi Soni",
    designation: "Assistant Professor",
    department: "Faculty of CSE",
    email: "ravi.soni1@poornima.edu.in",
    phone: "+91-9928166649",
    image: person3,
  },
  {
    role: "Co-Convener",
    name: "Dr. Kriti Sankhla",
    designation: "Associate Professor",
    department: "Faculty of Computer Science & Engineering",
    email: "kriti.sankhla@poornima.edu.in",
    phone: "+91-9876543210",
    image: person4,
  },
  {
    role: "Co-Convener",
    name: "Mr. Sagar Kumar",
    designation: "Assistant Professor",
    department: "Faculty of Computer Science & Engineering",
    email: "sagar.kumar@poornima.edu.in",
    phone: "+91-9876543211",
    image: person5,
  },
];

const ContactTeam = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        {/* Heading */}

        <div className="text-center mb-10 sm:mb-16">

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-[42px]
              font-bold
              text-[#16356F]
            "
          >
            Contact Us
          </h2>


          <div
            className="
              w-16
              sm:w-20
              h-1
              bg-[#EAB308]
              rounded-full
              mx-auto
              mt-4
            "
          ></div>


        </div>




        {/* Cards */}


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            sm:gap-10
            justify-items-center
          "
        >

          {teamMembers.map((member, index) => (

            <div
              key={index}
              className="
                bg-[#EEF4FF]
                rounded-3xl
                p-6
                sm:p-8
                lg:p-10
                w-full
                max-w-[360px]
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >



              {/* Role */}

              <div className="flex justify-center mb-5 sm:mb-6">

                <span
                  className="
                    bg-[#EAF0FF]
                    text-[#21439B]
                    px-4
                    sm:px-5
                    py-2
                    rounded-full
                    text-xs
                    sm:text-[15px]
                    font-semibold
                  "
                >

                  {member.role}

                </span>

              </div>





              {/* Image */}

              <img
                src={member.image}
                alt={member.name}
                className="
                  w-24
                  h-24
                  sm:w-32
                  sm:h-32
                  rounded-full
                  object-cover
                  mx-auto
                  border-4
                  sm:border-[5px]
                  border-white
                  shadow-lg
                "
              />





              {/* Name */}

              <h3
                className="
                  mt-5
                  sm:mt-7
                  text-xl
                  sm:text-2xl
                  lg:text-[27px]
                  font-bold
                  text-[#16356F]
                  leading-tight
                "
              >

                {member.name}

              </h3>





              {/* Designation */}

              <p className="
                text-[#21439B]
                font-medium
                mt-2
                text-sm
                sm:text-base
              ">

                {member.designation}

              </p>



              <p
                className="
                  text-gray-500
                  text-xs
                  sm:text-sm
                  mt-2
                  leading-6
                "
              >

                {member.department}

              </p>





              {/* Divider */}

              <div
                className="
                  w-14
                  sm:w-16
                  h-[2px]
                  bg-[#EAB308]
                  rounded-full
                  mx-auto
                  my-5
                  sm:my-6
                "
              ></div>





              {/* Email */}

              <div
                className="
                  flex
                  justify-center
                  items-center
                  gap-2
                  text-[#21439B]
                  text-xs
                  sm:text-sm
                  break-all
                "
              >

                <FaEnvelope className="flex-shrink-0" />

                <span>
                  {member.email}
                </span>

              </div>





              {/* Phone */}

              <div
                className="
                  flex
                  justify-center
                  items-center
                  gap-2
                  mt-3
                  text-gray-700
                  text-sm
                "
              >

                <FaPhoneAlt className="text-[#21439B]" />

                <span>
                  {member.phone}
                </span>


              </div>



            </div>

          ))}


        </div>


      </div>


    </section>
  );
};

export default ContactTeam;