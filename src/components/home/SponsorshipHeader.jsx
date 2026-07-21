import heroVideo from "../../assets/Video.mp4";

const SponsorshipHeader = () => {
    return (
        <section className="bg-[#f6f6f6] pt-24 pb-36">
            <div className="max-w-[1250px] mx-auto px-6">

                {/* Video */}
                <div className="relative">

                    <video
                        className="
              w-full
              h-[420px]
              object-cover
              rounded-[30px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>

                    {/* Floating Card */}
                    <div
                        className="
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-40
            "
                    >
                        <div
                            className="
                bg-white
                w-[450px]
                rounded-[28px]
                px-10
                py-9
                text-center
                shadow-[0_18px_45px_rgba(0,0,0,0.12)]
              "
                        >
                            <h2
                                className="
                  text-[45px]
                  font-extrabold
                  leading-none
                  text-[#23439B]
                "
                            >
                                Sponsorship
                            </h2>

                            <p className="mt-3 text-[16px] text-[#6B7280]">
                                Partnership and sponsorship opportunities
                            </p>

                            <div className="w-20 h-[5px] bg-[#EAB308] rounded-full mx-auto mt-5"></div>

                        </div>
                    </div>

                </div>
                {/* Sponsorship Description */}
                <div className="max-w-6xl mx-auto px-6 mt-52">
                    <p className="text-center text-[#253858] text-xl md:text-[25px] leading-[1.8] font-normal">
                        Sponsorship of{" "}
                        <span className="font-medium">ICISET-2026</span> provides companies and
                        organizations a unique opportunity to increase visibility and product
                        awareness within a highly specialized and influential community of
                        researchers, academicians, industry professionals, and technology leaders
                        in intelligent computing and emerging digital technologies.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default SponsorshipHeader;