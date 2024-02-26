"use client";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const BtcDropDown = ({ tg }) => {
  const gg = tg;

  return (
    <motion.div
      className={`md:fixed absolute bg-black  top-[1px] w-[290px] 2xl:w-[40%] z-50 right-0  `}
      initial={{ display: "none" }}
      animate={{ x: gg ? "0px" : "1000%" }}
      transition={{ duration: gg ? 0.5 : 2 }}
    >
      <div className="flex items-center justify-end cursor-pointer p-6  ">
        <IoIosClose className="text-[20px]" />
      </div>

      <ul className="border-l mt-[11px]">
        <li className="p-[18px] border-[0.5px] border-gray-300">BTC-1</li>
        <li className="p-[18px] border-[0.5px] border-gray-300">BTC-1</li>
      </ul>
    </motion.div>
  );
};

export default BtcDropDown;
