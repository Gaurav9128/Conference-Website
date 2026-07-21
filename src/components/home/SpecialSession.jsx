import sessionVideo from "../../assets/call.mp4";
import { FileText } from "lucide-react";
import ConferenceBanner from "../layout/ConferenceBanner";
export default function SpecialSession() {
    return (
        <section className="bg-[#f4f6fb] py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* ================= Video ================= */}
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-[400px] object-cover"
                    >
                        <source src={sessionVideo} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* ================= Floating Card ================= */}
                <div className="flex justify-center">
                    <div
                        className="
              relative
              -mt--2
              z-20
              w-full
              max-w-[760px]
              rounded-[24px]
              bg-white
              px-12
              py-8
              text-center
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            "
                    >
                        <h2 className="text-[56px] font-bold text-[#2643A2]">
                            Call for Special Sessions
                        </h2>

                        <p className="mt-3 text-xl text-gray-500">
                            A forum for focused discussions on new topics or innovative
                            applications.
                        </p>

                        <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-[#F5B301]" />
                    </div>
                </div>

                {/* ================= Organization Section ================= */}

                <div className="mt-10">

                    <h2 className="text-center text-4xl font-bold text-[#24439B]">
                        Special Session Organization
                    </h2>

                    <div
                        className="
              mt-14
              rounded-[28px]
              bg-[#EEF1F7]
              border
              border-gray-200
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              px-16
              py-14
            "
                    >
                        <p className="text-[20px] leading-[2.1] text-gray-700">
                            Special Session Organization is highly encouraged. The goal of
                            these special sessions is to provide a forum for focused
                            discussions on new topics or innovative applications of
                            established approaches.
                        </p>

                        <p className="mt-10 text-[20px] leading-[2.1] text-gray-700">
                            A special session could address a particular theme or consist of
                            work done in some international project. Sessions of similar
                            topics may be proposed, if needed, we will schedule them at
                            different slots over the conference period.
                        </p>

                    </div>

                </div>

                {/* ================= Selection of Invited Speakers ================= */}

                <div className="mt-10">

                    <h2 className="text-center text-3xl font-bold text-[#24439B]">
                        Selection of Invited Speakers
                    </h2>

                    <div
                        className="
      mt-14
      max-w-5xl
      mx-auto
      rounded-[20px]
      bg-white
      border
      border-gray-100
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      px-14
      py-14
    "
                    >

                        {/* Item 1 */}

                        <div className="flex items-start gap-6">

                            <div
                                className="
          w-9
          h-9
          rounded-full
          bg-[#EEF2F8]
          text-[#24439B]
          font-bold
          flex
          items-center
          justify-center
          shrink-0
        "
                            >
                                1
                            </div>

                            <p className="text-[20px] leading-[2] text-gray-700">
                                Each special session will consist of a minimum of 10 papers,
                                including invited papers and contribution papers related to
                                the topic.
                            </p>

                        </div>

                        {/* Divider */}

                        <div className="my-10 border-t border-gray-200"></div>

                        {/* Item 2 */}

                        <div className="flex items-start gap-6">

                            <div
                                className="
          w-9
          h-9
          rounded-full
          bg-[#EEF2F8]
          text-[#24439B]
          font-bold
          flex
          items-center
          justify-center
          shrink-0
        "
                            >
                                2
                            </div>

                            <p className="text-[20px] leading-[2] text-gray-700">
                                A person may not present more than one invited paper (contact
                                program chair for questions).
                            </p>

                        </div>

                    </div>

                </div>
                {/* ================= Organizer & Bank Details ================= */}

                <div className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* ================= Organizer Requirements ================= */}

                        <div
                            className="
        rounded-[28px]
        bg-[#EEF1F7]
        border
        border-gray-200
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        p-12
      "
                        >
                            <h2 className="text-[30px] font-semibold text-[#1F2D3D] mb-10">
                                Organizer Requirements
                            </h2>

                            <ul className="space-y-8 text-[20px] leading-[1.9] text-gray-700 list-disc pl-8">
                                <li>
                                    Minimum of 10 papers per organized session.
                                </li>

                                <li>
                                    Session organizers have full authority in soliciting and
                                    accepting papers with permission of the conference chair.
                                </li>

                                <li>
                                    Limited to not more than 3 organizers per session.
                                </li>

                                <li>
                                    Organizer can be designated as a chair or co-chair.
                                </li>
                            </ul>
                        </div>

                        {/* ================= RTGS Details ================= */}

                        <div
                            className="
        rounded-[20px]
        bg-[#EEF1F7]
        border
        border-gray-200
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        p-12
      "
                        >
                            <h2 className="text-[30px] font-semibold text-[#1F2D3D] mb-10">
                                RTGS / Bank Details
                            </h2>

                            <div className="space-y-8 text-[16px] leading-[1.9] text-gray-700">

                                <p>
                                    <span className="font-bold text-gray-900">
                                        Account Favouring:
                                    </span>{" "}
                                    POORNIMA UNIVERSITY PART ONE
                                </p>

                                <p>
                                    <span className="font-bold text-gray-900">
                                        Bank Detail:
                                    </span>{" "}
                                    HDFC Bank Ltd. F-129 RIICO Industrial Area Sitapura, Jaipur
                                </p>

                                <p>
                                    <span className="font-bold text-gray-900">
                                        A/C No.:
                                    </span>{" "}
                                    50200067804063
                                </p>

                                <p>
                                    <span className="font-bold text-gray-900">
                                        IFSC:
                                    </span>{" "}
                                    HDFC0003873
                                </p>

                                <p>
                                    <span className="font-bold text-gray-900">
                                        SWIFT CODE:
                                    </span>{" "}
                                    HDFCINBBXXX
                                </p>

                                <p className="pt-4 text-[16px] text-gray-600">
                                    Please use RTGS / NEFT for fee payment and share the
                                    transaction receipt with the organizing committee.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
                {/* ================= Download Proposal Template ================= */}

                <div className="mt-10">

                    {/* Heading */}

                    <h2 className="text-center text-4xl font-bold text-[#24439B]">
                        Download Proposal Template
                    </h2>

                    <p className="mt-6 text-center text-1xl text-gray-600">
                        Use the official template to prepare and submit your special session proposal.
                    </p>

                    {/* Card */}

                    <div
                        className="
      mt-14
      max-w-4xl
      mx-auto
      rounded-[30px]
      bg-white
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      border
      border-gray-100
      px-12
      py-5
      flex
      flex-col
      items-center
      text-center
    "
                    >

                        {/* Icon */}

                        <div
                            className="
        w-20
        h-20
        rounded-full
        bg-[#EEF2FF]
        flex
        items-center
        justify-center
      "
                        >
                            <FileText
                                size={30}
                                className="text-[#24439B]"
                            />
                        </div>

                        {/* Title */}

                        <h3 className="mt-5 text-[30px] font-semibold text-[#1F2D3D]">
                            Special Session Proposal Template
                        </h3>

                        {/* Subtitle */}

                        <p className="mt-2 text-[22px] text-gray-600">
                            Download the official format for submission
                        </p>

                        {/* Download Button */}

                        <a
                            href="/SpecialSessionProposalTemplate.docx"
                            download
                            className="
        mt-6
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-[#24439B]
        px-10
        py-4
        text-white
        text-xl
        font-semibold
        transition-all
        duration-300
        hover:bg-[#19357f]
        hover:shadow-xl
      "
                        >
                            Download Now
                        </a>

                    </div>
                </div>
                <ConferenceBanner />

            </div>
        </section>
    );
}