const stats = [
  {
    number: "4+",
    title: "Conference Tracks",
  },
  {
    number: "4+",
    title: "Keynote Speakers",
  },
  {
    number: "2",
    title: "Conference Days",
  },
  {
    number: "4+",
    title: "Partner Organizations",
  },
];

const ConferenceStats = () => {
  return (
    <section className="bg-white pt-10 sm:pt-14 lg:pt-18 py-8 sm:py-10">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">


        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          sm:gap-8
          lg:gap-10
        ">


          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center"
            >


              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-[40px]
                  font-extrabold
                  text-[#23439B]
                  leading-none
                "
              >

                {item.number}

              </h2>



              <p
                className="
                  mt-3
                  sm:mt-4
                  text-xs
                  sm:text-sm
                  lg:text-[15px]
                  font-medium
                  text-[#1F2937]
                  leading-5
                "
              >

                {item.title}

              </p>


            </div>


          ))}


        </div>


      </div>


    </section>
  );
};

export default ConferenceStats;