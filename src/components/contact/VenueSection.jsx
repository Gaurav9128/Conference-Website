import venueMap from "../../assets/map.png";
// apna roadmap image yaha import karna

const VenueSection = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <div>

                        <h2 className="text-[30px] font-bold text-[#21439B] mb-10">
                            Poornima University
                        </h2>

                        <p className="text-[15px] leading-10 text-[#4B5563] mb-12">
                            ICISET 2026 will be held at Poornima University, Jaipur —
                            a state-of-the-art educational institution equipped with
                            modern facilities for international conferences.
                        </p>

                        {/* Address */}

                        <div className="mb-10">
                            <h3 className="text-1xl font-semibold text-[#111827] mb-3">
                                Address
                            </h3>

                            <p className="max-w-[620px] text-[14px] leading-8 text-[#4B5563]">
                                Plot No. IS-2027–2031, Ramchandrapura P.O. Vidhani Vatika Road,
                                Sitapura, Rajasthan 303905
                            </p>
                        </div>
                        {/* Phone */}

                        <div className="mb-10">
                            <h3 className="text-[20px] font-bold text-[#111827] mb-3">
                                Phone
                            </h3>

                            <p className="text-[12px] text-gray-600">
                                +91-9887587811
                            </p>
                        </div>

                        {/* Email */}

                        <div>
                            <h3 className="text-[20px] font-bold text-[#111827] mb-3">
                                Email
                            </h3>

                            <p className="text-[15px] text-gray-600">
                                iciset2026@poornima.edu.in
                            </p>

                            <p className="text-[15px] text-gray-600 mt-2">
                                saurabh.shandilya@poornima.edu.in
                            </p>
                        </div>

                    </div>

                    {/* Right */}

                    <div className="group overflow-hidden rounded-[24px] shadow-xl">

                        <img
                            src={venueMap}
                            alt="Venue Road Map"
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default VenueSection;