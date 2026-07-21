import { FaArrowRightLong } from "react-icons/fa6";

const RegisterButton = () => {
  return (
    <button className="bg-[#2646A3] hover:bg-[#1d3886] transition-all duration-300 h-[46px] px-7 rounded-xl text-white font-semibold flex items-center gap-2 whitespace-nowrap">
      Register Now
      <FaArrowRightLong className="text-sm" />
    </button>
  );
};

export default RegisterButton;