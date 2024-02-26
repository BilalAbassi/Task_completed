import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

const MobileSearchBar = ({ myaction, setaction }) => {
  return (
    <motion.div
      className="absolute bg-[#313131] top-0 w-[100vw] min-h-[150px] left-0 z-50 opacity-95 "
      animate={{ y: myaction ? "0px" : "-800px", opacity: myaction ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-end pb-2 pt-4 px-6  ">
        <FaWindowClose onClick={() => setaction(!myaction)} />
      </div>

      <div className="flex justify-center font-[400] pt-6">
        <div className="border-b flex items-center pb-3 pt-6 ">
          <input
            placeholder="Start your search"
            className="bg-transparent text-white placeholder:text-white outline-none  text-[18px] "
          />
          <IoIosSearch className="text-[25px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSearchBar;
