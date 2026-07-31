import { useEffect } from "react";
import { FaTimes, FaArrowRight } from "react-icons/fa";

const SubmitPaperModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const importantDates = [
    {
      title: "Paper Submission Opens",
      date: "01 August 2026",
    },
    {
      title: "Paper Submission Deadline",
      date: "15 October 2026",
    },
    {
      title: "Notification of Acceptance",
      date: "20 November 2026",
    },
    {
      title: "Camera-Ready Paper Submission",
      date: "10 December 2026",
    },
    {
      title: "Author Registration Deadline",
      date: "10 December 2026",
    },
    {
      title: "Early Bird Registration Deadline",
      date: "20 December 2026",
    },
    {
      title: "Final Registration Deadline",
      date: "10 January 2027",
    },
    {
      title: "Conference Dates",
      date: "22-23 January 2027",
    },
  ];

  const process = [
    "Prepare research paper (6–8 pages)",
    "Follow the conference paper template",
    "Submit paper through the conference portal",
    "Track review status and notifications",
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[950px] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#23439B] px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Submit Your Paper
            </h2>

            <p className="text-white/90 text-xs sm:text-sm md:text-base mt-1">
              Join ICRAIDT-2027 – Share Your Research
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-white text-xl sm:text-2xl hover:rotate-90 transition duration-300"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Important Dates */}
            <div className="border rounded-xl p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
                Important Dates
              </h3>

              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start gap-4"
                  >
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-5">
                      {item.title}
                    </p>

                    <p className="text-sm sm:text-[15px] font-semibold text-gray-800 text-right shrink-0">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Process */}
            <div className="border rounded-xl p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
                Submission Process
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {process.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#23439B] text-white flex items-center justify-center font-semibold text-sm shrink-0">
                      {index + 1}
                    </div>

                    <p className="text-sm sm:text-[15px] text-gray-700 leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-5 sm:mt-6 bg-[#EEF5FF] border border-[#C9DBFF] rounded-xl p-4">
            <p className="text-sm sm:text-[15px] leading-6 sm:leading-7 text-[#23439B]">
              <span className="font-bold">Note:</span> All submitted papers
              will undergo a peer-review process. Accepted papers will be
              recommended for publication in Springer Proceedings.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
            <button className="bg-[#23439B] hover:bg-[#1B347A] transition duration-300 text-white rounded-xl py-3.5 sm:py-4 font-semibold flex items-center justify-center gap-3">
              Submit Paper Now
              <FaArrowRight />
            </button>

            <button className="bg-[#23439B] hover:bg-[#1B347A] transition duration-300 text-white rounded-xl py-3.5 sm:py-4 font-semibold flex items-center justify-center gap-3">
              View Guidelines
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPaperModal;