"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Importing images for slider
import img1 from "../pictures/news-3.jpg";
import img2 from "../pictures/news-4.jpg";
import img3 from "../pictures/news-5.jpg";
import img4 from "../pictures/news-6.jpg";
import img5 from "../pictures/news-7.jpg";
import img6 from "../pictures/news-8.jpg";
import Image from "next/image";

//importing icons
import { FaCalendar } from "react-icons/fa6";

const HomeSlider = () => {
  const PrevArrow = (props) => {
    return (
      <div
        className=" text-blue-600 border-blue-600 border-2 rounded-xl px-3 absolute right-[7rem] top-[-3rem]  hover:bg-blue-600 hover:rounded-md hover:text-white w-fit font-semibold text-xl cursor-pointer"
        onClick={props.onClick}
      >
        &larr;
      </div>
    );
  };

  const NextArrow = (props) => {
    return (
      <div
        className=" text-blue-600 border-blue-600 border-2 rounded-xl px-3 absolute right-[3rem] top-[-3rem] hover:bg-blue-600 hover:rounded-md hover:text-white w-fit font-semibold text-xl cursor-pointer"
        onClick={props.onClick}
      >
        &rarr;
      </div>
    );
  };

  var settings = {
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      id: Math.random().toString(),
      url: img1,
      title: "Lorem ispum dor set amet",

      author: "Harsha Bogle",
      date: "Jan 9, 2024",
    },
    {
      id: Math.random().toString(),
      url: img2,
      title: "Lorem ispum dor set amet",

      author: "Harry Brook",
      date: "Jan 12, 2024",
    },
    {
      id: Math.random().toString(),
      url: img3,
      title: "Lorem ispum dor set amet",

      author: "Josh Inglish",
      date: "Sept 2, 2024",
    },
    {
      id: Math.random().toString(),
      url: img4,
      title: "Lorem ispum dor set amet",

      author: "Brian Lara",
      date: "July 10, 2024",
    },
    {
      id: Math.random().toString(),
      url: img5,
      title: "Lorem ispum dor set amet",

      author: "Pat Cummins",
      date: "Jan 5, 2023",
    },
    {
      id: Math.random().toString(),
      url: img6,
      title: "Lorem ispum dor set amet",

      author: "David Miller",
      date: "Jan 2, 2024",
    },
  ];
  return (
    <div className="px-4 lg:px-10 xl:px-20 my-10">
      <div className="text-3xl font-semibold mb-5">Latest News</div>
      <div>
        <Slider {...settings}>
          {sliderData.map((detail) => {
            const { id, url, title, author, date } = detail;

            return (
              <div key={id}>
                <div className=" overflow-hidden rounded-lg">
                  <Image
                    src={url}
                    alt="image"
                    layout="responsive"
                    className=" rounded-t-lg hover:scale-125 hover:transition-all"
                  />
                </div>
                <div className="text:xl md:text-2xl  font-semibold py-2 px-3 hover:text-blue-600 cursor-pointer">
                  {title}
                </div>
                <div className=" flex justify-between my-2 px-3">
                  <div>By {author}</div>
                  <div className=" flex gap-2">
                    <FaCalendar />
                    <div>{date}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
