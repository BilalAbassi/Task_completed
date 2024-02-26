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
      id: 1,
      img: "/popular-pic1.jpg",
    },
    {
      id: 2,
      img: "/popular-pic2.jpg",
    },
    {
      id: 3,
      img: "/popular-pic3.jpg",
    },
    {
      id: 4,
      img: "/popular-pic1.jpg",
    },
    {
      id: 5,
      img: "/popular-pic2.jpg",
    },
    {
      id: 6,
      img: "/popular-pic1.jpg",
    },
    {
      id: 7,
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

          {data.map((item, key) => (
            <SwiperSlide key={item.id}>
              <Card2 imgData={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Listing;
