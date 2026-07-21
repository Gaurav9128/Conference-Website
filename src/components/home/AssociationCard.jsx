const AssociationCard = () => {
  return (
    <section className='pt-8 pb-10 bg-[#f5f5f7]'>
      <div className='max-w-[960px] mx-auto px-4'>
        <div className='bg-[#eef4fb] border border-[#b8d6ff] rounded-[26px] shadow-[0_3px_12px_rgba(0,0,0,0.08)] py-8 px-6 text-center'>
          <h2 className='text-[20px] md:text-[22px] font-semibold text-[#1f4aa8] mb-6'>
            In Association with
          </h2>

          <div className='space-y-4 text-[#2b4f9e] text-[16px] md:text-[18px] leading-relaxed'>
            <p>Rajasthan Centre of Advanced Technology (RCAT), Jaipur</p>
            <p>Bharat BoudhIKS</p>
            <p>
              Indian Knowledge System (IKS) Cell, Poornima University, Jaipur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociationCard;