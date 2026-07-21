const PublicationPartners = () => {
  return (
    <section className="bg-[#f6f6f6] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-bold text-[#23439B]">
            Publication Partners
          </h2>
        </div>

        {/* Card */}
        <div className="flex justify-center">

          <div
            className="
              w-[560px]
              h-[240px]
              bg-white
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
              src="/partners/scopus.png"
              alt="Scopus"
              className="h-[120px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PublicationPartners;