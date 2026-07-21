const committeeMembers = [
  {
    name: "Dr. Suresh Chandra Padhy",
    designation: "President, PU",
    role: "Chief Patron",
  },
  {
    name: "Dr. Manoj Gupta",
    designation: "Pro-President (FCE & FET), PU",
    role: "General Chair",
  },
  {
    name: "Dr. Ravi Soni",
    designation: "DY-Hod & Coordinator, PU",
    role: "Convener",
  },
];

export default function CommitteeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900">
          Committee
        </h2>

        {/* Description */}
        <p className="max-w-5xl mx-auto mt-8 text-center text-slate-600 text-lg leading-9">
          The success of ICISET-2026 is guided by an accomplished panel of
          academic leaders, researchers, and industry experts who bring
          extensive experience in intelligent computing, data science,
          cybersecurity, and emerging digital technologies. Their strategic
          vision, research excellence, and commitment to innovation ensure the
          conference maintains the highest standards of technical quality,
          global collaboration, and academic integrity.
        </p>

        {/* Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl border border-blue-100 bg-blue-50/70 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-3xl font-semibold text-blue-900">
                {member.name}
              </h3>

              <p className="mt-6 text-lg text-slate-700">
                {member.designation}
              </p>

              <p className="mt-2 text-lg font-medium text-slate-800">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-xl bg-blue-700 px-10 py-4 text-lg font-medium text-white transition duration-300 hover:bg-blue-800 hover:shadow-lg">
            View Full Committee
          </button>
        </div>

      </div>
    </section>
  );
}