import React from "react";
import order from "../assets/order.svg";
import { Link } from "react-router-dom";

const How = () => {
  return (
    <div className=" h-[633px] mb-4  w-full  flex flex-col items-center">
      <h1 className="font-graphik-arabicbb mb-3 mt-6 font-bold  text-[32px] text-center">
        كيف يمكنك طلب سيارتك المخصصة؟
      </h1>
      <img className="w-[656px] h-[414px]" src={order} alt="" />
      <Link to="/form">
        <button className=" w-[314px] h-[63px] bg-[#282828]  rounded-[42.5px] font-graphik-arabic font-bold text-[32px] font-graphik-arabicm text-center mt-6 text-white">
          اطلب سيارتك الان
        </button>
      </Link>
    </div>
  );
};

export default How;
