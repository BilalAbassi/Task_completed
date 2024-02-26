import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 space-y-2">
        <div className="mt-16 border-b border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 pb-20">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <Image
              src={"/logo-ftr.png"}
              height={1000}
              width={1000}
              className="w-[80px] h-[40px] cursor-pointer"
            />
          </ul>
          <ul className="flex flex-wrap justify-center gap-4  lg:justify-end uppercase mt-4 md:mt-0 ">
            <li className="hover:text-gray-600 text-[15px]">LISTINGS</li>
            <li className="hover:text-red-600 text-[15px]">How It Works</li>
            <li className="hover:text-red-600 text-[15px]">Blog</li>
            <li className="hover:text-red-600 text-[15px]">Contact</li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Link
                href="#"
                className=" transition hover:text-gray-300 duration-200"
              >
                <FaFacebookF className="text-[18px]" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" transition hover:text-gray-300 duration-200 "
              >
                <FaInstagram className="text-[20px]" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" transition  hover:text-gray-300 duration-200 "
              >
                <FaXTwitter className="text-[20px]" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" transition  hover:text-gray-300 duration-200"
              >
                <FaLinkedin className="text-[20px]" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" transition  hover:text-gray-300 duration-200"
              >
                <FaWhatsapp className="text-[20px]" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-white pt-8 ">
          <div className="sm:flex  md:justify-between">
            <p className="text-[14px] text-center md:text-left hover:text-red-600 duration-200">
              Copyright 2023. All right reserved.
            </p>

            <ul className="mt-8 flex flex-wrap md:justify-start justify-center gap-4 text-[14px] sm:mt-0 lg:justify-end">
              <li className="hover:text-red-600 duration-200">
                Privacy Policy
              </li>

              <li className="hover:text-red-600 duration-200">
                Terms of Service
              </li>

              <li className="hover:text-red-600 duration-200">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      {/*
  Second Part
*/}
    </footer>
  );
};

export default Footer;
