import React, { useEffect, useState } from "react";
import image from "../assets/bg.png";

import "../../src/App.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import whats from "../assets/whats1.svg";
import phone from "../assets/phonee.svg";
import { Link } from "react-router-dom";
import exit from "../assets/union.svg";

const All = ({ cars }) => {
  const sliderSettings = {
    dots: true,
    dotsClass: "custom-dots slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  function openWhatsApp(carName) {
    const phoneNumber = "+201003060607";
    const message = `مرحبا، أود التحدث معك احتاج سياره ${carName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  function openDialer() {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/Android|iPhone|iPad|iPod|Huawei|HarmonyOS/i)) {
      window.location.href = "tel:+201003060607";
    } else {
      alert("هذه الميزة متاحة فقط على الأجهزة المحمولة.");
    }
  }
  function openWhatsprice(carName) {
    const phoneNumber = "+201003060607";
    const message = `مرحبا، أود التحدث معك احتاج معرفة سعر سيارة  ${carName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <div
        className={` h-[90px] md:h-[124px] relative flex flex-col w-full  bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div
        id="exit"
        className="flex flex-col items-center p-6 w-full overflow-hidden   bg-[#F4F1EC] h-auto"
      >
        <Link to="/">
          <div className=" mb-3 cursor-pointer w-[100px] md:w-[136px] h-[30px] md:h-[48px] rounded-[48px] flex flex-row items-center  p-1 md:p-0 gap-4 md:justify-center ">
            <img className="ml-2" src={exit} />
            <button className="font-graphik-arabicbb">رجوع</button>
          </div>
        </Link>

        <div className="grid w-[100%]   grid-cols-1 justify-items-center  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-3  ">
          {cars.map((car, partIndex) => (
            <div key={partIndex}>
              <div className="  rounded-[32px]  bg-white w-[318px] md:w-[350px] h-[580px]  md:h-[616px]  p-2">
                <Slider {...sliderSettings}>
                  {car.Images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <Link to={`/cars/${car._id}`}>
                        <img
                          src={`http://localhost:3000/${image}`}
                          alt={`Car ${car._id} Image ${imgIndex + 1}`}
                          className="w-[340px] h-[318px] rounded-[32px]"
                        />
                      </Link>
                    </div>
                  ))}
                </Slider>

                {car.Model && (
                  <div className="">
                    <h1 className=" text-[24px] md:text-[32px] text-center mt-8 font-bold font-graphik-arabicbb ">
                      {car.Model}
                    </h1>
                  </div>
                )}
                <div className="flex flex-row items-end h-7    justify-between">
                  {car.Brand && (
                    <div className="mt-4">
                      <h1 className="text-[16px] md:text-[22px] font-semibold font-graphik-arabicm ">
                        {car.Brand}
                      </h1>
                    </div>
                  )}
                  <div className="flex flex-row gap-[8.06pt]">
                    {car.Km && (
                      <div className="mt-4">
                        <h1 className=" text-[16px] md:text-[22px] mt-8 md:mt-6 font-semibold font-graphik-arabicm ">
                          {car.Km}
                        </h1>
                      </div>
                    )}
                    {car.Year && (
                      <div className="mt-4">
                        <h1 className=" text-[16px] md:text-[22px] mt-8 md:mt-6 font-semibold font-graphik-arabicm ">
                          {car.Year}
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex  items-center justify-center    mt-3">
                  <button
                    onClick={() => openWhatsprice(car.Model)}
                    className="bg-[#282828] text-[20px] md:text-[28px] w-full h-[50px] md:h-[56px]  font-graphik-arabicbb rounded-[42.5px] text-white"
                  >
                    معرفة السعر
                  </button>
                </div>

                <div className="flex flex-row items-center justify-between   mt-2">
                  <div className="flex flex-row items-center  gap-0">
                    <div className="h-[35px] md:h-[39px] ">
                      <button onClick={openDialer}>
                        <img
                          className="h-[35px] md:h-[39px] w-[56px]"
                          src={phone}
                        />
                      </button>
                    </div>
                    <div className="h-[35px] md:h-[39px] ">
                      <button onClick={() => openWhatsApp(car.Model)}>
                        <img
                          className="h-[35px] md:h-[39px] w-[56px]"
                          src={whats}
                        />
                      </button>
                    </div>
                  </div>

                  <Link
                    to={`/cars/${car._id}`}
                    onClick={() => scroll.scrollToTop({ duration: 2000 })}
                  >
                    <button className="bg-[#FDB800] text-[12px] md:text-[24px] font-graphik-arabicbb w-[220px] md:w-[250px] h-[36px] md:h-[46px] rounded-[42.5px]">
                      قراءة المزيد
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
