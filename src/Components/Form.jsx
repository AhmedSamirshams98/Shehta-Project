import React, { useState } from "react";
import Nav from "./Nav";
import image from "../assets/bg.png";
import exit from "../assets/union.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // استخدام Axios
import Footer from "./Footer";

const Form = () => {
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false); // حالة جديدة
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    carBrand: "",
    description: "",
  });

  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // دالة للتحقق من صحة رقم الهاتف
  const validatePhone = (phone) => {
    const isValid = phone.length === 11;
    setIsPhoneValid(isValid);
  };

  // دالة للتعامل مع تغييرات الإدخال
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phone") {
      validatePhone(value);
    }
  };

  // التحقق من أن جميع الحقول تم ملؤها
  const isFormComplete =
    formData.name &&
    formData.phone &&
    formData.carModel &&
    formData.carBrand &&
    formData.description &&
    isPhoneValid;

  // دالة لإرسال الطلب بالبريد الإلكتروني
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      alert("جميع الحقول مطلوبة , يرجى ملء جميع الحقول بشكل صحيح.");
      return;
    }

    setIsButtonClicked(true);

    console.log("Sending data:", formData); // سجل البيانات المرسلة

    try {
      const response = await axios.post(
        // "http://localhost:3000/send",
        // "http://147.79.118.150:443/send",
        "https://api.shehtatrading.com/send",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // تأكد من تحديد نوع المحتوى
            // يمكنك إضافة أي رؤوس أخرى هنا إذا لزم الأمر
          },
        }
      );

      alert("تم إرسال الطلب بنجاح!");
      navigate("/");
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage = error.response
        ? error.response.data.message || "حدث خطأ أثناء إرسال الطلب."
        : "حدث خطأ في الاتصال بالخادم.";
      alert(errorMessage);
      console.log(formData);
      console.log("Response from server:", response);
    }
  };

  return (
    <>
      <div
        className="relative w-full h-[90px] md:h-[124px] flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Nav />
      </div>
      <div className="w-full flex items-center justify-center bg-[#F4F1EC]">
        <div className="w-[360px] md:w-[720px] lg:w-[944px]  py-8  xl:w-[1200px] 2xl:w-[1440px]  h-[160vh] md:h-[100vh] ">
          <div className="flex flex-row items-center justify-between mb-4">
            <Link to="/" className="">
              <div className="bg-white cursor-pointer w-[100px] md:w-[136px] h-[30px] md:h-[48px] rounded-[48px] flex items-center justify-between px-4 md:px-0 md:justify-center gap-[8px] md:gap-[23px]">
                <img src={exit} alt="exit icon" />
                <button className="font-graphik-arabicbb">الغاء</button>
              </div>
            </Link>
            <h1 className="text-[20px] md:text-[32px] text-right font-graphik-arabicbb">
              ✨نموذج طلب سيارة
            </h1>
          </div>
          <p className="font-graphik-arabicm font-semibold text-[12px] md:text-[20px]  leading-6 text-right">
            ادخل بيانات التواصل معك و تفاصيل طلبك و سيتم التواصل معك بكل
            التفاصيل اللى محتاج تعرفها زى السعر و المواصفات الكاملة و الموعد
            المتوقع للاستلام
          </p>
          <form onSubmit={sendEmail}>
            <div className="flex flex-col text-right md:grid md:grid-cols-2 gap-2 mt-4 ">
              <div className="flex flex-col">
                <label className="text-[18px] md:text-[22px] font-graphik-arabicm font-semibold">
                  :رقم الهاتف{" "}
                  <span className="text-[12px]">(اتصال & واتساب)</span>
                </label>
                <input
                  name="phone"
                  className={`px-4 py-4 text-right border rounded-lg ${
                    !isPhoneValid ? "border-red-500" : "border-black"
                  } `}
                  placeholder="01234567890"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {!isPhoneValid && (
                  <span className="text-red-500 text-sm">
                    يجب أن يحتوي رقم الهاتف على 11 رقمًا.
                  </span>
                )}
              </div>
              <div className="flex flex-col ">
                <label className="text-[18px] md:text-[22px] font-graphik-arabicm font-semibold">
                  :الاســــــــم
                </label>
                <input
                  name="name"
                  className="px-4 py-4 border text-right border-black rounded-lg "
                  placeholder="..ادخل الاسم بالكامل هنا"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[18px] md:text-[22px] font-graphik-arabicm font-semibold">
                  :موديل السيارة
                </label>
                <input
                  name="carModel"
                  className="px-4 text-right py-4 border border-black rounded-lg"
                  placeholder="مثال: جى ال سى"
                  onChange={handleChange}
                  value={formData.carModel}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[18px] md:text-[22px] font-graphik-arabicm font-semibold">
                  :ماركة السيارة
                </label>
                <input
                  name="carBrand"
                  className="px-4 text-right py-4 border border-black rounded-lg "
                  placeholder="مثال: مرسيدس"
                  onChange={handleChange}
                  value={formData.carBrand}
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="text-[18px] md:text-[22px] font-graphik-arabicm font-semibold">
                  :تفاصيل الطلب
                </label>
                <textarea
                  name="description"
                  className="px-4 py-4 border text-right border-black rounded-lg "
                  placeholder="مثال: اللون: أسود/2019"
                  onChange={handleChange}
                  value={formData.description}
                />
              </div>
              <div className="col-span-2 flex items-center justify-center  ">
                <button
                  type="submit"
                  className={`w-[320px] flex items-center justify-center transition-all ease-in-out duration-500  rounded-full font-graphik-arabicb text-[18px] md:text-[22px] p-2 mt-2 ${
                    isButtonClicked
                      ? "text-black bg-green-400"
                      : " text-white bg-[#282828]"
                  }`}
                >
                  اطلب سيارتك الآن
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
