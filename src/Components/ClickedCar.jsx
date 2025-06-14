import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import image from "../assets/bg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whats from "../assets/whats1.svg";
import phone from "../assets/phonee.svg";

const ClickedCar = ({ cars }) => {
  function openDialer() {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/Android|iPhone|iPad|iPod|Huawei|HarmonyOS/i)) {
      window.location.href = "tel:+201003060607";
    } else {
      alert(
        " هذه الميزة متاحة فقط على الأجهزة المحمولة.رقم الاتصال :+201003060607"
      );
    }
  }
  function openWhatsApp() {
    const phoneNumber = "+201003060607";
    const message = `السلام عليكم عندي استفسار بخصوص سياره    ${car.Model}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  function openWhatsprice() {
    const phoneNumber = "+201003060607";
    const message = `السلام عليكم كم سعر السياره ${car.Model}  .`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }
  const { carid } = useParams();
  const car = cars.find((car) => car._id === carid);
  if (!car) {
    return <div>This Car is not existing</div>;
  }
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div className="bg-[#F4F1EC]  h-auto">
        <div
          className={` h-[90px]  md:h-[124px] w-auto relative flex flex-col  bg-cover bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className=" flex flex-col h-[200vh] w-full items-center  ">
          <h1 className="font-graphik-arabicbb text-[32px] mt-[32px] text-cente">
            {car.Model}
          </h1>
          <h1 className="font-graphik-arabicm text-22px] mt-1">
            🤲بفضل ونعمة من الله{" "}
          </h1>
          <h1 className="font-graphik-arabicm text-22px]">
            {" "}
            {car.Model}شحتة_للتجارة#
          </h1>
          {/*الصف الاول  */}
          <div className="grid grid-cols-1  md:grid-cols-4  gap-6 mt-[32px] items-center">
            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                {" "}
                :ماركة السيارة{" "}
              </h1>
              <h1 className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                {car.Brand}
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] "> :سنة الصنع</h1>
              <h1 className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                {car.Year}
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                {" "}
                :موديل السيارة
              </h1>
              <h1 className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                {car.Model}
              </h1>
            </div>

            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                :عداد السيارة
              </h1>
              <h1 className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                {car.Km}Km
              </h1>
            </div>
          </div>
          {/**الصف التاني  */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-[32px] items-center">
            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                {" "}
                :للمزيد من التفاصيل
              </h1>
              <div
                onClick={openDialer}
                className=" cursor-pointer flex flex-row relative items-center"
              >
                <img src={phone} className="absolute pl-2 w-[48px] h-[48px]" />
                <button className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                  تواصل هاتفيا
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                {" "}
                :للمزيد من التفاصيل
              </h1>
              <div
                onClick={openWhatsApp}
                className=" cursor-pointer flex flex-row relative items-center"
              >
                <img src={whats} className="absolute pl-2 w-[48px] h-[48px]" />
                <button className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                  تواصل واتساب{" "}
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                {" "}
                :امكانية الطلب{" "}
              </h1>
              <h1 className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                حجز مسبق
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h1 className="font-graphik-arabicm text-[20px] ">
                {" "}
                :حالة السيارة
              </h1>
              <h1 className=" text-[22px] w-[280px] h-[48px]  flex items-center  justify-center font-graphik-arabicm  rounded-[34px] bg-[#FFFFFF]">
                جديدة
              </h1>
            </div>
          </div>
          <div className="w-full bg-[#FDB800] bg-opacity-50 mt-12 flex items-center justify-center">
            <div className="w-[380px] mb-7 md:w-[1189px] mt-12">
              <Slider {...sliderSettings}>
                {car.Images &&
                  Array.isArray(car.Images) &&
                  car.Images.map((image, index) => (
                    <img
                      key={index}
                      loading="lazy"
                      src={`http://localhost:3000/${image}`}
                      alt={`Slide ${index + 1}`}
                      className="rounded-[26px] h-[300px] md:h-[720px] object-cover cursor-pointer"
                      onClick={() =>
                        handleImageClick(`http://localhost:3000/${image}`)
                      }
                    />
                  ))}
              </Slider>
            </div>
          </div>
          {fullscreenImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
              <button
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={closeFullscreen}
              >
                ×
              </button>
              <img
                src={fullscreenImage}
                alt="Fullscreen"
                className="h-full object-contain"
              />
            </div>
          )}

          <div className="flex items-center justify-center w-full mt-20 mb-4">
            <button
              onClick={openWhatsprice}
              className="bg-[#282828] text-[28px] w-[314px] h-[63px] font-graphik-arabicbb rounded-[42.5px] text-white"
            >
              معرفة السعر
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickedCar;
