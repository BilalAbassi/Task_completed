import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "../public/landingBg.png";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-[url('../public/landingBg.png')] h-[800px] bg-no-repeat bg-contain font-[200] bg-[#000000] text-white flex justify-center items-center">
      <div className="text-center max-w-[600px] md:space-y-4 space-y-2">
        <p className="mx-auto  px-1 ">THE CAR COMMUNITY FOR THE CRYPTO ELITE</p>
        <h2 className="md:text-7xl text-3xl  font-[400] font-[Lora]">
          Discover your next Luxury Car
        </h2>

        <div className="flex justify-center font-[400] pt-6">
          <div className="border-b flex items-center pb-3 ">
            <input
              placeholder="Start your search"
              className="bg-transparent text-white placeholder:text-white outline-none  text-[18px] "
            />
            <IoIosSearch className="text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
<div className="text-center">
  <p className="mx-auto max-w-sm ">
    THE CAR COMMUNITY FOR THE CRYPTO ELITE
  </p>
  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
    Discover your next Luxury Car
  </h2>

  <input placeholder="Searchbar" />
</div>
</div> */
}
