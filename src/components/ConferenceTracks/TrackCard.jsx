import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const TrackCard = ({ track }) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        bg-gradient-to-br ${track.color}
        p-8
        h-[430px]
        text-white
        shadow-[0_15px_45px_rgba(0,0,0,0.18)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_55px_rgba(0,0,0,0.25)]
      `}
    >
      {/* Decorative Background */}
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-white/10 blur-sm"></div>
      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-white/10 blur-sm"></div>

      {/* Track Number */}
      <div
        className="
          inline-flex
          items-center
          justify-center
          whitespace-nowrap
          rounded-[22px]
          bg-white/15
          border
          border-white/25
          backdrop-blur-xl
          px-5
          py-3
          min-w-[120px]
          shadow-md
        "
      >
        <span className="text-[18px] font-extrabold tracking-wide uppercase text-white">
          {track.number}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-[28px] leading-9 font-bold">
        {track.title}
      </h2>

      {/* Description */}
      <p className="mt-5 text-[15px] leading-7 text-white/90">
        {track.description}
      </p>

      {/* Divider */}
      <div className="mt-6 h-[3px] w-20 rounded-full bg-white/70"></div>

      {/* Topics */}
      <div className="mt-6 flex flex-wrap gap-2">
        {track.topics.map((topic, index) => (
          <span
            key={index}
            className="
              px-3
              py-1.5
              rounded-full
              text-xs
              border
              border-white/25
              bg-white/10
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Learn More */}
      <button
        className="
          absolute
          bottom-8
          left-8
          flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-5
          py-3
          text-sm
          font-semibold
          text-slate-900
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
        "
      >
        Learn More
        <HiArrowRight className="text-base" />
      </button>

      {/* Watermark */}
      <span
        className="
          absolute
          bottom-0
          right-5
          text-[110px]
          font-black
          leading-none
          text-white/10
          select-none
          pointer-events-none
        "
      >
        {track.number.replace("TRACK ", "")}
      </span>
    </div>
  );
};

export default TrackCard;