import React from "react";
import "./conferenceTracks.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

import tracks from "./tracksData";
import TrackCard from "./TrackCard";

const ConferenceTracks = () => {
  return (
    <section className="py-24 bg-[#F5F7FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-900">
            Conference Tracks
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Explore the major research areas of ICRAIDT 2027 that encourage
            interdisciplinary collaboration and showcase the latest
            advancements in International Conference on Responsible Artificial
            Intelligence and Digital Trust.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-20">

          {/* Left Button */}
          <button className="track-prev">
            <HiArrowLeft size={22} />
          </button>

          {/* Right Button */}
          <button className="track-next">
            <HiArrowRight size={22} />
          </button>

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
              EffectCoverflow,
            ]}

            className="conferenceSwiper"

            effect="coverflow"

            centeredSlides={true}
            loop={true}
            grabCursor={true}

            speed={900}

            navigation={{
              prevEl: ".track-prev",
              nextEl: ".track-next",
            }}

            pagination={{
              clickable: true,
            }}

            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 1,
              scale: 0.88,
              slideShadows: false,
            }}

            slidesPerView={1}
            spaceBetween={30}

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 1.3,
                spaceBetween: 25,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 2.6,
                spaceBetween: 35,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {tracks.map((track) => (
              <SwiperSlide key={track.id}>
                <TrackCard track={track} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;