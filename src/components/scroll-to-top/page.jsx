"use client";
import React from "react";
import { useState } from "react";
const GoToTop = () => {
  //scroll to top functoinality
  const [topBtn, setTopBtn] = useState({ display: "none" });
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 150) {
      setTopBtn({ display: "block" });
    } else {
      setTopBtn({ display: "none" });
    }
  });
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* scroll to top button */}
      <div>
        <button
          className=" bg-blue-600 text-white text-2xl rounded-full h-10 mx-auto w-10 fixed active:ring-4 bottom-16 right-10 shadow-sm"
          onClick={handleScrollTop}
          style={topBtn}
        >
          &uarr;
        </button>
      </div>
    </div>
  );
};

export default GoToTop;
