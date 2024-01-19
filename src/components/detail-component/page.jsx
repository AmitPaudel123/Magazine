import React from "react";
import Image from "next/image";

//importing icons
import { FaClock } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// importing images
import detailMainImage from "../pictures/news-1.jpg";
import news5 from "../pictures/news-5.jpg";
import news6 from "../pictures/news-6.jpg";
import tagImg2 from "../pictures/lifestyle-1.jpg";
import tagImg3 from "../pictures/lifestyle-2.jpg";

const DetailPageComponent = () => {
  const tagsData = [
    [
      {
        id: Math.random().toString(),
        url: news6,
        name: "Steave Smith",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo tempora id! Fugit temporibus minus blanditiis labore amet sed? Sit deleniti at nulla dicta sint sunt nam laborum illo nisi? Vero tenetur deserunt aniquo esse commodi perferendis necessitatibus aperiam! Numquam sint quod recusandae perspiciatis nesciunt facere nobis nam est error magnam reiciendis sit quasi quidem necessitatibus. ",
      },
    ],
    [
      {
        id: Math.random().toString(),
        url: tagImg2,
        name: "Elyse Perry",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo tempora id! Fugit temporibus minus blanditiis labore amet sed? Sit deleniti at nulla dicta sint sunt nam laborum illo nisi? Vero tenetur deserunt aniquo esse commodi perferendis necessitatibus aperiam! Numquam sint quod recusandae perspiciatis nesciunt facere nobis nam est error magnam reiciendis sit quasi quidem necessitatibus.",
      },
    ],
    [
      {
        id: Math.random().toString(),
        url: tagImg3,
        name: "Rasmika Mandhana",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo tempora id! Fugit temporibus minus blanditiis labore amet sed? Sit deleniti at nulla dicta sint sunt nam laborum illo nisi? Vero tenetur deserunt aniquo esse commodi perferendis necessitatibus aperiam! Numquam sint quod recusandae perspiciatis nesciunt facere nobis nam est error magnam reiciendis sit quasi quidem necessitatibus.",
      },
    ],
  ];

  return (
    <div className=" xl:px-20 md:px-10 px-3 flex flex-col lg:flex-row justify-between gap-6 my-10">
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
              layout="responsive"
              className=" hover:transition-all hover:scale-110"
            />
          </div>

          <div className=" flex justify-between mt-2 mb-5">
            <div className=" flex gap-2 items-center">
              <FaClock />
              <div>06 min read</div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaEye />
              <div>12k views</div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaComment />
              <div>2k Comments</div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaShare />
              <div>500 Share</div>
            </div>
          </div>
          <p className=" text-slate-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum has been the industry's standard dummy type and scrambled it
            to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
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
                layout="responsive"
                className=" hover:transition-all hover:scale-110"
              />
            </div>
            <div className=" w-[48%] overflow-hidden rounded-lg">
              <Image
                src={news6}
                alt="image"
                layout="responsive"
                className=" hover:transition-all hover:scale-110"
              />
            </div>
          </div>
          <div className="my-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum has been the industry's standard dummy type and scrambled it
              to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic Lorem Ipsum is simply
              dummy
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum has been the industry's standard dummy type and scrambled it
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
              <div className=" bg-slate-200 px-5 py-2 rounded-full w-fit cursor-pointer">
                Sports
              </div>
              <div className=" bg-slate-200 px-5 py-2 rounded-full w-fit cursor-pointer">
                Politics
              </div>
              <div className=" bg-slate-200 px-5 py-2 rounded-full w-fit cursor-pointer">
                Magazines
              </div>
            </div>

            <div className=" flex gap-2 items-center">
              <div className=" text-2xl font-semibold mr-2">Share:</div>
              <button className=" border-blue-600 border-2 rounded-full w-8 h-8 flex items-center justify-center text-blue-600">
                <FaFacebook />
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
            {tagsData.map((data) => {
              const { id, url, name, title } = data[0];
              return (
                <div
                  key={id}
                  className=" flex items-center justify-center gap-4 "
                >
                  <div className=" w-[35%] overflow-hidden rounded-lg">
                    <Image
                      src={url}
                      layout="responsive"
                      className=" hover:scale-110 hover:transition-all"
                    />
                  </div>
                  <div className=" w-[60%]">
                    <div>{name}</div>
                    <div>{title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* content 2 */}
      <div className=" w-[25%]"></div>
    </div>
  );
};

export default DetailPageComponent;
