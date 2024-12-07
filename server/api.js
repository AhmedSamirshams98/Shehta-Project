import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(
  "mongodb+srv://shamsahmed100:49314758@Cluster0.uhutx.mongodb.net/shehta?retryWrites=true&w=majority"
);

let schema = {
  Model: String,
  Brand: String,
  Km: Number,
  Year: Number,
  Images: Array,
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // تحديد مجلد حفظ الصور
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // تحديد اسم الصورة
  },
});

const upload = multer({ storage: storage });

let cars = mongoose.model("cars", schema);

// إضافة سيارة جديدة
app.post("/cars", upload.array("Images", 15), async (req, res) => {
  try {
    let newCar = new cars({
      Model: req.body.Model,
      Brand: req.body.Brand,
      Km: req.body.Km,
      Year: req.body.Year,
      Images: req.files
        ? req.files.map((file) => `uploads/${file.filename}`)
        : [],
    });
    await newCar.save();
    res.send(newCar);
  } catch (error) {
    res.send("error adding new car", error);
  }
});

app.get("/cars", async (req, res) => {
  try {
    const allcars = await cars.find({});
    res.send(allcars);
  } catch (error) {
    res.send("error getting all data", error);
  }
});
app.get("/cars/:carid", async (req, res) => {
  try {
    let carid = req.params.carid;
    let certainCar = await cars.findOne({ _id: carid });
    res.send(certainCar);
  } catch (error) {
    res.send("error getting this car", error);
  }
});
app.delete("/cars/:carid", async (req, res) => {
  try {
    const carid = req.params.carid;
    deletedCar = await cars.findByIdAndDelete(carid);
  } catch (error) {
    res.send("car deleted successfully");
  }
});
app.put("/cars/:carid", upload.array("Images", 20), async (req, res) => {
  try {
    const carid = req.params.carid;
    let car = await cars.findById(carid);
    const updatedImages =
      req.files && req.files.length > 0
        ? req.files.map((file) => `uploads/${file.filename}`)
        : car.Images;
    const updatedCar = await cars.findByIdAndUpdate(
      carid,
      {
        Model: req.body.Model || car.Model,
        Brand: req.body.Brand || car.Brand,
        Km: req.body.Km || car.Km,
        Year: req.body.Year || car.Year,
        Images: updatedImages,
      },
      { new: true }
    );
    res.send(updatedCar);
  } catch (error) {
    res.send("error updating datas" + error);
  }
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
