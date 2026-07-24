import venueMap from "../../assets/map.png";

const VenueSection = () => {
    return (
        <section className="bg-white py-14 sm:py-20 lg:py-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">


                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-10
                        lg:gap-16
                        items-center
                    "
                >



                    {/* Left */}

                    <div>


                        <h2
                            className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                text-[#21439B]
                                mb-6
                                sm:mb-10
                            "
                        >

                            Poornima University

                        </h2>





                        <p
                            className="
                                text-sm
                                sm:text-[15px]
                                leading-7
                                sm:leading-10
                                text-[#4B5563]
                                mb-8
                                sm:mb-12
                                text-justify
                            "
                        >

                            ICISET 2026 will be held at Poornima University, Jaipur —
                            a state-of-the-art educational institution equipped with
                            modern facilities for international conferences.

                        </p>





                        {/* Address */}

                        <div className="mb-8 sm:mb-10">


                            <h3
                                className="
                                    text-lg
                                    sm:text-xl
                                    font-semibold
                                    text-[#111827]
                                    mb-3
                                "
                            >

                                Address

                            </h3>




                            <p
                                className="
                                    max-w-[620px]
                                    text-sm
                                    sm:text-[14px]
                                    leading-7
                                    sm:leading-8
                                    text-[#4B5563]
                                "
                            >

                                Plot No. IS-2027–2031, Ramchandrapura P.O.
                                Vidhani Vatika Road, Sitapura, Rajasthan 303905

                            </p>


                        </div>






                        {/* Phone */}

                        <div className="mb-8 sm:mb-10">


                            <h3
                                className="
                                    text-lg
                                    sm:text-[20px]
                                    font-bold
                                    text-[#111827]
                                    mb-3
                                "
                            >

                                Phone

                            </h3>



                            <p className="text-sm text-gray-600">

                                +91-9887587811

                            </p>


                        </div>







                        {/* Email */}

                        <div>


                            <h3
                                className="
                                    text-lg
                                    sm:text-[20px]
                                    font-bold
                                    text-[#111827]
                                    mb-3
                                "
                            >

                                Email

                            </h3>




                            <p
                                className="
                                    text-sm
                                    sm:text-[15px]
                                    text-gray-600
                                    break-all
                                "
                            >

                                iciset2026@poornima.edu.in

                            </p>



                            <p
                                className="
                                    text-sm
                                    sm:text-[15px]
                                    text-gray-600
                                    mt-2
                                    break-all
                                "
                            >

                                saurabh.shandilya@poornima.edu.in

                            </p>



                        </div>



                    </div>






                    {/* Right */}

                    <div
                        className="
                            group
                            overflow-hidden
                            rounded-2xl
                            sm:rounded-[24px]
                            shadow-xl
                        "
                    >

                        <img
                            src={venueMap}
                            alt="Venue Road Map"
                            className="
                                w-full
                                h-[280px]
                                sm:h-[400px]
                                lg:h-[520px]
                                object-cover
                                transition
                                duration-500
                                group-hover:scale-105
                            "
                        />


                    </div>




                </div>


            </div>


        </section>
    );
};

export default VenueSection;