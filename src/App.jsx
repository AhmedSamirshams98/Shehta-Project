import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Splash from "./Components/Splah";
import All from "./Components/All";
import Form from "./Components/Form";
import "./assets/fonts.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import image from "./assets/homeimage.jpeg";
import ClickedCar from "./Components/ClickedCar";
import axios from "axios";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]); // حالة لتخزين البيانات المسترجعة من API

  // دالة لجلب البيانات من الـ API
  const fetchCars = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");

      setCars(response.data); // تخزين البيانات في الحالة
      console.log(response.data);
      setIsLoading(false); // إيقاف التحميل بعد جلب البيانات
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);
      setIsLoading(false); // إيقاف التحميل في حالة حدوث خطأ
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, []);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div>
        {isLoading ? (
          <Splash />
        ) : (
          <>
            <Nav />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    cars={cars}
                    image={image}
                    onImageLoad={handleImageLoad}
                  />
                }
              />
              <Route path="/cars" element={<All cars={cars} />} />
              <Route path="/form" element={<Form />} />
              <Route path="/cars/:carid" element={<ClickedCar cars={cars} />} />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    fetchCars={fetchCars}
                    cars={cars}
                    setCars={setCars}
                  />
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
