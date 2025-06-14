import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import car from "../assets/lastcar.svg";

const Splash = () => {
  const logoRef = useRef();

  gsap.to(logoRef.current, {
    duration: 3,
    x: 900,

    ease: "bounce",
  });

  return (
    <div className="bg-[#FDB800] flex flex-row items-center gap-10">
      {/* ربط الصورة بـ useRef */}
      <img src={car} ref={logoRef} alt="Car Logo" />
    </div>
  );
};

export default Splash;
