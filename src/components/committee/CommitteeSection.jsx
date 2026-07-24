import chairman from "../../assets/committee/person3.png";
import president from "../../assets/committee/person3.png";
import director from "../../assets/committee/person3.png";

import proPresident from "../../assets/committee/person3.png";
import dean from "../../assets/committee/person3.png";
import international from "../../assets/committee/person3.png";

const chiefPatrons = [
  {
    image: chairman,
    name: "Shri Shashikant Singhi",
    designation: "Chairperson",
    organization: "Poornima University",
  },
  {
    image: president,
    name: "Dr. Suresh Chand Padhy",
    designation: "President",
    organization: "Poornima University",
  },
  {
    image: director,
    name: "Ar. Rahul Singhi",
    designation: "Director",
    organization: "Poornima University",
  },
];

const generalChairs = [
  {
    image: proPresident,
    name: "Dr. Manoj Gupta",
    designation: "Pro-President (FET & FCE)",
    organization: "Poornima University",
  },
  {
    image: dean,
    name: "Prof. (Dr.) Arun Chougule",
    designation: "Dean Academics",
    organization: "SKGI",
  },
  {
    image: international,
    name: "Dr. Issam El Naqa",
    designation: "Chair, Department of Machine Learning",
    organization: "Moffitt Cancer Center, Tampa, Florida, USA",
  },
];

const CommitteeCard = ({ person }) => (
  <div
    className="
      bg-white
      rounded-[24px]
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      py-10
      px-8
      text-center
      border
      border-[#edf2fb]
      hover:-translate-y-2
    "
  >
    <img
      src={person.image}
      alt={person.name}
      className="
        w-40
        h-40
        rounded-full
        object-cover
        mx-auto
        border-4
        border-[#f5f7ff]
      "
    />

    <h3 className="mt-8 text-[25px] font-semibold text-[#111827]">
      {person.name}
    </h3>

    <p className="mt-4 text-[15px] font-medium text-[#23439B]">
      {person.designation}
    </p>

    <p className="mt-4 text-gray-500 text-[12px] leading-8">
      {person.organization}
    </p>
  </div>
);

const CommitteeSection = () => {
  return (
    <section className="bg-[#F7F8FC] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Chief Patrons */}

        <h2 className="text-center text-[25px] font-bold text-[#23439B] uppercase mb-16 tracking-wide">
          Chief Patrons
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {chiefPatrons.map((item, index) => (
            <CommitteeCard key={index} person={item} />
          ))}
        </div>

        {/* General Chairs */}

        <h2 className="text-center text-[25px] font-bold text-[#23439B] uppercase mt-28 mb-16 tracking-wide">
          General Chairs
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {generalChairs.map((item, index) => (
            <CommitteeCard key={index} person={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommitteeSection;