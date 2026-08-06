const partners = [
  // {
  //   id: 1,
  //   image: "/partners/acm.png",
  //   alt: "ACM PU Jaipur",
  // },
  // {
  //   id: 2,
  //   image: "/partners/rcat.png",
  //   alt: "RCAT",
  // },
];

const ConferencePartners = () => {
  return (
    <section className="bg-[#f6f6f6] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#23439B]">
            Conference Partners
          </h2>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                bg-white
                h-[320px]
                rounded-[30px]
                shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src={partner.image}
                alt={partner.alt}
                className="max-h-[150px] max-w-[300px] object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ConferencePartners;