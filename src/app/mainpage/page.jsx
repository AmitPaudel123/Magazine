import React from "react";
import "./home.css";
import Image from "next/image";
//importing images for banner
import sports from "./homeImg/sports.jpg";
import fashion from "./homeImg/fashion.jpg";
import lifestyle from "./homeImg/lifestyle.jpg";
import technology from "./homeImg/technology.jpg";

import { BsCalendar2DateFill } from "react-icons/bs";
import HomeComponent1 from "@/components/home-component1/page";
import HomeBanner from "@/components/homw-sub-banner/page";
import HomeSlider from "@/components/home-slider/page";

const MainPage = () => {
  return (
    <>
      {/* image banner */}
      <div className=" grid lg:grid-flow-col px-10  gap-4 home-banner py-10">
        <div className=" grid md:grid-flow-col">
          <div className=" flex items-center gap-6">
            <Image
              width={80}
              className="rounded-full"
              alt="image"
              src={fashion}
            />
            <div className=" absolute ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-9 w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                FASHION
              </div>
              <div className=" font-bold">
                Get the best speak <br className=" hidden md:block"/> market, news.
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
              src={sports}
            />
            <div className=" absolute ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-9 w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                SPORTS
              </div>
              <div className=" font-bold">
                Get the best speak <br className=" hidden md:block"/> market, news.
              </div>
              <div className=" flex items-center gap-2 text-slate-600">
                <BsCalendar2DateFill />
                <div> January 9, 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-flow-col">
          <div className=" flex items-center gap-6">
            <Image
              width={80}
              className="rounded-full"
              alt="image"
              src={technology}
            />
            <div className=" absolute ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-9 w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                TECHNOLOGY
              </div>
              <div className=" font-bold">
                Get the best speak <br className=" hidden md:block"/> market, news.
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
              src={lifestyle}
            />
            <div className=" absolute ml-[3.7rem] mt-[-1.5rem] bg-blue-600 text-white border-2 border-white rounded-full h-9 w-9 flex items-center justify-center">
              3
            </div>
            <div>
              <div className=" text-lg font-semibold text-slate-600">
                LIFESTYLE
              </div>
              <div className=" font-bold">
                Get the best speak <br className=" hidden md:block"/> market, news.
              </div>
              <div className=" flex items-center gap-2 text-slate-600">
                <BsCalendar2DateFill />
                <div> January 9, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeComponent1 />
      <HomeBanner />
      <HomeSlider />
    </>
  );
};

export default MainPage;
