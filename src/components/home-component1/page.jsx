import React from "react";
import Image from "next/image";
import banner1 from "../pictures/home-compImg.jpg";
import news2 from "../pictures/news-2.jpg";
import news3 from "../pictures/news-3.jpg";
import news4 from "../pictures/news-4.jpg";
import news5 from "../pictures/news-5.jpg";
import news6 from "../pictures/news-6.jpg";

const HomeComponent1 = () => {
  const marketNews = [
    {
      id: Math.random().toString(),
      url: news4,
      text: "Get the best market news",
      time: "06 min read",
      views: "12k vews",
    },
    {
      id: Math.random().toString(),
      url: news5,
      text: "Get the best market news",
      time: "16 min read",
      views: "12k vews",
    },

    {
      id: Math.random().toString(),
      url: news3,
      text: "Get the best market news",
      time: "06 min read",
      views: "1k vews",
    },
    {
      id: Math.random().toString(),
      url: news6,
      text: "Get the best market news",
      time: "06 min read",
      views: "112k vews",
    },
    {
      id: Math.random().toString(),
      url: news5,
      text: "Get the best market news",
      time: "10 min read",
      views: "122k vews",
    },
  ];
  return (
    <div className=" my-10 lg:px-14">
      <div className=" flex flex-col lg:flex-row  justify-between gap-4 lg:px-16">
        {/* content 1 */}
        <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[75%]">
          {/* subcontent1 */}
          <div>
            <div className=" overflow-hidden rounded-lg">
              <Image
                src={banner1}
                width={850}
                alt="image"
                className=" rounded-lg hover:scale-110 hover:transition-transform"
              />
            </div>
            <div className=" flex gap-4 absolute mt-[-3rem] md:mt-[-2rem] mx-5 text-white">
              <p> 05 minute read</p>
              <p>1.6K views</p>
              <p>06 comments</p>
              <p> 24 shares</p>
            </div>
            <p className=" text-3xl md:text-4xl lg:text-5xl font-bold hover:text-blue-600 cursor-pointer my-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <hr className=" border-[1.5px]" />
            <p className=" w-fit my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              perspiciatis magni, explicabo a dicta velit eum? Fugit suscipit
              quod, eius reprehenderit, alias accusamus nam aut, corrupti saepe
              officia quibusdam? Architecto! Minima provident consectetur autem.
            </p>
          </div>
          {/* subcontent 2 */}
          <div className=" bg-slate-200 rounded-lg px-5 py-10 mt-10">
            <div className=" text-2xl font-semibold mb-4">Top Story</div>
            <div className=" flex flex-col lg:flex-row gap-5 items-center">
              <div className=" w-full overflow-hidden rounded-lg">
                <Image
                  src={news2}
                  alt="image"
                  layout="responsive"
                  className=" rounded-lg hover:transition-all hover:scale-125"
                />
              </div>
              <div>
                <p className=" text-xl md:text-2xl font-semibold hover:text-blue-600 cursor-pointer mb-4">
                  {" "}
                  Stoneman Clandestine Ukrainian claims successes against
                  Russian.
                </p>{" "}
                <p className=" text-lg text-slate-500 font-semibold">
                  06 minute read
                </p>
                <p className=" text-lg text-slate-500 font-semibold">
                  3.5k views
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* content2 */}
        <div className="w-[90%] lg:w-fit mx-auto lg:mx-0 bg-slate-200 rounded-lg p-5">
          <div>
            <div className=" w-full overflow-hidden rounded-lg">
              <Image
                src={news3}
                width={350}
                alt="image"
                layout="responsive"
                className=" rounded-lg hover:scale-125 hover:transition-all"
              />
            </div>
            <p className=" text-2xl font-bold my-4">
              Get the best market news here
            </p>
            <p className=" text-lg text-slate-500 font-semibold">
              06 minute read
            </p>
            <p className=" text-lg text-slate-500 font-semibold">3.5k views</p>

            {marketNews.map((data) => {
              const { id, url, text, time, views } = data;
              return (
                <div key={id}>
                  <div className=" flex gap-4 items-center my-3">
                    <div className=" w-full md:w-[50%] overflow-hidden rounded-lg">
                      <Image
                        src={url}
                        alt="image"
                        width={100}
                        className=" rounded-lg w-full hover:scale-110 hover:transition-all"
                        layout="responsive"
                      />
                    </div>

                    <div>
                      <p className=" font-bold">{text}</p>
                      <p className=" text-slate-400">{time}</p>
                      <p className=" text-slate-400"> {views}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent1;
