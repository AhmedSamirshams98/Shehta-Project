import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import image from "../assets/webcover copy.jpeg";

import "../../src/App.css";

import Marque from "./Marque";
import View from "./View";
import How from "./How";
import Exhibits from "./Exhibits";
import Dreamcar from "./Dreamcar";

const Home = ({ cars }) => {
  return (
    <div className="overflow-hidden bg-[#F4F1EC]">
      <Dreamcar image={image} />

      <Marque />

      <View />

      <Exhibits cars={cars} />

      <How />
    </div>
  );
};

export default Home;
