"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SearchBarSubMenu = ({ search }) => {
  return (
    <motion.div
      className="xl:w-[450px] lg:w-[350px] md:w-[250px] absolute hidden md:block pb-10 z-50  top-[68px] bg-white "
      animate={{ y: search ? "0px" : "-800px", opacity: search ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="text-black flex mt-6 justify-center">
          <div>
            <div className="border-b-2  xl:w-[100px] lg:w-[70px]  text-white mt-[2px]">
              s
            </div>
          </div>
          <h4 className="text-black p-4 font-[200] xl:text-[14px] md:text-[10px] lg:text-[12px]  ">
            OR SELECT a CATEGORY
          </h4>
          <div>
            <div className="border-b-2  xl:w-[100px] lg:w-[70px]  text-white mt-[2px]">
              s
            </div>
          </div>
        </div>
        {/* catogroy grid */}
        <ul className="grid xl:grid-cols-3 md:grid-cols-2  gap-4 px-6">
          <li className="lg:size-28 bg-gray-300 p-4 lg:p-0 text-black grid grid-cols-1  justify-items-center place-content-center ">
            <Image src="/union.png" width={40} height={40} />
            <h6>Exclusive</h6>
          </li>
          <li className="lg:size-28 bg-gray-300 p-4 lg:p-0 text-black grid grid-cols-1  justify-items-center place-content-center ">
            <Image src="/stars.png" width={40} height={40} />
            <h6>Popular</h6>
          </li>{" "}
          <li className="lg:size-28 bg-gray-300 p-4 lg:p-0 text-black grid grid-cols-1  justify-items-center place-content-center ">
            <Image src="/search_hands_free.png" width={40} height={40} />
            <h6>Supercar</h6>
          </li>{" "}
          <li className="lg:size-28 bg-gray-300 p-4 lg:p-0 text-black grid grid-cols-1  justify-items-center place-content-center ">
            <Image src="/payments.png" width={40} height={40} />
            <h6>Exclusive</h6>
          </li>{" "}
          <li className="lg:size-28 bg-gray-300 p-4 lg:p-0 text-black grid grid-cols-1  justify-items-center place-content-center ">
            <Image src="/car_tag.png" width={40} height={40} />
            <h6>Used cars</h6>
          </li>
        </ul>

        {/* most view  */}
        <div className="text-black flex mt-6 justify-center">
          <div>
            <div className="border-b-2  w-[100px]  text-white mt-[2px]">s</div>
          </div>
          <h4 className="text-black p-4 font-[200] text-[14px] uppercase  ">
            Most Viewed
          </h4>
          <div>
            <div className="border-b-2  w-[100px]  text-white mt-[2px]">s</div>
          </div>
        </div>
      </div>
      {/* Select Catogory  */}
      <ul className="lg:px-8 px-3 grid md:grid-cols-3 ">
        <li className="object-contain">
          <Image
            src={"/most-search-car1.jpg"}
            width={1000}
            height={1000}
            className=" xl:w-[100px] x:h-[160px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[150px] object-cover rounded-md"
          />
          <h5 className="text-black xl:text-[15px] md:text-[10px] lg:text-[13px]">
            PORSCHE 718
          </h5>
          <p className="text-red-600 xl:text-[15px] md:text-[10px] lg:text-[12px]">
            2.401 BTC
          </p>
          <p className="text-red-600 xl:text-[15px] md:text-[10px] lg:text-[12px]">
            £120,000
          </p>
        </li>
        <li className="object-contain">
          <Image
            src={"/most-search-car1.jpg"}
            width={1000}
            height={1000}
            className=" xl:w-[100px] x:h-[160px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[150px] object-cover rounded-md"
          />
          <h5 className="text-black xl:text-[15px] md:text-[10px] lg:text-[13px]">
            PORSCHE 718
          </h5>
          <p className="text-red-600 xl:text-[15px] md:text-[10px] lg:text-[12px]">
            2.401 BTC
          </p>
          <p className="text-red-600 xl:text-[15px] md:text-[10px] lg:text-[12px]">
            £120,000
          </p>
        </li>
        <li className="object-contain">
          <Image
            src={"/most-search-car1.jpg"}
            width={1000}
            height={1000}
            className=" xl:w-[100px] x:h-[160px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[150px] object-cover rounded-md"
          />
          <h5 className="text-black xl:text-[15px] md:text-[10px] lg:text-[13px]">
            PORSCHE 718
          </h5>
          <p className="text-red-600 xl:text-[15px] md:text-[10px] lg:text-[12px]">
            2.401 BTC
          </p>
          <p className="text-red-600 xl:text-[15px] md:text-[10px] lg:text-[12px]">
            £120,000
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default SearchBarSubMenu;
