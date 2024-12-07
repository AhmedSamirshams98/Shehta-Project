import React from "react";
import Marquee from "react-fast-marquee";
import cars1 from "../assets/logu1.png";
import cars2 from "../assets/logu2.png";
import cars3 from "../assets/logu3.png";

const Marque = () => {
  return (
    <div className="    md:px-20  py-10 flex flex-col  items-center justify-center   ">
      <div className="flex flex-col gap-4 ">
        <Marquee direction="right" speed={40}>
          <div style={{ display: "flex", gap: "24px" }}>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  style={{ margin: "0", padding: "0" }}
                  src={cars1}
                  alt="car"
                />
              ))}
          </div>
        </Marquee>
        <Marquee direction="left" speed={50}>
          <div style={{ display: "flex", gap: "24px" }}>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  style={{ margin: "0", padding: "0" }}
                  src={cars2}
                  alt="car"
                />
              ))}
          </div>
        </Marquee>
        <Marquee direction="right" speed={60}>
          <div style={{ display: "flex", gap: "24px" }}>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  style={{ margin: "0", padding: "0" }}
                  src={cars3}
                  alt="car"
                />
              ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
