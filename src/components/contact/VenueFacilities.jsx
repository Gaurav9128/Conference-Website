import { FaCheck, FaPlane, FaTrain, FaCar } from "react-icons/fa";

const conferenceFacilities = [
  "Large auditorium for keynote sessions",
  "Multiple meeting rooms for parallel sessions",
  "High-speed WiFi",
  "Advanced audio-visual equipment",
];

const amenities = [
  "On-campus dining",
  "Parking available",
  "Refreshment lounges",
  "Accessible facilities",
];

const travelInfo = [
  {
    icon: <FaPlane />,
    title: "By Air",
    description:
      "Jaipur International Airport (JAI) is well connected to major cities.",
    info: "Distance: ~13 km | Time: ~30 minutes",
  },
  {
    icon: <FaTrain />,
    title: "By Rail",
    description:
      "Jaipur Railway Station connects to all major Indian cities.",
    info: "Distance: ~12 km | Time: ~25 minutes",
  },
  {
    icon: <FaCar />,
    title: "By Road",
    description:
      "Excellent highway connectivity from Delhi and nearby states.",
    info: "Delhi to Jaipur: ~260 km | ~4.5 hours",
  },
];


const VenueFacilities = () => {

  return (

<section className="bg-white py-14 sm:py-20 lg:py-24">

<div className="max-w-7xl mx-auto px-4 sm:px-6">


{/* Heading */}

<h2
className="
text-3xl
sm:text-4xl
font-bold
text-[#12284B]
mb-12
sm:mb-16
lg:mb-20
"
>
Venue Facilities
</h2>




{/* Top Section */}

<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-40
"
>


{/* Conference Facilities */}

<div>


<h3
className="
text-lg
sm:text-xl
font-semibold
text-[#12284B]
mb-6
sm:mb-8
"
>
Conference Facilities
</h3>



<div className="space-y-5">


{
conferenceFacilities.map((item,index)=>(

<div
key={index}
className="
flex
items-start
gap-3
sm:gap-4
"
>

<FaCheck
className="
text-[#21439B]
mt-1
text-base
sm:text-lg
flex-shrink-0
"
/>


<p
className="
text-sm
sm:text-[15px]
text-[#4B5563]
leading-7
"
>
{item}
</p>


</div>

))

}


</div>


</div>





{/* Amenities */}

<div>


<h3
className="
text-lg
sm:text-xl
font-semibold
text-[#12284B]
mb-6
sm:mb-8
"
>
Amenities
</h3>



<div className="space-y-5">


{
amenities.map((item,index)=>(

<div
key={index}
className="
flex
items-start
gap-3
sm:gap-4
"
>

<FaCheck
className="
text-[#21439B]
mt-1
text-base
sm:text-lg
flex-shrink-0
"
/>


<p
className="
text-sm
sm:text-base
text-[#4B5563]
leading-7
"
>
{item}
</p>


</div>

))

}


</div>


</div>


</div>





{/* Travel Section */}


<div className="mt-16 sm:mt-24 lg:mt-28">


<h2
className="
text-2xl
sm:text-3xl
font-bold
text-[#12284B]
mb-12
sm:mb-16
lg:mb-20
"
>
Getting to Jaipur
</h2>




<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-10
lg:gap-16
"
>


{
travelInfo.map((item,index)=>(


<div
key={index}
className="
bg-[#F8FAFF]
rounded-2xl
p-6
sm:p-8
transition
hover:shadow-lg
"
>


<h3
className="
flex
items-center
justify-between
gap-3
text-lg
sm:text-xl
font-semibold
text-[#12284B]
mb-5
"
>

{item.title}


<span
className="
text-[#21439B]
text-2xl
"
>
{item.icon}
</span>


</h3>



<p
className="
text-sm
sm:text-[15px]
leading-7
text-[#4B5563]
"
>
{item.description}
</p>



<p
className="
mt-5
sm:mt-8
text-xs
sm:text-sm
text-[#6B7280]
"
>
{item.info}
</p>



</div>


))

}


</div>


</div>



</div>

</section>


  );

};


export default VenueFacilities;