import React from "react";
import Image from "next/image";
import bannerImg from "../pictures/banner-img.jpg";
const HomeBanner = () => {
  return (
    <div>
      <div className=" bg-[blanchedalmond] flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center px-3 md:px-5 lg:px-20 py-10 my-10">
        <div className=" w-[90%] lg:w-[50%] flex flex-col gap-6">
          <div className=" text-blue-600 font-bold text-4xl">Newers</div>
          <div className=" text-4xl font-bold">Get Every Weekly Updates</div>
          <div>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            voluptatem eius suscipit natus, officiis quas hic! Est mollitia
            aperiam facilis quo temporibus! Numquam quis necessitatibus esse
            saepe consequatur ipsum at?
          </div>
          <div>
            <input
              type="search"
              className=" w-[70%] rounded-l-full py-4 px-5 "
              placeholder=" Enter your business email..."
            />
            <button className=" bg-blue-600 text-white px-2 md:px-4 py-4 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <Image
            src={bannerImg}
            alt="image"
            width={500}
            className=" rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
