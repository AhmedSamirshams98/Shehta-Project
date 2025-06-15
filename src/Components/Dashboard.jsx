import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ fetchCars, cars, setCars }) => {
  const [editedCar, setEditedCar] = useState(null);
  const [carId, setCarId] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [km, setKm] = useState("");
  const [year, setYear] = useState("");
  const [images, setImages] = useState([]);
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("");
  const [newCarYear, setNewCarYear] = useState("");
  const [newCarKm, setNewCarKm] = useState("");
  const [newCarImages, setNewCarImages] = useState([]);
  const imagechangetofile = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    // setImages((prevImages) => [...prevImages, ...files]);
  };
  const newCarImagesToChange = (e) => {
    const files = Array.from(e.target.files);
    setNewCarImages(files);
  };
  const handleImageDelete = (index) => {
    setNewCarImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const handleEditImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const dataToEdit = (car) => {
    setEditedCar(car);
    setCarId(car._id);
    setModel(car.Model);
    setBrand(car.Brand);
    setKm(car.Km);
    setYear(car.Year);
    setImages(car.Images);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Model", model);
    formData.append("Brand", brand);
    formData.append("Km", km);
    formData.append("Year", year);
    images.forEach((image) => {
      formData.append("Images", image);
    });
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    try {
      const response = await axios.put(
        `https://api.shehtatrading.com/cars/${carId}`,
        formData
        // {
        //   headers: { "Content-Type": "multipart/form-data" },
        // }
      );
      alert("Car updated successfully");
      fetchCars();
      console.log(response.data);
      console.log(formData);
    } catch (error) {
      alert("Error updating car");
      console.log(error);
    }
  };
  const AddNewCar = async (e) => {
    e.preventDefault();
    const newCarData = new FormData();
    newCarData.append("Model", newCarModel);
    newCarData.append("Brand", newCarBrand);
    newCarData.append("Km", newCarKm);
    newCarData.append("Year", newCarYear);
    newCarImages.forEach((image) => {
      newCarData.append("Images", image);
    });
    try {
      const response = await axios.post(
        "https://api.shehtatrading.com/cars",
        newCarData
      );

      alert("car Added Successfully");
      fetchCars();
    } catch (error) {
      alert("error adding car", error);
    }
  };
  const deleteCar = async (id) => {
    try {
      await axios.delete(`https://api.shehtatrading.com/cars/${id}`);
      fetchCars();
    } catch (error) {
      alert("error deleting car", error);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center p-4">
      <div className="flex flex-row justify-center mt-32  w-[100%]">
        <div className="w-[50%] flex flex-row gap-10 ">
          {/* {cars.map((car) => (
              <div>
                <div className="flex flex-col items-center">
                  <h1>{car.Model}</h1>
                  <h1>{car.Brand}</h1>
                  <h1>{car.Km}</h1>
                  <h1>{car.Year}</h1>
                  {car.Images.map((image) => (
                    <img
                      className="w-[110px] h-[110px]"
                      src={`http://localhost:3000/${image}`}
                    />
                  ))}
                </div>
                <button onClick={() => dataToEdit(car)}>Edit</button>
                <button onClick={() => deleteCar(car._id)}>Delete</button>
              </div>
            ))} */}
        </div>
        <div className="flex flex-row w-full gap-24">
          <form onSubmit={handleSubmit} className="w-[50%] space-y-4">
            <h2 className="text-2xl mb-4">Update Car Information</h2>

            <div>
              <label htmlFor="model" className="block text-sm font-medium">
                Model
              </label>
              <input
                type="text"
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="km" className="block text-sm font-medium">
                Kilometers
              </label>
              <input
                type="number"
                id="km"
                value={km}
                onChange={(e) => setKm(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium">
                Year
              </label>
              <input
                type="number"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              className="bg-red-400"
              placeholder="Insert new Images"
              type="file"
              multiple
              onChange={imagechangetofile}
            />
            <div className="flex gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    // تحقق إذا كانت الصورة عبارة عن ملف جديد مرفوع أو رابط من الخادم
                    src={
                      typeof image === "string"
                        ? `https://api.shehtatrading.com${image}` // الصورة من الخادم
                        : URL.createObjectURL(image) // الصورة ملف جديد مرفوع
                    }
                    alt={`new-car-image-${index}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleEditImageDelete(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Update Car
            </button>
          </form>
          <form onSubmit={AddNewCar} className="w-[50%] space-y-4">
            <h2 className="text-2xl mb-4">Add New Car</h2>
            {/* <div>
            <label htmlFor="carId" className="block text-sm font-medium">
              Car ID
            </label>
            <input
              type="text"
              id="carId"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div> */}

            <div>
              <label htmlFor="model" className="block text-sm font-medium">
                Model
              </label>
              <input
                type="text"
                id="model"
                // value={model}
                onChange={(e) => setNewCarModel(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                // value={brand}
                onChange={(e) => setNewCarBrand(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="km" className="block text-sm font-medium">
                Kilometers
              </label>
              <input
                type="number"
                id="km"
                // value={km}
                onChange={(e) => setNewCarKm(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium">
                Year
              </label>
              <input
                type="number"
                id="year"
                // value={year}
                onChange={(e) => setNewCarYear(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <input
              className="bg-red-400"
              placeholder="Insert new Images"
              type="file"
              multiple
              onChange={newCarImagesToChange}
            />
            <div className="flex gap-2">
              {newCarImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    src={URL.createObjectURL(image)}
                    alt={`new-car-image-${index}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Add Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
