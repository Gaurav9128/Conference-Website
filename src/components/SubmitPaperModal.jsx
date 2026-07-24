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
      title: "Start Paper Submission",
      date: "July 01, 2026",
    },
    {
      title: "Full Paper Submission",
      date: "September 30, 2026",
    },
    {
      title: "Notification of Acceptance",
      date: "October 15, 2026",
    },
    {
      title: "Early Bird Registration",
      date: "October 20, 2026",
    },
    {
      title: "Camera Ready",
      date: "November 10, 2026",
    },
    {
      title: "Late Registration",
      date: "November 15, 2026",
    },
    {
      title: "Conference Dates",
      date: "November 27–28, 2026",
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[950px] bg-white rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]"
      >
        {/* Header */}

        <div className="bg-[#23439B] px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Submit Your Paper
            </h2>

            <p className="text-white/90 text-sm md:text-base mt-1">
              Join ICISET 2026 – Share Your Research
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-white text-2xl hover:rotate-90 transition duration-300"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}

        <div className="p-6">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Important Dates */}

            <div className="border rounded-xl p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-5">
                Important Dates
              </h3>

              <div className="space-y-4">

                {importantDates.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-4"
                  >
                    <p className="text-[15px] text-gray-600">
                      {item.title}
                    </p>

                    <p className="text-[15px] font-semibold text-gray-800 text-right">
                      {item.date}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Submission Process */}

            <div className="border rounded-xl p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-5">
                Submission Process
              </h3>

              <div className="space-y-5">

                {process.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#23439B] text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>

                    <p className="text-[15px] text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* Note */}

          <div className="mt-6 bg-[#EEF5FF] border border-[#C9DBFF] rounded-xl p-4">
            <p className="text-[15px] leading-7 text-[#23439B]">
              <span className="font-bold">Note:</span> All submitted papers
              will undergo a peer-review process. Accepted papers will be
              recommended for publication in Scopus Indexed Conference
              Proceedings.
            </p>
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

            <button className="bg-[#23439B] hover:bg-[#1B347A] transition duration-300 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3">
              Submit Paper Now
              <FaArrowRight />
            </button>

            <button className="bg-[#23439B] hover:bg-[#1B347A] transition duration-300 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3">
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