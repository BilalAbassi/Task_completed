"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { useSwiper } from "swiper/react";

import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "./SwiperButton";
import Card2 from "./Card2";
// import { SwiperNavButtons } from "./components/SwiperNavButton";

const Listing = () => {
  const data = [
    {
      img: "/popular-pic1.jpg",
    },
    {
      img: "/popular-pic2.jpg",
    },
    {
      img: "/popular-pic3.jpg",
    },
    {
      img: "/popular-pic1.jpg",
    },
    {
      img: "/popular-pic2.jpg",
    },
    {
      img: "/popular-pic1.jpg",
    },
    {
      img: "/popular-pic2.jpg",
    },
  ];

  return (
    <div className="relative py-10 bg-black">
      <div className="  text-white bg-black ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView="2.5"
          loopPreventsSliding={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },

            1920: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          className="sample-slider"
        >
          <SwiperButton />

          {data.map((item) => (
            <SwiperSlide>
              <Card2 imgData={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Listing;
