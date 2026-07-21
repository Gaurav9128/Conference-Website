import {
    Mail,
    Phone,
    MapPin,
    PhoneCall,
} from "lucide-react";

const ContactSection = () => {
    return (
        <section className="bg-[#eef1f5] py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>

                        <h2 className="text-5xl font-bold text-slate-900 mb-8">
                            Contact Us
                        </h2>

                        <p className="text-gray-600 text-lg leading-9 mb-10">
                            For inquiries regarding paper submissions, registrations,
                            partnerships, or sponsorship opportunities, please contact the
                            organizing committee. We are committed to providing timely
                            assistance and detailed information.
                        </p>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <Mail className="text-blue-600 mt-1" size={22} />
                                <div>
                                    <h4 className="font-semibold text-lg">Email</h4>
                                    <p className="text-gray-600">
                                        iciset2026@poornima.edu.in
                                    </p>
                                    <p className="text-gray-600">
                                        saurabh.shandilya@poornima.edu.in
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="text-blue-600" size={22} />
                                <div>
                                    <h4 className="font-semibold text-lg">Phone</h4>
                                    <p className="text-gray-600">
                                        +91-9887587811
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-blue-600 mt-1" size={22} />
                                <div>
                                    <h4 className="font-semibold text-lg">Address</h4>
                                    <p className="text-gray-600">
                                        Poornima University,
                                        Jaipur, Rajasthan, India
                                    </p>
                                </div>
                            </div>

                        </div>

                        <button className="mt-10 flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white px-8 py-4 rounded-xl shadow-lg">
                            <PhoneCall size={20} />
                            Contact Us
                        </button>

                    </div>

                    {/* Right Side Map */}

                    <div>
                        <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200">

                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.894829584606!2d75.87444327573262!3d26.779622176726754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9d5c3d68749%3A0xa227c3f0db21d4fc!2sPoornima%20University!5e0!3m2!1sen!2sin!4v1784519620829!5m2!1sen!2sin"
                                className="w-full h-[430px] border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;