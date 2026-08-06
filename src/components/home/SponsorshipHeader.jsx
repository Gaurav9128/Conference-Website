import heroVideo from "../../assets/Video.mp4";
import { FaCheck } from "react-icons/fa";
//import ConferenceBanner from "../layout/ConferenceBanner";

const sponsorshipPlans = [
  {
    title: "Diamond Sponsorship",
    price: "30000",
    benefits: [
      "Three full conference registrations free of cost",
      "Three Stall spaces for exhibits",
      "Inclusion of company name & logo in web advertising",
      "Prominent acknowledgment in opening address",
    ],
  },
  {
    title: "Gold Sponsorship",
    price: "20000",
    benefits: [
      "Two full conference registrations free of cost",
      "Two Stall spaces for exhibits",
      "Inclusion of company name & logo in web advertising",
      "Acknowledgment in opening address",
    ],
  },
  {
    title: "Gold Sponsorship",
    price: "10000",
    benefits: [
      "Two full conference registrations free of cost",
      "Two Stall spaces for exhibits",
      "Inclusion of company name & logo in web advertising",
      "Acknowledgment in opening address",
    ],
  },
];

const SponsorshipHeader = () => {
  return (
    <section className="bg-[#f6f6f6] pt-10 sm:pt-16 lg:pt-24 pb-20 sm:pb-28">

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6">


        {/* ================= Hero Video ================= */}

        <div className="relative">


          <video
            className="
              w-full
              h-[230px]
              sm:h-[320px]
              lg:h-[420px]
              object-cover
              rounded-2xl
              sm:rounded-[30px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>



          {/* Floating Card */}

          <div className="
            absolute
            left-1/2
            -translate-x-1/2
            -bottom-20
            sm:-bottom-32
            lg:-bottom-40
            w-[90%]
            sm:w-auto
          ">


            <div
              className="
                bg-white
                w-full
                sm:w-[420px]
                lg:w-[450px]
                rounded-2xl
                sm:rounded-[28px]
                px-5
                sm:px-8
                lg:px-10
                py-6
                sm:py-8
                lg:py-9
                text-center
                shadow-[0_18px_45px_rgba(0,0,0,0.12)]
              "
            >


              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[45px]
                  font-extrabold
                  leading-tight
                  text-[#23439B]
                "
              >
                Sponsorship
              </h2>


              <p className="
                mt-3
                text-sm
                sm:text-base
                text-[#6B7280]
              ">
                Partnership and sponsorship opportunities
              </p>



              <div className="
                w-20
                h-1
                sm:h-[5px]
                bg-[#EAB308]
                rounded-full
                mx-auto
                mt-4
                sm:mt-5
              "></div>


            </div>


          </div>


        </div>




        {/* ================= Description ================= */}


        <div className="
          max-w-4xl
          mx-auto
          mt-32
          sm:mt-44
          lg:mt-52
        ">


          <p className="
            text-center
            text-[#253858]
            text-sm
            sm:text-lg
            lg:text-[20px]
            leading-7
            sm:leading-9
            lg:leading-[1.9]
          ">

            Sponsorship of 
            <span className="font-semibold">
              {" "}ICRAIDT-2027
            </span>{" "}
            provides companies and organizations a unique opportunity to
            increase visibility and product awareness within a highly
            specialized and influential community of researchers,
            academicians, industry professionals, and technology leaders in
            intelligent computing and emerging digital technologies.

          </p>


        </div>





        {/* ================= Sponsorship Cards ================= */}


        <div className="mt-12 sm:mt-20 lg:mt-24 space-y-8 sm:space-y-14">


          {sponsorshipPlans.map((plan, index) => (

            <div
              key={index}
              className="
                bg-[#EDF5FF]
                rounded-2xl
                sm:rounded-[30px]
                px-5
                sm:px-8
                lg:px-12
                py-8
                sm:py-10
                lg:py-12
                border
                border-[#E3ECF9]
                transition-all
                duration-300
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                hover:-translate-y-1
              "
            >


              {/* Heading */}


              <h2 className="
                text-xl
                sm:text-2xl
                lg:text-[25px]
                font-bold
                text-[#21479C]
              ">

                {plan.title}

                <span className="font-bold">
                  {" "}
                  (Rs. {plan.price})
                </span>

              </h2>




              {/* Benefits */}


              <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">


                {plan.benefits.map((benefit, i) => (

                  <div
                    key={i}
                    className="flex items-start gap-3 sm:gap-4"
                  >


                    <FaCheck
                      className="
                      text-[#21479C]
                      text-base
                      sm:text-lg
                      mt-1
                      sm:mt-2
                      flex-shrink-0
                      "
                    />



                    <p className="
                      text-sm
                      sm:text-base
                      lg:text-[18px]
                      leading-7
                      lg:leading-10
                      text-[#253858]
                    ">

                      {benefit}

                    </p>


                  </div>


                ))}


              </div>


            </div>


          ))}


        </div>


      </div>




      {/* <ConferenceBanner /> */}


    </section>
  );
};

export default SponsorshipHeader;