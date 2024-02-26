"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdCurrencyBitcoin } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import NavbarDropDown from "./NavbarDropDown";
import BtcDropDown from "./BtcDropDown";
import SearchBarSubMenu from "./SearchBarSubMenu";
import MobileSearchBar from "./MobileSearchBar";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [openbtc, setbtc] = useState(false);
  const [opensearch, setsearch] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  return (
    <nav className="bg-black text-white border-b-[0.5px] overflow-hidden ">
      <ul className=" flex justify-center items-center">
        <div className=" flex items-center">
          <Link href="/">
            <li className="  xl:pr-14  md:ml-0">
              <Image
                src="/logo.svg"
                width={250}
                height={1000}
                className="xl:w-[250px] md:w-[180px]"
              />
            </li>
          </Link>
          <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
        </div>

        {/* Search */}
        <div className=" md:flex items-center xl:px-8 lg:px-1 hidden   ">
          <div className="  xl:pr-14 justify-center flex xl:w-[550px] lg:w-[450px] md:w-[350px] ">
            <div className="grid col-span-2 xl:w-[450px] lg:w-[350px] md:w-[250px] rounded-x-md bg-white">
              <div className=" flex items-center  py-4 pr-2 xl:pl-10 text-white md:text-[13px] lg:text-[18px]">
                <input
                  placeholder="Try Black Porsche 911"
                  className="w-[90%] outline-none rounded-md px-2 h-[100%] text-black"
                />

                <BsSearch
                  size={23}
                  className=" inline text-black cursor-pointer"
                  onClick={() => {
                    setsearch(!opensearch);
                  }}
                />
              </div>
              {/* // search bar sub manu  */}
              <SearchBarSubMenu search={opensearch} />
            </div>
          </div>

          <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
        </div>

        {/* mobile Search */}
        <div className=" flex md:hidden items-center ">
          <div className="text-white  items-center lg:px-4 xl:px-6 ">
            <div className="flex justify-center items-center">
              <BsSearch size={23} className=" inline text-black" />
            </div>
          </div>

          <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
        </div>
        {/* mobile part 2  */}
        <div
          className=" flex md:hidden items-center "
          onClick={() => setMobileSearch(!mobileSearch)}
        >
          <div className="text-white  items-center ml-4">
            <div className="flex justify-center items-center">
              <BsSearch size={23} className=" inline text-white" />
              <MobileSearchBar
                myaction={mobileSearch}
                setaction={setMobileSearch}
              />
            </div>
          </div>
        </div>
        {/* btc */}
        <div className=" md:flex items-center hidden">
          <div className=" xl:px-3 ">
            <div
              className="text-white  items-center lg:px-4 xl:px-6 cursor-pointer  "
              onClick={() => setbtc(!openbtc)}
            >
              <div className="flex justify-center items-center">
                <MdCurrencyBitcoin className="text-[20px]" />

                <p>BTC</p>
                <RiArrowDownSFill className="text-[20px]" />
              </div>
              {/* // BtcDropDown */}
              <BtcDropDown tg={openbtc} />
            </div>
          </div>

          <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
        </div>
        {/* Menu */}
        <div className=" flex items-center">
          <div
            className=" xl:pr-4 lg:px-2 xl:px-3 md:px-1 px-3  cursor-pointer "
            onClick={() => {
              setopen(!open);
            }}
          >
            <div className="text-white flex items-center gap-4">
              <GiHamburgerMenu className="text-[20px]" />
              <p>Menu</p>
            </div>
          </div>

          <NavbarDropDown toggle={open} setToggle={setopen} />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

// BackUp

<nav className="bg-black text-white border-b-[0.5px] ">
  <ul className=" flex justify-center items-center">
    <div className=" flex items-center">
      <Link href="/">
        <li className="  xl:pr-14 ml-4 md:ml-0">
          <Image
            src="/logo.svg"
            width={250}
            height={1000}
            className="xl:w-[250px] md:w-[180px]"
          />
        </li>
      </Link>
      <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
    </div>

    {/* Search */}
    <div className=" md:flex items-center xl:px-8 lg:px-1 hidden  ">
      <li className="  xl:pr-14 justify-center flex xl:w-[550px] lg:w-[450px] md:w-[350px] ">
        <div className="grid col-span-2 xl:w-[450px] lg:w-[350px] md:w-[250px] rounded-md bg-white">
          <div className=" flex items-center  py-4 pr-2 xl:pl-10 text-white md:text-[13px] lg:text-[18px]">
            <input
              placeholder="Try Black Porsche 911"
              className="w-[90%] outline-none rounded-md px-2 h-[100%] text-black"
            />

            <BsSearch size={23} className=" inline text-black" />
          </div>
        </div>
      </li>

      <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
    </div>

    {/* mobile Search */}
    <div className=" flex md:hidden items-center ">
      <Link href="/">
        <li className=" xl:px-3 ">
          <div className="text-white  items-center lg:px-4 xl:px-6 px-1">
            <div className="flex justify-center items-center">
              <BsSearch size={23} className=" inline text-black" />
            </div>
          </div>
        </li>
      </Link>
      <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
    </div>
    {/* mobile part 2  */}
    <div className=" flex md:hidden items-center ">
      <Link href="/">
        <li className=" xl:px-3 ">
          <div className="text-white  items-center ml-4">
            <div className="flex justify-center items-center">
              <BsSearch size={23} className=" inline text-white" />
            </div>
          </div>
        </li>
      </Link>
    </div>
    {/* btc */}
    <div className=" md:flex items-center hidden">
      <Link href="/">
        <li className=" xl:px-3 ">
          <div className="text-white  items-center lg:px-4 xl:px-6">
            <div className="flex justify-center items-center">
              <MdCurrencyBitcoin className="text-[20px]" />

              <p>BTC</p>
              <RiArrowDownSFill className="text-[20px]" />
            </div>
          </div>
        </li>
      </Link>
      <div className=" w-[0.5px] opacity-30 h-20 bg-white"></div>
    </div>
    {/* Menu */}
    <div className=" flex items-center">
      <Link href="/">
        <div className=" xl:pr-4 lg:px-2 xl:px-3 md:px-1 px-3  ">
          <div className="text-white flex items-center gap-4">
            <GiHamburgerMenu className="text-[20px]" />
            <p>Menu</p>
          </div>
        </div>
      </Link>
    </div>
  </ul>
</nav>;
