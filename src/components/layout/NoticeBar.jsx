import { useEffect, useState } from "react";
import { PiSpeakerHighFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const notices = [
  {
    text: "Paper Submission Deadline: September 30, 2026",
  },
  {
    text: "ICISET 2026 November 27–28, 2026",
  },
  {
    text: "Early Bird Registration: October 20, 2026",
  },
];

export default function NoticeBar() {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % notices.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  if (!show) return null;

  return (
    <section className="bg-[#2744AE] h-16 w-full">
      <div className="max-w-[1600px] mx-auto h-full px-12 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center">

          {/* Notice Button */}

          <div className="bg-white/15 rounded-full h-9 px-6 flex items-center justify-center mr-8">
            <span className="text-white font-semibold text-[16px]">
              Notice
            </span>
          </div>

          {/* Icon */}

          <PiSpeakerHighFill className="text-[#FFD43B] text-lg mr-4" />

          {/* Text */}

          <p className="text-white text-[15px] font-normal">
            {notices[active].text}
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <div className="flex gap-3">

            {notices.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "bg-white"
                    : "bg-white/35"
                }`}
              />
            ))}

          </div>

          <button
            onClick={() => setShow(false)}
            className="text-white text-[26px] hover:rotate-90 transition duration-300"
          >
            <IoClose />
          </button>

        </div>

      </div>
    </section>
  );
}