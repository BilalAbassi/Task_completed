import React from "react";

import Link from "next/link";
import Container from "../Container";

const Card2 = ({ imgData }) => {
  return (
    <div className="">
      {/* Main Container */}

      {/* Card 1 */}
      <div className="relative overflow-hidden rounded-md py-1 shadow-lg">
        {/* main image  */}
        <img
          className=" scale-110 hover:scale-125 transition ease-in duration-700 size-full"
          src={imgData}
          alt="
            "
        />
        {/* wishlist button  */}
        <button className="absolute end-4 top-4 z-10 rounded-full bg-gray-200 p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <span className="whitespace-nowrap  bg-red-600 px-4 py-2 rounded-md text-xs font-bold text-white absolute start-4 top-4 ">
          {" "}
          New{" "}
        </span>
        {/* information div  */}

        <div className="absolute bottom-0 text-white flex items-center justify-between w-full px-4 h-[80px]">
          {/* first div */}
          <div>
            <h4>PORSCHE</h4>
            <p>718</p>
          </div>
          {/* Second Div */}
          <div className="flex items-center text-[11.5px] gap-2">
            <div className="border-r pr-4">B2.401</div>
            <div>E120000</div>
          </div>
        </div>
        {/* Shade div  */}
        <div className="h-[80px] opacity-25 bg-white absolute bottom-0 w-full "></div>
      </div>
    </div>
  );
};

export default Card2;
