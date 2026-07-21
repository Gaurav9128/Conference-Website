const PublicationInfo = () => {
  return (
    <section className="bg-[#f6f6f6] py-24">
      <div className="max-w-[1150px] mx-auto px-6">

        <div className="bg-white rounded-[28px] shadow-[0_20px_55px_rgba(0,0,0,0.08)] px-16 py-20">

          {/* Conference Publication */}
          <div className="text-center">

            <h2 className="text-[35px] font-bold text-[#23439B]">
              Conference Publication
            </h2>

            <p className="mt-10 text-[18px] leading-relaxed text-[#374151]">
              All accepted papers will be recommended for publication in{" "}
              <span className="font-semibold text-[#1F2937]">
                SCOPUS Indexed Conference Proceedings.
              </span>
            </p>

          </div>

          {/* Divider */}
          <div className="my-14 border-t border-gray-200"></div>

          {/* Journal Publication */}
          <div className="text-center">

            <h2 className="text-[38px] font-bold text-[#23439B]">
              Journal Publication
            </h2>

            <p className="mt-10 text-[20px] leading-relaxed text-[#374151]">
              Authors may submit extended versions to associated journals.
            </p>

            <p className="mt-8 text-[18px] font-semibold text-[#1F2937]">
              (Article Processing Charges apply as per journal norms.)
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PublicationInfo;