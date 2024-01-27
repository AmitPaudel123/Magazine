import React from "react";
import Image from "next/image";
import { GrMail } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

import mapImage from "/public/map.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
const contactPage = () => {
  return (
    <div className=" bg-slate-200 rounded-lg mx-5 p-6 lg:mx-10 xl:mx-20 my-10 flex flex-col lg:flex-row gap-10">
      {/* content 1 */}
      <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[35%]">
        <div className=" text-4xl font-semibold my-2">
          General costumer care & technical support
        </div>
        <div className=" text-justify my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quo
          voluptate nostrum dolore corrupti quaerat, a tenetur maxime atque eius
          iure beatae quasi ipsum qui mollitia similique recusandae consequuntur
          eveniet! Iusto debitis ex facere est praesentium, rerum minus eos
          repellat quasi quis ad! Impedit, laboriosam libero! Iure vero facere,
          a molestias soluta sequi quasi eaque temporibus, nulla eius, error
        </div>
        <Image
          src={mapImage}
          alt="image"
          objectFit="cover"
          objectPosition="center center"        
            width={450}
          className=" rounded-lg"
        />
      </div>

      {/* content 2 */}
      <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[60%]">
        <form action="">
          <div className=" grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-6">
            <input
              type="text"
              maxLength={25}
              placeholder="Enter name"
              className=" px-3 py-4 rounded-md"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-3 py-4 rounded-md"
            />
            <input
              type="number"
              placeholder="Enter your Phone"
              className=" px-3 py-4 rounded-md"
            />
            <input
              type="text"
              maxLength={50}
              placeholder="Subject"
              className=" px-3 py-4 rounded-md"
            />
          </div>

          <div className=" grid my-6">
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="Message"
              className=" p-3 rounded-lg"
            ></textarea>
          </div>

          <button className=" bg-slate-300 border-blue-600 border-[0.6px] active:ring-4 rounded-md px-2 py-3 font-semibold hover:text-blue-600 w-full">
            Submit Now
          </button>
        </form>

        <div className=" grid lg:grid-rows-2 lg:grid-cols-2 grid-rows-1 grid-cols-1 gap-6 mt-10">
          <div className=" px-5 py-4 rounded-lg bg-slate-100 ">
            <div className="flex items-start gap-3">
              <IoLocation className=" text-blue-600 w-8 h-8" />
              <div className=" flex flex-col gap-2">
                <div className=" text-xl font-semibold">Address</div>
                <div className=" text-lg text-slate-500">
                  Shantinagar, Baneshwor
                </div>
              </div>
            </div>
          </div>

          <div className=" px-5 py-4 rounded-lg bg-slate-100 ">
            <div className="flex items-start gap-3">
              <GrMail className=" text-blue-600 w-8 h-8" />
              <div className=" flex flex-col gap-3">
                <div className=" text-xl font-semibold">Mail Us</div>
                <div className=" text-lg text-slate-500">
                  newesers123@gmail.com{" "}
                </div>
              </div>
            </div>
          </div>

          <div className=" px-5 py-4 rounded-lg bg-slate-100 flex items-start gap-3">
            <div className="flex items-start gap-3">
              <FaPhone className=" text-blue-600 w-8 h-8" />

              <div className=" flex flex-col gap-3">
                <div className=" text-xl font-semibold">Telephone</div>
                <div className=" text-lg text-slate-500">046-530-616 </div>
              </div>
            </div>
          </div>

          <div className=" px-5 py-4 rounded-lg bg-slate-100">
            <div className="flex items-start gap-3">
              <FaShareAlt className=" text-blue-600 w-8 h-8" />

              <div className=" flex flex-col gap-3">
                <div className=" text-xl font-semibold">Share</div>
                <div className=" text-lg text-slate-500">
                  <div className=" flex gap-3 items-center">
                    <FaFacebookF className=" cursor-pointer" />
                    <FaYoutube className=" cursor-pointer" />
                    <FaTwitter className=" cursor-pointer" />
                    <FaLinkedinIn className=" cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
