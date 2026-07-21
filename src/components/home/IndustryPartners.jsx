const partners = [
  {
    id: 1,
    image: "/partners/acm.png",
  },
  {
    id: 2,
    image: "/partners/iks.png",
  },
  {
    id: 3,
    image: "/partners/poornima.png",
  },
  {
    id: 4,
    image: "/partners/rcat.png",
  },
//   {
//     id: 5,
//     image: "/partners/clubfirst.png",
//   },
//   {
//     id: 6,
//     image: "/partners/zeetron.png",
//   },
];

const IndustryPartners = () => {
  return (
    <section className="bg-[#f6f6f6] py-24">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[52px] font-bold text-[#23439B]">
            Industry Partners
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {partners.map((item) => (
            <div
              key={item.id}
              className="h-[255px] rounded-[28px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]"
            >
              <img
                src={item.image}
                alt=""
                className="max-h-[120px] max-w-[230px] object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IndustryPartners;