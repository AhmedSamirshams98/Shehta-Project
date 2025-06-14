import React, { lazy, useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import whats from "../assets/whats1.svg";
import phone from "../assets/phonee.svg";

import { motion } from "framer-motion";

const Exhibits = ({ cars }) => {
  const [randomCars, setRandomCars] = useState([]);

  useEffect(() => {
    if (cars && cars.length > 0) {
      setRandomCars(cars.slice(0, 5));
    }
  }, [cars]);

  const sliderSettings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    lazyLoad: "ondemand",
  };
  function openDialer() {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/Android|iPhone|iPad|iPod|Huawei|HarmonyOS/i)) {
      window.location.href = "tel:+201003060607";
    } else {
      alert("هذه الميزة متاحة فقط على الأجهزة المحمولة.");
    }
  }
  const [width, setWidth] = useState(0);

  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current && randomCars.length > 0) {
      console.log("scrollWidth:", carouselRef.current.scrollWidth);
      console.log("offsetWidth:", carouselRef.current.offsetWidth);
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
      console.log(width);
    }
  }, [randomCars]);

  function openWhatsApp(carName) {
    const phoneNumber = "+201003060607";
    const message = `مرحبا، أود التحدث معك احتاج سياره ${carName}.`;
    إرسالها;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }
  function openWhatsprice(carName) {
    const phoneNumber = "+201003060607";
    const message = `مرحبا، أود التحدث معك احتاج معرفة سعر سيارة ${carName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <div
      id="cars"
      className=" flex flex-col items-center    justify-center    h-[649px] md:h-[948px]  bg-[#FDB800] "
    >
      <div className="w-full  flex items-center justify-center">
        <h1 className="  font-graphik-arabicbb text-center font-bold text-[24px] md:text-[32px]  h-[48px] md:h-[64px]   ">
          ✨ المعروضــات
        </h1>
      </div>
      <motion.div
        className="    w-full  "
        ref={carouselRef}
        style={{ direction: "rtl" }}
      >
        <motion.div
          className="flex flex-row pr-[6%]  "
          drag="x"
          dragConstraints={{ left: 0, right: width }}
        >
          {randomCars.map((carItem, partIndex) => (
            <motion.div key={partIndex} className="mx-2 md:mx-4 cursor-grab">
              <div className="bg-white rounded-[26px] mx-auto w-[232px] md:w-[384px] h-[436px] md:h-[628px] p-4">
                <Slider {...sliderSettings1}>
                  {carItem.Images.map((image, imgIndex) => (
                    <motion.div key={imgIndex}>
                      <img
                        src={`http://localhost:3000/${image}`}
                        className="w-[210px] object-cover md:w-[348px] h-[209px] md:h-[346px] rounded-md"
                      />
                    </motion.div>
                  ))}
                </Slider>

                <div>
                  <h1 className="text-[24px] text-center  md:text-[32px] mt-3 font-bold font-graphik-arabicbb">
                    {carItem.Model}
                  </h1>
                </div>

                <div className="flex flex-row items-end h-7 justify-between">
                  <div className="mt-4">
                    <h1 className="text-[12px] md:text-[22px] mt-6 font-semibold font-graphik-arabicm">
                      {carItem.Brand}
                    </h1>
                  </div>

                  <div className="flex flex-row gap-[8.06pt]">
                    <div className="mt-4">
                      <h1 className="text-[12px] md:text-[22px] mt-8 md:mt-6 font-semibold font-graphik-arabicm">
                        {carItem.Km}
                      </h1>
                    </div>

                    <div className="mt-4">
                      <h1 className="text-[12px] md:text-[22px] mt-8 md:mt-6 font-semibold font-graphik-arabicm">
                        {carItem.Year}
                      </h1>
                    </div>
                  </div>
                </div>
                <h1 className="font-[500px] text-right text-[8px] md:text-[12px] font-graphik-arabicm">
                  <div className="flex  items-center justify-center    mt-3">
                    <button
                      onClick={() => openWhatsprice(carItem.Model)}
                      className="bg-[#282828] text-[20px] md:text-[28px] w-full h-[40px] md:h-[56px]  font-graphik-arabicbb rounded-[42.5px] text-white"
                    >
                      معرفة السعر
                    </button>
                  </div>
                </h1>

                <div className="flex flex-row items-center justify-between gap-2 mt-2">
                  <Link
                    to={`/cars/${carItem._id}`}
                    onClick={() => scroll.scrollToTop({ duration: 2000 })}
                  >
                    <button className="bg-[#FDB800] text-[12px] md:text-[24px] font-graphik-arabicbb w-[130px] md:w-[250px] h-[32px] md:h-[46px] rounded-[42.5px]">
                      قراءة المزيد
                    </button>
                  </Link>
                  <div>
                    <button onClick={openDialer}>
                      <img
                        className=" h-[33px] md:h-[39px] w-[56px]"
                        src={phone}
                      />
                    </button>
                  </div>
                  <div className="">
                    <button onClick={() => openWhatsApp(carItem.Model)}>
                      <img
                        className="h-[33px] md:h-[39px] w-[56px]"
                        src={whats}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className=" w-full flex items-center justify-center  ">
        <Link to="/cars" onClick={() => scroll.scrollToTop({ duration: 2000 })}>
          <button className="text-[24px] md:text-[32px] font-graphik-arabicbb w-[240px] md:w-[314px] h-[48px] md:h-[63px] mt-6 bg-[#282828] text-white rounded-[42.5px] ">
            عرض الكل
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Exhibits;
