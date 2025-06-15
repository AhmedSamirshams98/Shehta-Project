import React, { useEffect, useCallback, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
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
  const [cars, setCars] = useState([]); // حالة لتخزين البيانات المسترجعة من API

  // دالة لجلب البيانات من الـ API
  const fetchCars = useCallback(async () => {
    try {
      const response = await axios.get("https://api.shehtatrading.com/cars");
      setCars(response.data); // تخزين البيانات في الحالة
      console.log(response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيانات:", error);
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home cars={cars} image={image} />} />
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
      </div>
    </Router>
  );
};

export default App;
