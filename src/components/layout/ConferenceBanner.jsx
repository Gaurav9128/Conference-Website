const ConferenceBanner = () => {
    return (
        <section
            className="
                bg-gradient-to-b
                from-[#edf2fb]
                to-[#f8faff]
                py-6
                sm:py-8
                lg:py-10
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    text-center
                "
            >


                <h2
                    className="
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        lg:text-[36px]
                        font-bold
                        text-[#0f2344]
                        leading-tight
                    "
                >

                    International Conference 2026

                </h2>




                <p
                    className="
                        mt-3
                        text-xs
                        sm:text-sm
                        md:text-base
                        lg:text-[18px]
                        text-gray-600
                        leading-6
                        sm:leading-7
                        flex
                        flex-wrap
                        justify-center
                        items-center
                        gap-1
                        sm:gap-2
                    "
                >

                    <span>
                        Innovation, Research &amp; Future Technologies
                    </span>


                    <span className="hidden sm:inline">
                        |
                    </span>


                    <span>
                        Submit your paper now
                    </span>


                </p>



            </div>


        </section>
    );
};

export default ConferenceBanner;