"use client";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
const NavbarDropDown = ({ toggle, setToggle }) => {
  const t = toggle;
  return (
    <motion.div
      className={`md:fixed absolute bg-black  top-[3px] w-[280px] z-50 right-0 2xl:w-[40%] overflow-hidden`}
      initial={{ display: "none" }}
      animate={{
        x: t ? "0px" : "1000%",
      }}
      transition={{ duration: 1 }}
    >
      <div
        className="flex items-center justify-end p-6 cursor-pointer  "
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <IoIosClose />
        <span>Menu</span>
      </div>
      <ul className="border-l mt-[4px]  uppercase">
        <li className="p-[18px] border-[0.5px] border-gray-300 hover:text-red-600 duration-200 cursor-pointer">
          View All Cars
        </li>
        <li className="p-[18px] border-[0.5px] border-gray-300 hover:text-red-600 duration-200 cursor-pointer">
          Explore used cars
        </li>
        <li className="p-[18px] border-[0.5px] border-gray-300 hover:text-red-600 duration-200 cursor-pointer">
          Dealerships
        </li>
        <li className="p-[18px] border-[0.5px] border-gray-300 hover:text-red-600 duration-200 cursor-pointer">
          How it works
        </li>
        <li className="p-[18px] border-[0.5px] border-gray-300 hover:text-red-600 duration-200 cursor-pointer">
          About us
        </li>
        <li className="p-[18px] border-[0.5px] border-gray-300 hover:text-red-600 duration-200 cursor-pointer">
          Blog
        </li>
        <li className="p-[15px] border-[0.5px] bg-red-600 text-center text-bold">
          Login
        </li>
      </ul>
    </motion.div>
  );
};

export default NavbarDropDown;
