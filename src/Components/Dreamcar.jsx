import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import lazyload from "react-lazyload";
import image from "../assets/homeimage.jpeg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Dreamcar = () => {
  return (
    <div>
      <div className="-z-1">
        <img
          src={image}
          alt="background"
          className="h-[430px] md:h-[130vh] w-full object-cover object-center"
        />
      </div>
      <div className="flex items-end p-3 w-full md:w-[94%]  absolute  top-[91px] md:top-[180px] flex-col">
        <h1 className="text-[#ffffff] text-right  font-graphik-arabicbb font-extrabold  text-[24px] md:text-[56px] lg:text-[72px] leading-tight">
          !سيـارة أحـلامـك
          <br />
          لحد باب البيت
        </h1>
        <Link to="/form">
          <button className="  text-black text-right  font-graphik-arabicbb    font-bold text-[12px] md:text-[32px] w-[129px] h-[26px]  md:w-[314px] md:h-[63px] mt-[10px] md:mt-[50px] rounded-full flex items-center justify-center bg-[#FDB800] ">
            !اطلب سيارتك الآن
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dreamcar;
