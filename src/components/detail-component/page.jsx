"use client";
import React, { useState } from "react";
import Image from "next/image";

//importing icons
import { FaClock, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaEye, FaSearch } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

// importing images
import detailMainImage from "../pictures/news-1.jpg";
import news5 from "../pictures/news-5.jpg";
import news6 from "../pictures/news-6.jpg";
import tagImg2 from "../pictures/lifestyle-1.jpg";
import tagImg3 from "../pictures/lifestyle-2.jpg";
import tagImg4 from "../pictures/footer-3.jpg";
import lifestyle from "../pictures/footer-1.jpg";
import technology from "../pictures/footer-6.jpg";
import sports from "../pictures/footer-2.jpg";
import banner2 from "../pictures/banner-2.jpg";
const DetailPageComponent = () => {
  const [showTag, setShowTag] = useState(0);

  return (
    <div className=" xl:px-20 md:px-10 px-3 flex flex-col lg:flex-row justify-center gap-6 my-10">
      {/* content 1 */}
      <div className=" mx-auto lg:mx-0 w-[90%] lg:w-[65%]">
        {/* content 1 sub-content 1 */}
        <div>
          <div className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold hover:text-blue-600 cursor-pointer my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className=" rounded-lg overflow-hidden w-full">
            <Image
              src={detailMainImage}
              alt="image"
              objectFit="cover"
              objectPosition="center center"
                className=" hover:transition-all hover:scale-110"
            />
          </div>

          <div className=" flex justify-between mt-2 mb-5 px-5 lg:px-0">
            <div className=" flex gap-2 items-center">
              <FaClock />
              <div>
                06 min <span className=" hidden lg:block">read</span>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaEye />
              <div>
                12k <span className=" hidden lg:block">views</span>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaComment />
              <div>
                2k <span className=" hidden lg:block">Comments</span>{" "}
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaShare />
              <div>
                500 <span className=" hidden lg:block">Share</span>{" "}
              </div>
            </div>
          </div>
          <p className=" text-slate-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy Lorem
            Ipsum has been the industrys standard dummy type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic
          </p>
          <div className=" p-5 rounded-lg border-l-4 border-l-blue-600 text-2xl md:text-3xl lg:text-4xl bg-slate-200 font-bold font-sans my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className=" flex justify-between">
            <div className=" w-[48%] overflow-hidden rounded-lg">
              <Image
                src={news5}
                alt="image"
                objectFit="cover"
                objectPosition="center center"                className=" hover:transition-all hover:scale-110"
              />
            </div>
            <div className=" w-[48%] overflow-hidden rounded-lg">
              <Image
                src={news6}
                alt="image"
                objectFit="cover"
                objectPosition="center center"                className=" hover:transition-all hover:scale-110"
              />
            </div>
          </div>
          <div className="my-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy Lorem
              Ipsum has been the industry standard dummy type and scrambled it
              to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic Lorem Ipsum is simply
              dummy
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy Lorem
              Ipsum has been the industry standard dummy type and scrambled it
              to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been ther took It has survived not only five centuries, but
              also the leap into electronic
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              minus facere quibusdam modi illo quo vel aliquam soluta
              repudiandae! Reiciendis dolorem corporis, minima voluptate
              laudantium quas natus dolores commodi ipsa? Dolor, nesciunt quis
              labore repudiandae officia vitae itaque non nemo, minima debitis
              doloribus et. Rem deleniti alias quo expedita quis libero nisi sit
              velit, magnam minus, amet, omnis hic labore. Ullam quod, fugit
              tempora dolorem minus alias, autem numquam iure, accusantium illo
              temporibus fugiat! Error neque tempore fugit vitae! Eos deserunt
              alias fuga ipsam accusantium necessitatibus itaque fugit quasi
              minus! Ipsam, cumque? Soluta, facere eaque. Blanditiis libero,
              sequi maxime voluptatibus temporibus, fugit nulla ex iste neque
              deleniti aliquam ullam nemo esse eligendi provident quos?
              Similique amet eaque fuga harum quis. Est neque doloribus sed
              error laudantium molestiae quisquam aperiam, asperiores sit
              officia ab maxime, voluptatibus necessitatibus quae ratione rerum
              commodi sapiente deserunt hic quos. Quod eos corrupti dolorem
              placeat in!
            </p>
          </div>
          <div className=" flex justify-between">
            <div className=" flex gap-2 items-center">
              <div className=" text-2xl font-semibold mr-2">Tags:</div>
              <div
                className=" bg-slate-200 px-2 md:px-5 py-2 rounded-full w-fit cursor-pointer"
                onClick={() => {
                  setShowTag(0);
                }}
              >
                Sports
              </div>
              <div
                className=" bg-slate-200 px-2 md:px-5 py-2 rounded-full w-fit cursor-pointer"
                onClick={() => {
                  setShowTag(1);
                }}
              >
                Politics
              </div>
              <div
                className=" bg-slate-200 px-2 md:px-5 py-2 rounded-full w-fit cursor-pointer"
                onClick={() => {
                  setShowTag(2);
                }}
              >
                Magazines
              </div>
            </div>

            <div className="  gap-2 items-center hidden md:flex">
              <div className=" text-2xl font-semibold mr-2">Share:</div>
              <button className=" border-blue-600 border-2 rounded-full w-8 h-8 flex items-center justify-center text-blue-600">
                <FaFacebookF />
              </button>
              <button className=" border-blue-600 border-2 rounded-full w-8 h-8 flex items-center justify-center text-pink-600">
                <FaInstagram />
              </button>
              <button className=" border-blue-600 border-2 rounded-full w-8 h-8 flex items-center justify-center text-blue-600">
                <FaTwitter />
              </button>
              <button className=" border-blue-600 border-2 rounded-full w-8 h-8 flex items-center justify-center text-blue-600">
                <FaLinkedin />
              </button>
            </div>
          </div>
          <div className=" h-[0.3px] bg-slate-600 my-3"></div>

          <div>
            {showTag === 0 && (
              <div className=" flex flex-col md:flex-row items-center justify-center gap-4 ">
                <div className=" w-full md:w-[35%] mx-auto md:mx-0 overflow-hidden rounded-lg">
                  <Image
                    src={tagImg2}
                    objectFit="cover"
                    objectPosition="center center"                    alt="image"
                    className=" hover:scale-110 hover:transition-all"
                  />
                </div>
                <div className=" w-full mx-auto md:mx-0 md:w-[60%]">
                  <div className=" text-xl font-semibold">Ellyse Perry</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    illo tempora id! Fugit temporibus minus blanditiis labore
                    amet sed? Sit deleniti at nulla dicta sint sunt nam laborum
                    illo nisi? Vero tenetur deserunt aniquo esse commodi
                    perferendis necessitatibus aperiam! Numquam sint quod
                    recusandae perspiciatis nesciunt facere nobis nam est error
                    magnam reiciendis sit quasi quidem necessitatibus.
                  </div>
                </div>
              </div>
            )}

            {showTag === 1 && (
              <div className=" flex flex-col md:flex-row items-center justify-center gap-4 ">
                <div className=" w-full md:w-[35%] mx-auto md:mx-0 overflow-hidden rounded-lg">
                  <Image
                    src={tagImg4}
                    objectFit="cover"
                    objectPosition="center center"                    alt="image"
                    className=" hover:scale-110 hover:transition-all"
                  />
                </div>
                <div className=" w-full mx-auto md:mx-0 md:w-[60%]">
                  <div className=" text-xl font-semibold">Ellyse Perry</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    illo tempora id! Fugit temporibus minus blanditiis labore
                    amet sed? Sit deleniti at nulla dicta sint sunt nam laborum
                    illo nisi? Vero tenetur deserunt aniquo esse commodi
                    perferendis necessitatibus aperiam! Numquam sint quod
                    recusandae perspiciatis nesciunt facere nobis nam est error
                    magnam reiciendis sit quasi quidem necessitatibus.
                  </div>
                </div>
              </div>
            )}

            {showTag === 2 && (
              <div className=" flex flex-col md:flex-row items-center justify-center gap-4 ">
                <div className=" w-full md:w-[35%] mx-auto md:mx-0 overflow-hidden rounded-lg">
                  <Image
                    src={tagImg3}
                    objectFit="cover"
                    objectPosition="center center"                    alt="image"
                    className=" hover:scale-110 hover:transition-all"
                  />
                </div>
                <div className=" w-full mx-auto md:mx-0 md:w-[60%]">
                  <div className=" text-xl font-semibold">Ellyse Perry</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    illo tempora id! Fugit temporibus minus blanditiis labore
                    amet sed? Sit deleniti at nulla dicta sint sunt nam laborum
                    illo nisi? Vero tenetur deserunt aniquo esse commodi
                    perferendis necessitatibus aperiam! Numquam sint quod
                    recusandae perspiciatis nesciunt facere nobis nam est error
                    magnam reiciendis sit quasi quidem necessitatibus.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* content 2 */}
      <div className=" w-[90%] mx-auto lg:mx-0 h-fit lg:w-[30%] border-[0.5px] p-5 border-slate-500 rounded-lg">
        {/* search bar */}
        <div className="flex w-full mx-auto mb-5">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className=" w-[90%] px-4 py-3 rounded-l-md border-[0.5px] border-slate-500"
          />
          <button className=" bg-blue-600 text-white rounded-r-md px-3">
            <FaSearch />
          </button>
        </div>

        {/* popular catagories */}
        <div className=" flex flex-col gap-3 my-10">
          <div className=" text-2xl font-semibold">Popular Categories</div>
          <div className=" bg-slate-200 rounded-lg px-5 py-4 hover:text-blue-600 font-semibold text-lg text-center active:ring-4 active:ring-slate-300 cursor-pointer">
            Sports
          </div>
          <div className=" bg-slate-200 rounded-lg px-5 py-4 hover:text-blue-600 font-semibold text-lg text-center active:ring-4 active:ring-slate-300 cursor-pointer">
            Festivals
          </div>
          <div className=" bg-slate-200 rounded-lg px-5 py-4 hover:text-blue-600 font-semibold text-lg text-center active:ring-4 active:ring-slate-300 cursor-pointer">
            Politics
          </div>
          <div className=" bg-slate-200 rounded-lg px-5 py-4 hover:text-blue-600 font-semibold text-lg text-center active:ring-4 active:ring-slate-300 cursor-pointer">
            Arts{" "}
          </div>
          <div className=" bg-slate-200 rounded-lg px-5 py-4 hover:text-blue-600 font-semibold text-lg text-center active:ring-4 active:ring-slate-300 cursor-pointer">
            Relationship
          </div>
          <div className=" bg-slate-200 rounded-lg px-5 py-4 hover:text-blue-600 font-semibold text-lg text-center active:ring-4 active:ring-slate-300 cursor-pointer">
            Travels & Tourism
          </div>
        </div>

        {/* stay connected */}
        <div className=" flex flex-col gap-3 my-10">
          <div className=" text-2xl font-semibold">Stay Connected</div>
          <button className=" flex gap-5 items-center bg-blue-500 px-3 py-4 rounded-lg active:ring-4 ring-blue-400">
            <div className=" w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className=" text-white font-semibold font-sans">11k Likes</div>
          </button>
          <button className=" flex gap-5 items-center bg-red-500 px-3 py-4 rounded-lg active:ring-4 ring-red-400">
            <div className=" w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <FaYoutube />
            </div>
            <div className=" text-white font-semibold font-sans">
              2.2M Subscribers
            </div>
          </button>
          <button className=" flex gap-5 items-center bg-yellow-400 px-3 py-4 rounded-lg active:ring-4 ring-yellow-300">
            <div className=" w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <FaTwitter />{" "}
            </div>
            <div className=" text-white font-semibold font-sans">11k Likes</div>
          </button>
          <button className=" flex gap-5 items-center bg-pink-500 px-3 py-4 rounded-lg active:ring-4 ring-pink-400">
            <div className=" w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <FaInstagram />{" "}
            </div>
            <div className=" text-white font-semibold font-sans">
              22M Followers
            </div>
          </button>

          <button className=" flex gap-5 items-center bg-slate-500 px-3 py-4 rounded-lg active:ring-4 ring-slate-400">
            <div className=" w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <FaLinkedinIn />{" "}
            </div>
            <div className=" text-white font-semibold font-sans">
              11k Followers
            </div>
          </button>
        </div>

        {/* popular news */}
        <div className=" flex flex-wrap flex-col md:flex-row gap-4 py-10">
          <div className=" text-2xl font-semibold">Popular news</div>
          <div className=" flex items-center gap-6">
            <Image
              width={80}
              className="rounded-full"
              alt="image"
              src={tagImg4}
            />
            <div className="  absolute ml-[3.2rem] md:ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-7 w-7 md:h-9 md:w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                FASHION
              </div>
              <div className=" font-bold">Get the best speak market, news.</div>
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
              src={sports}
            />
            <div className=" absolute ml-[3.2rem] md:ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-7 w-7 md:h-9 md:w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                SPORTS
              </div>
              <div className=" font-bold">Get the best speak market, news.</div>
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
              src={technology}
            />
            <div className=" absolute ml-[3.2rem] md:ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-7 w-7 md:h-9 md:w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                TECHNOLOGY
              </div>
              <div className=" font-bold">Get the best speak market, news.</div>
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
              src={lifestyle}
            />
            <div className=" absolute ml-[3.2rem] md:ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-7 w-7 md:h-9 md:w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                LIFESTYLE
              </div>
              <div className=" font-bold">Get the best speak market, news.</div>
              <div className=" flex items-center gap-2 text-slate-600">
                <BsCalendar2DateFill />
                <div> January 9, 2024</div>
              </div>
            </div>
          </div>
          <button className=" border-[0.5px] border-blue-500 py-4 rounded-full w-full hover:text-blue-600 font-semibold">
            View More
          </button>{" "}
        </div>

        {/* Trending tags */}
        <div>
          <div className=" text-2xl font-semibold">Trending tags</div>
          <hr className=" border-[0.2px] bg-slate-50 my-4" />
          <div className=" grid grid-cols-3 grid-rows-3 gap-3">
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Football
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Politics
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              {" "}
              Culture
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Arts
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Magazines
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Travel
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Lifestyle
            </div>
            <div className=" text-lg bg-slate-200 rounded-full py-2 px-2 text-center cursor-pointer">
              Movie
            </div>
          </div>
          <div className=" mt-10 rounded-lg w-fit  ">
            <div className=" w-full">
              <Image src={banner2} alt="banner image" className=" rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageComponent;
