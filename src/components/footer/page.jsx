import React from "react";
import Image from "next/image";
import footer1 from "../pictures/footer-1.jpg";
import footer2 from "../pictures/footer-2.jpg";
import footer3 from "../pictures/footer-3.jpg";
import footer4 from "../pictures/footer-4.jpg";
import footer5 from "../pictures/footer-5.jpg";
import footer6 from "../pictures/footer-6.jpg";

// importing icons
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className=" bg-slate-950 text-white py-4 px-5 md:px-20 font-sans ">
        <div className=" flex flex-col md:flex-row gap-5 md:items-center justify-start md:justify-between  ">
          <div className="text-4xl font-semibold">Newsers</div>
          <div className="w-full lg:w-[70%] md:ml-10">
            <input
              type="email"
              placeholder="example@123gmail.com"
              className=" py-4 px-5 rounded-l-full w-[70%] lg:w-[70%] text-black"
            />
            <button className=" text-white bg-blue-600 py-4 px-2 md:px-4 ml[-1rem] rounded-r-full font-semibold">
              Subscribe{" "}
            </button>
          </div>
        </div>
        <hr className=" my-4 bg-slate-700" />

        <div className=" flex flex-col xl:flex-row justify-between ">
          <div className=" flex lg:flex-row flex-col justify-between xl:w-[45%] gap-10">
            <div>
              <p className=" text-2xl font-bold mb-5">Get In Touch</p>
              <div className=" flex flex-col gap-3">
                <div className=" flex flex-col gap-4">
                  <div>
                    <span className=" text-slate-500">Address:</span>{" "}
                    Shantinagar-New Baneshwor, Kathmandu
                  </div>
                  <div>
                    <span className=" text-slate-500">E-mail: </span>{" "}
                    example@123gmail.com
                  </div>
                  <div>
                    <span className=" text-slate-500">Phone: </span> 046-530-616
                  </div>
                </div>

                <div className=" flex gap-4">
                  <div className=" p-3 rounded-full bg-white text-black w-fit cursor-pointer hover:text-blue-600">
                    <FaFacebookF />{" "}
                  </div>
                  <div className=" p-3 rounded-full bg-white text-black w-fit cursor-pointer hover:text-pink-600">
                    {" "}
                    <FaInstagram />{" "}
                  </div>
                  <div className=" p-3 rounded-full bg-white text-black w-fit cursor-pointer hover:text-red-600">
                    {" "}
                    <FaYoutube />
                  </div>
                  <div className=" p-3 rounded-full bg-white text-black w-fit cursor-pointer hover:text-blue-600">
                    {" "}
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-2xl  font-bold mb-5">Recent Posts</p>
              <div className=" flex flex-col gap-4">
                <div className=" flex items-center gap-6">
                  <Image
                    width={80}
                    className="rounded-full"
                    alt="image"
                    src={footer1}
                  />

                  <div>
                    <div className=" font-semibold">LIFESTYLE</div>
                    <div className="font-bold">
                      Get the best speak <br /> market, news.
                    </div>
                    <div className=" flex items-center gap-2 text-slate-600">
                      <BsCalendar2DateFill />
                      <div> January 9, 2024</div>
                    </div>
                  </div>
                </div>

                <div className=" flex items-center gap-6">
                  <Image
                    width={80}
                    className="rounded-full"
                    alt="image"
                    src={footer2}
                  />

                  <div>
                    <div className=" font-semibold">SPORTS</div>
                    <div className="font-bold ">
                      Get the best speak <br /> market, news.
                    </div>
                    <div className=" flex items-center gap-2 text-slate-600">
                      <BsCalendar2DateFill />
                      <div> January 9, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex lg:flex-row flex-col justify-between gap-10 xl:w-[45%] mt-5 xl:mt-0">
            <div>
              <p className=" text-2xl font-bold mb-5">Categories</p>
              <div className=" flex flex-col gap-3">
                <div className=" hover:text-blue-600 cursor-pointer text-lg">
                  Sports
                </div>
                <div className=" hover:text-blue-600 cursor-pointer text-lg">
                  Magazine
                </div>
                <div className=" hover:text-blue-600 cursor-pointer text-lg">
                  Lifestyle
                </div>
                <div className=" hover:text-blue-600 cursor-pointer text-lg">
                  Politician
                </div>
                <div className=" hover:text-blue-600 cursor-pointer text-lg">
                  Technology
                </div>
                <div className=" hover:text-blue-600 cursor-pointer text-lg">
                  Entetainment
                </div>
              </div>
            </div>

            <div>
              <p className=" text-2xl font-bold mb-5">Our Gallery</p>
              <div className=" flex flex-col gap-3">
                <div className=" flex gap-3">
                  <div className=" rounded-lg w-full overflow-hidden">
                    {" "}
                    <Image
                      src={footer1}
                      alt="image"
                      width={80}
                      className=" rounded-lg hover:scale-110 hover:transition-all"
                    />
                  </div>
                  <div className=" rounded-lg w-full overflow-hidden">
                    {" "}
                    <Image
                      src={footer2}
                      alt="image"
                      width={80}
                      className=" rounded-lg hover:scale-110 hover:transition-all"
                    />
                  </div>
                  <div className=" rounded-lg w-full overflow-hidden">
                    {" "}
                    <Image
                      src={footer3}
                      alt="image"
                      width={80}
                      className=" rounded-lg hover:scale-110 hover:transition-all"
                    />
                  </div>
                </div>{" "}
                <div className=" flex gap-3">
                  <div className=" rounded-lg w-full overflow-hidden">
                    {" "}
                    <Image
                      src={footer4}
                      alt="image"
                      width={80}
                      className=" rounded-lg hover:scale-110 hover:transition-all"
                    />
                  </div>
                  <div className=" rounded-lg w-full overflow-hidden">
                    {" "}
                    <Image
                      src={footer5}
                      alt="image"
                      width={80}
                      className=" rounded-lg hover:scale-110 hover:transition-all"
                    />
                  </div>
                  <div className=" rounded-lg w-full overflow-hidden">
                    {" "}
                    <Image
                      src={footer6}
                      alt="image"
                      width={80}
                      className=" rounded-lg hover:scale-110 hover:transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" my-4" />
        <div> &copy; Copyright 2023 @ All right Reserved</div>
      </div>
    </>
  );
};

export default Footer;
