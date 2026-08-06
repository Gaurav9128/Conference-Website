import chairman from "../../assets/committee/person1.png";
import president from "../../assets/committee/person2.png";
import director from "../../assets/committee/person3.png";
import proPresident from "../../assets/committee/person4.png";
import Dean from "../../assets/committee/person8.png";
import international from "../../assets/committee/person3.png";
import Registrar from "../../assets/committee/person7.png";
import Dyhod from "../../assets/committee/person9.jpeg";
import hod from "../../assets/committee/person9.png";
import Ravi from "../../assets/committee/person10.jpeg";


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
];

const GeneralChair = [
  {
    image: Registrar,
    name: "Dr. Devendra Somvanshi",
    designation: "Registrar",
    organization: "Poornima University",
  },
  {
    image: Dean,
    name: "Dr. Shikha Sharma",
    designation: "Dean FCE",
    organization: "Poornima University",
  },
];

const convener = [
  {
    image: Ravi,
    name: "Dr. Ravi Soni",
    designation: "Associate Professor, CSA,FCE",
    organization: "Poornima University",
  },
  {
    image: Dyhod,
    name: "Dr. Manali Pareek",
    designation: "Associate Professor, CSA, FCE",
    organization: "Poornima University",
  },
];

 const Organizing = [
  {
    image: hod,
    name: "Dr. Savita Shiwani",
    designation: "Professor & Head – Department of Computer Applications (BCA Higher) FCE",
    organization: "Poornima University",
  },
];





const CommitteeCard = ({ person }) => (

  <div
    className="
bg-white
rounded-2xl
sm:rounded-[24px]
shadow-lg
hover:shadow-2xl
transition-all
duration-300
py-8
sm:py-10
px-5
sm:px-8
text-center
border
border-[#edf2fb]
hover:-translate-y-2
h-full
"
  >


    <img
      src={person.image}
      alt={person.name}
      className="
w-28
h-28
sm:w-36
sm:h-36
lg:w-40
lg:h-40
rounded-full
object-contain
mx-auto
border-4
border-[#f5f7ff]
"
    />



    <h3
      className="
mt-6
sm:mt-8
text-xl
sm:text-2xl
lg:text-[25px]
font-semibold
text-[#111827]
break-words
"
    >
      {person.name}
    </h3>




    <p
      className="
mt-3
sm:mt-4
text-sm
sm:text-[15px]
font-medium
text-[#23439B]
leading-6
"
    >
      {person.designation}
    </p>




    <p
      className="
mt-3
sm:mt-4
text-xs
sm:text-sm
text-gray-500
leading-6
sm:leading-8
"
    >
      {person.organization}
    </p>



  </div>

);





const CommitteeSection = () => {

  return (

    <section className="bg-[#F7F8FC] py-14 sm:py-20 lg:py-24">


      <div
        className="
max-w-7xl
mx-auto
px-4
sm:px-6
"
      >



        {/* Chief Patrons */}

        <h2
          className="
text-center
text-xl
sm:text-2xl
lg:text-[25px]
font-bold
text-[#23439B]
uppercase
mb-10
sm:mb-16
tracking-wide
"
        >
          Chief Patrons
        </h2>




        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
sm:gap-10
"
        >


          {
            chiefPatrons.map((item, index) => (

              <CommitteeCard
                key={index}
                person={item}
              />

            ))

          }


        </div>





        {/* General Chairs */}


        <h2
          className="
text-center
text-xl
sm:text-2xl
lg:text-[25px]
font-bold
text-[#23439B]
uppercase
mt-20
sm:mt-28
mb-10
sm:mb-16
tracking-wide
"
        >
          General Chairs
        </h2>





        <div className="flex justify-center">
          <div className="w-full sm:w-[420px] lg:w-[480px]">
            {generalChairs.map((item, index) => (
              <CommitteeCard key={index} person={item} />
            ))}

          </div>
        </div>


      </div> &nbsp; &nbsp;

      {/* Co- General Chairs */}

        <h2
          className="
text-center
text-xl
sm:text-2xl
lg:text-[25px]
font-bold
text-[#23439B]
uppercase
mb-10
sm:mb-16
tracking-wide
"
        >
          CO-General Chairs
        </h2>




        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
  {GeneralChair.map((item, index) => (
    <div key={index} className="w-full sm:w-[420px] lg:w-[380px]">
      <CommitteeCard person={item} />
    </div>
  ))}
</div> &nbsp; &nbsp;

{/* General Chairs */}


        <h2
          className="
text-center
text-xl
sm:text-2xl
lg:text-[25px]
font-bold
text-[#23439B]
uppercase
mt-20
sm:mt-28
mb-10
sm:mb-16
tracking-wide
"
        >
          CONFERENCE ORGANIZING SECRETARY
        </h2>





        <div className="flex justify-center">
          <div className="w-full sm:w-[420px] lg:w-[480px]">
            {Organizing.map((item, index) => (
              <CommitteeCard key={index} person={item} />
            ))}

          </div>
        </div>&nbsp;&nbsp;

       {/* Co- General Chairs */}

        <h2
          className="
text-center
text-xl
sm:text-2xl
lg:text-[25px]
font-bold
text-[#23439B]
uppercase
mb-10
sm:mb-16
tracking-wide
"
        >
          Convener
        </h2>




        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
  {convener.map((item, index) => (
    <div key={index} className="w-full sm:w-[420px] lg:w-[380px]">
      <CommitteeCard person={item} />
    </div>
  ))}
</div>

        
       

    </section>

  );

};


export default CommitteeSection;