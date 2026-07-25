
import acm from "../../assets/partners/acm.png";
import poornima from "../../assets/partners/poornima.png";

const partners = [
  {
    image: acm,
    title: "ACM PU, Jaipur",
    desc: "The ACM Student Chapter at Poornima University, Jaipur focuses on innovation and technical excellence.",
  },
  {
    image: poornima,
    title: "Poornima University",
    desc: "Poornima University supports academic excellence through research and innovation.",
  },
];

const marqueePartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="bg-[#F4F6FA] py-12 sm:py-16 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900">
          Our Partners
        </h2>


        <p className="max-w-4xl mx-auto mt-5 sm:mt-8 text-center text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-9">
          ICRAIDT 2027 is supported by distinguished academic institutions,
          research organizations, and professional bodies committed to
          advancing innovation in intelligent computing and future technologies.
        </p>


        {/* Marquee */}
        <div className="relative mt-10 sm:mt-14 lg:mt-16 overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-12 sm:w-24 bg-gradient-to-r from-[#F4F6FA] to-transparent" />


          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-12 sm:w-24 bg-gradient-to-l from-[#F4F6FA] to-transparent" />


          <div className="marquee">

            <div className="marquee-content">

              {marqueePartners.map((partner, index) => (

                <div
                  key={index}
                  className="partner-card"
                >

                  <div
                    className="
                    bg-white
                    rounded-2xl
                    sm:rounded-[28px]
                    shadow-md
                    h-[330px]
                    sm:h-[380px]
                    lg:h-[420px]
                    w-[280px]
                    sm:w-[320px]
                    p-5
                    sm:p-8
                    flex
                    flex-col
                    items-center
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-xl"
                  >

                    <img
                      src={partner.image}
                      alt={partner.title}
                      className="h-20 sm:h-24 object-contain"
                    />


                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-5 sm:mt-6 text-slate-800">
                      {partner.title}
                    </h3>


                    <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-6 sm:leading-8">
                      {partner.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* Button */}
        <div className="flex justify-center mt-10 sm:mt-14">

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-7 sm:px-10 py-3 sm:py-4 rounded-xl transition text-sm sm:text-base">
            More Partners
          </button>

        </div>


      </div>

    </section>
  );
}