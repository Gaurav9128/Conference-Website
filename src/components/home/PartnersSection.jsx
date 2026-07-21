import React from "react";

import rcat from "../../assets/partners/rcat.png";
import iks from "../../assets/partners/iks.png";
import acm from "../../assets/partners/acm.png";
import poornima from "../../assets/partners/poornima.png";

const partners = [
  {
    image: rcat,
    title: "RCAT",
    desc: "Council for Advanced Training, innovation, skill development and industry-oriented research initiatives.",
  },
  {
    image: iks,
    title: "IKS",
    desc: "Indian Knowledge Systems (IKS) promotes interdisciplinary research rooted in India's traditional knowledge.",
  },
  {
    image: acm,
    title: "ACM PU, Jaipur",
    desc: "The ACM Student Chapter at Poornima University, Jaipur focuses on innovation and technical excellence.",
  },
  {
    image: poornima,
    title: "Poornima University",
    desc: "Poornima University supports academic excellence through research and innovation.",
  },
];

// Duplicate the array twice
const marqueePartners = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="bg-[#F4F6FA] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          Our Partners
        </h2>

        <p className="max-w-4xl mx-auto mt-8 text-center text-gray-600 text-lg leading-9">
          ICISET-2026 is supported by distinguished academic institutions,
          research organizations, and professional bodies committed to
          advancing innovation in intelligent computing and future technologies.
        </p>

        {/* Marquee */}
        <div className="relative mt-16 overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F4F6FA] to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F4F6FA] to-transparent" />

          <div className="marquee">

            <div className="marquee-content">

              {marqueePartners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-card"
                >
                  <div
                    className="
                    bg-white
                    rounded-[28px]
                    shadow-md
                    h-[420px]
                    p-8
                    flex
                    flex-col
                    items-center
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-xl"
                  >
                    <img
                      src={partner.image}
                      alt={partner.title}
                      className="h-24 object-contain"
                    />

                    <h3 className="text-3xl font-semibold mt-6 text-slate-800">
                      {partner.title}
                    </h3>

                    <p className="mt-6 text-gray-600 leading-8">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="flex justify-center mt-14">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl transition">
            More Partners
          </button>
        </div>

      </div>

    </section>
  );
}