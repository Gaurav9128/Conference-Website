const SpeakerCard = ({ speaker }) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        group
      "
    >
      {/* Image */}
      <div
        className="
          w-[150px]
          h-[150px]
          rounded-full
          border-[4px]
          border-[#23439B]
          overflow-hidden
          shadow-lg
          transition-all
          duration-500
          group-hover:scale-105
        "
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* Name */}
      <h3
        className="
          mt-6
          text-[34px]
          font-bold
          text-[#123A8F]
          leading-tight
        "
      >
        {speaker.name}
      </h3>

      {/* Designation */}
      <p
        className="
          mt-2
          text-[20px]
          text-[#23439B]
          font-medium
          leading-8
        "
      >
        {speaker.designation}
      </p>

      {/* Organization */}
      <p
        className="
          mt-2
          text-[18px]
          text-gray-600
          leading-8
          max-w-[420px]
        "
      >
        {speaker.organization}
      </p>
      <p
        className="
          mt-2
          text-[18px]
          text-gray-600
          leading-8
          max-w-[420px]
        "
      >
        {speaker.university}
      </p>
    </div>
  );
};

export default SpeakerCard;