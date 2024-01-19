"use client";
import { Main } from "next/document";
import React, { useState } from "react";
import MainPage from "./mainpage/page";
import { useAmp } from "next/amp";

const Home = () => {
  return (
    <>
      <div></div>
      <MainPage />
    </>
  );
};

export default Home;
