"use client";
// Navbar.js

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//importing icons
import { BsLightningFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

//importing images for navbar
import marqueeImg from "../pictures/marquee.jpg";
import weatherImg from "../pictures/weather.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleMobileNav = () => {
    setShowNav(!showNav);
  };

  const [showCategory, setShowCategory] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="">
      <div className=" hidden bg-black text-white px-10 py-3 md:flex items-center justify-between">
        <div className=" flex gap-2 items-center w-fit">
          <div className=" bg-blue-600 rounded-full p-3 w-fit">
            {" "}
            <BsLightningFill className=" text-white rounded-full" />
          </div>
          <div className=" text-lg border-r-2 border-white pr-2">Trending</div>
        </div>
        <div className=" ">
          <marquee behavior="scroll" direction="right">
            <div className="flex items-center gap-2">
              <Image
                src={marqueeImg}
                width={25}
                className=" rounded-full border-2 border-blue-600"
              />
              <div>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, consectetur.
              </div>
            </div>
          </marquee>
        </div>
        <div className=" hidden lg:flex items-center gap-2">
          <div className=" flex items-center gap-2">
            <BsCalendar2DateFill />{" "}
            <div className=" text-slate-600 pr-2 border-r-2 border-slate-600">
              {" "}
              Sunday, Jan 12, 2024
            </div>
          </div>
          <div className=" flex items-center gap-2 w-fit">
            <div>Follow us:</div>
            <FaFacebookF className=" navbarlogo" />
            <FaInstagram className=" navbarlogo" />
            <FaLinkedin className="  navbarlogo" />
            <FaYoutube className="   navbarlogo" />
            <FaXTwitter className="  navbarlogo" />
          </div>
        </div>
      </div>

      {/* navbar section */}
      <nav className="bg-slate-100 text-slate-600 px-5 lg:px-20 py-6">
        <div className=" flex items-center justify-between w-full ">
          {/* Logo */}
          <div className="flex items-center">
            <div>
              <p className=" text-4xl font-semibold text-blue-600">Newsers</p>
            </div>
          </div>

          {/* menu button */}
          <div
            className=" py-2 px-3 border-2 rounded-lg border-slate-700 active:ring-4 xl:hidden ml-auto"
            onClick={handleMobileNav}
          >
            <GiHamburgerMenu
              className=" text-2xl text-blue-600"
              onClick={handleMobileNav}
            />
          </div>
          {/* Pages */}
          <div className="hidden xl:flex flex-grow justify-center space-x-8 text-lg">
            <Link className=" hover:text-blue-500" href="/">
              Home{" "}
            </Link>
            <Link className=" hover:text-blue-500" href="detail">
              Detail Page{" "}
            </Link>
            <Link className=" hover:text-blue-500" href="notFound">
              404 Page{" "}
            </Link>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
              onClick={() => {
                !showCategory ? setShowCategory(true) : setShowCategory(false);
              }}
            >
              <div className=" hover:text-blue-500 group">Category</div>{" "}
              <FaChevronDown className=" w-3 group-hover:text-blue-600" />
              {/* category list */}
              {showCategory && (
                <div className=" absolute bg-slate-100 text-slate-700 rounded-md shadow-sm shadow-black top-[8rem]">
                  <p className=" hover:bg-slate-700 hover:text-white text-sm px-6 py-2 rounded-t-md">
                    Category 1
                  </p>
                  <p className=" hover:bg-slate-700 hover:text-white text-sm px-6 py-2 ">
                    Category 2
                  </p>
                  <p className=" hover:bg-slate-700 hover:text-white text-sm px-6 py-2 ">
                    Category 3
                  </p>
                  <p className=" hover:bg-slate-700 hover:text-white text-sm px-6 py-2 rounded-b-md">
                    Category 4
                  </p>
                </div>
              )}
            </div>
            <Link className=" hover:text-blue-500" href="contact">
              Contact Us
            </Link>
          </div>

          {/* Location and Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div>
              <div className=" hidden xl:flex items-center gap-4 ">
                {" "}
                <div>
                  <Image src={weatherImg} alt="image not found" height={40} />
                </div>
                <div className=" text-xl font-semibold">
                  31<sup>o</sup>C
                </div>
                <div>
                  {" "}
                  Kathmandu <br />
                  Sun. 12 Sep 2024
                </div>
                <div
                  className=" p-3 text-blue-600 border-2 rounded-full border-blue-600 cursor-pointer active:ring-2"
                  onClick={() =>
                    !showSearch ? setShowSearch(true) : setShowSearch(false)
                  }
                >
                  <IoSearch className=" text-xl font-semibold " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pages and Search (Displayed below the navbar for smaller screens) */}
        {showNav && (
          <>
            <hr className=" my-2" />
            <div className=" xl:hidden py-2  bg-inherit">
              <div className="flex flex-col space-y-4">
                <Link
                  className=" hover:text-blue-500"
                  href="/"
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  Home{" "}
                </Link>
                <Link
                  className=" hover:text-blue-500"
                  href="detail"
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  Detail Page{" "}
                </Link>
                <Link
                  className=" hover:text-blue-500"
                  href="notFound"
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  404 Page{" "}
                </Link>
                <div
                  className=" hover:text-blue-600 active:text-blue-600"
                  onClick={() => {
                    !showCategory
                      ? setShowCategory(true)
                      : setShowCategory(false);
                  }}
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    {" "}
                    <div className=" hover:text-blue-500">Category</div>{" "}
                    <FaChevronDown className=" w-3 hover:text-blue-600" />
                  </div>

                  {showCategory && (
                    <div className=" mr-auto">
                      <p
                        className=" text-slate-600 hover:bg-slate-700 hover:text-white text-sm px-6 py-2 rounded-t-md"
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        Category 1
                      </p>
                      <p
                        className="text-slate-600 hover:bg-slate-700 hover:text-white text-sm px-6 py-2 "
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        Category 2
                      </p>
                      <p
                        className="text-slate-600 hover:bg-slate-700 hover:text-white text-sm px-6 py-2 "
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        Category 3
                      </p>
                      <p
                        className="text-slate-600 hover:bg-slate-700 hover:text-white text-sm px-6 py-2 rounded-b-md"
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        Category 4
                      </p>
                    </div>
                  )}
                </div>
                <Link
                  className=" hover:text-blue-500"
                  href="contact"
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  Contact Us
                </Link>
              </div>

              {/* search section */}
              <hr className=" my-2" />
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <div>
                  <div className="flex items-center gap-4 ">
                    {" "}
                    <div>
                      <Image
                        src={weatherImg}
                        alt="image not found"
                        height={40}
                      />
                    </div>
                    <div className=" text-xl font-semibold">
                      31<sup>o</sup>C
                    </div>
                    <div>
                      {" "}
                      Kathmandu <br />
                      Sun. 12 Sep 2024
                    </div>
                    <div
                      className=" p-3 text-blue-600 border-2 rounded-full border-blue-600 cursor-pointer active:ring-2"
                      onClick={() => {
                        setShowSearch(true);
                      }}
                    >
                      <IoSearch className=" text-xl font-semibold " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed top-0 left-0 w-full h-full z-[9999]">
          <div className="bg-silver-transparent p-8 h-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-xl font-semibold">Search by keyword</span>
              <button className="text-xl" onClick={() => setShowSearch(false)}>
                <IoClose />
              </button>
            </div>
            <div className="mt-4">
              <div className="flex justify-center mt-[40%] xl:mt-[20%] items-center">
                <input
                  type="text"
                  id="searchInput"
                  className="border border-gray-300 py-4 px-4 w-3/4 xl:w-2/4 rounded-l-md ring-slate-400"
                  placeholder="Enter keyword"
                />
                <button
                  className="px-4 py-5 bg-blue-600 text-white rounded-r-md ring-slate-400"
                  // onClick={() => handleSearch()}
                >
                  <IoSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
