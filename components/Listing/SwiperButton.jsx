"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className=" border mb-10 absolute top-[-100px] w-full z-10 ">
      <div className=" md:pl-6 pl-2 flex items-center justify-between">
        <h4 className="md:text-[25px] md:pl-4">Popular listings</h4>

        <div>
          <button
            className="border  h-[90px] md:px-10 px-6"
            onClick={() => swiper.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="border  h-[90px] md:px-10 px-6"
            onClick={() => swiper.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperButton;

// onClick={() => swiper.slideNext()}
