import React, { useEffect, useState } from "react";
import logo from "../assets/download1.png";

const Splah = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 200) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 1; // Increase progress by 1% every interval
      });
    }, 30); // Update progress every 30 milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#282828]">
      {/* Your logo or splash screen content */}
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="logo" />
        <h1 className="text-[24px] mt-4 font-graphik-arabicbb  text-white">
          شحتة للتجارة
        </h1>
      </div>

      {/* Loading Bar */}
      <div className="w-[12%] mt-5 h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FDB800]"
          style={{ width: `${progress}%`, transition: "width 0.2s ease" }}
        />
      </div>
    </div>
  );
};

export default Splah;
