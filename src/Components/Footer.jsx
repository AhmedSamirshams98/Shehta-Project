
import logo from "../assets/logofo.svg";
import num from "../assets/num.png";
import whats from "../assets/whats.svg";
import add from "../assets/"
import map from "../assets/map.svg";
import face from "../assets/face.svg";
import insta from "../assets/insta.svg";
import tik from "../assets/tik.svg";
import you from "../assets/you.svg";
import phone from "../assets/phone1.svg";
import what from "../assets/whatss.svg";
import { useEffect } from "react";
const Footer = () => {
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
    const message = "السلام عليكم عندي استفسار بخصوص سيارة";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <div
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center p-5 bg-[#282828] "
      >
        <div className="flex flex-row ml-28 md:ml-0 justify-center gap-6 -order-1 md:order-4">
          <div className="flex flex-col items-end gap-4 w-[220px]">
            <h1 className="font-graphik-arabicbb text-[16px] text-white">
              :تواصل معنا
            </h1>
            <div
              onClick={openDialer}
              className="cursor-pointer flex flex-row items-center gap-3"
            >
              <h1 className="text-[16px] font-graphik-arabicbb text-white">
                +201003060607
              </h1>
              <img src={phone} />
            </div>
            <div
              onClick={openWhatsApp}
              className="cursor-pointer flex flex-row items-center gap-5"
            >
              <h1 className="text-[16px] font-graphik-arabicbb text-white">
                واتـــــســــــاب
              </h1>
              <img src={what} />
            </div>
          </div>
          <img className="w-[69px] h-[89px]" src={logo} />
        </div>

        <div className="flex flex-col items-end gap-3 md:order-2 ">
          <h1 className="font-graphik-arabicbb text-white">:العنوان</h1>
          <h1 className="font-graphik-arabicm text-white text-right">
            :كورنيش بلطيم الجديد - بلطيم - كفر الشيخ - مصر
          </h1>
          <a href="https://maps.app.goo.gl/viQqg5oHnF1b1Y736?g_st=com.google.maps.preview.copy">
            <img src={map} />
          </a>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <h1 className="font-graphik-arabicbb text-white text-right">
              : لمتابعة جديد المعروضات
            </h1>
            <h1 className="font-graphik-arabicm text-white text-right">
              تابعنا على مواقع التواصل الاجتماعى
            </h1>
          </div>
          <div className="flex flex-row items-center gap-6 justify-end">
            <a href="https://www.facebook.com/shehta.trading?mibextid=LQQJ4d">
              <img className="w-[35px] h-[35px]" src={face} />
            </a>
            <a href="https://www.instagram.com/shehta.trading?igsh=NGIyM2M1M3poYng2">
              <img className="w-[35px] h-[35px]" src={insta} />
            </a>
            <a href="https://www.tiktok.com/@shehta.trading?_t=8pf8K14ND1k&_r=1">
              <img className="w-[35px] h-[35px]" src={tik} />
            </a>
            <img className="w-[35px] h-[35px]" src={you} />
          </div>
        </div>
      </div>
      <div className="bg-[#282828] p-4 ">
        <a href="https://wa.me/201000094180">
          <h1 className="text-center text-gray-500 underline">
            Made With ❤️ By: Rafeeq.Academy Team chixo
          </h1>
        </a>
      </div>
    </>
  );
};

export default Footer;
