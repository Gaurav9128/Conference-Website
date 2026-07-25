const PublicationCard = () => {
  return (
    <section className="pb-8 sm:pb-12 md:pb-16 bg-[#f5f6f8]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">

        <div className="bg-[#edf4ff] border border-[#b8d4ff] rounded-2xl md:rounded-[20px] shadow-md px-4 sm:px-6 md:px-10 py-6 sm:py-8">

          <p className="text-center text-[15px] sm:text-[17px] md:text-[18px] leading-7 sm:leading-8 md:leading-9 text-[#1f4599] font-medium">

            --
            <br className="hidden sm:block" />
            --
            <br className="hidden sm:block" />
            (--)

          </p>

        </div>

      </div>
    </section>
  );
};

export default PublicationCard;