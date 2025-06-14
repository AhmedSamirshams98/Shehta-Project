import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/shehtaimgg.png";



const Feed = () => {
  
  return (
    <div className="px-20 py-10 bg-[#F4F1EC]">
      <h1 className="text-right font-bold text-[32px] font-graphik-arabic">
        ✨آراء العملاء{" "}
      </h1>
      <Carousel
        className="rounded-[26pt] w-full h-[628px] overflow-hidden relative"
        infiniteLoop
        swipeable
        autoPlay
        interval={5000}
        showIndicators={false}
        emulateTouch
        centerMode={true} 
        centerSlidePercentage={60} 
        showThumbs={false}
        showStatus={false}
      >
        <div className="carousel-item flex flex-row items-start py-10 gap-5 w-[710px] rounded-[20px] h-[428px] mx-4 bg-white">
          <img className="w-[279px] h-[380px]" src={image} alt="محمد م." />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-0 ">
              <img
                className="rounded-full object-contain  w-[61px] h-[61px]"
                src={image}
              />
              <h1>محمد م.</h1>
            </div>
            <h1 className="font-graphik-arabic font-semibold text-[16px]">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
              محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
              مقروء.
            </h1>
          </div>
        </div>
        <div className="carousel-item flex flex-row items-start py-10 gap-5 w-[710px] rounded-[20px] h-[428px] mx-4 bg-white">
          <img className="w-[279px] h-[380px]" src={image} alt="محمد م." />
          <div className="flex flex-col">
            <h1>محمد م.</h1>
            <h1 className="font-graphik-arabic font-semibold text-[16px]">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
              محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
              مقروء.
            </h1>
          </div>
        </div>
        <div className="carousel-item flex flex-row items-start py-10 gap-5 w-[710px] rounded-[20px] h-[428px] mx-4 bg-white">
          <img className="w-[279px] h-[380px]" src={image} alt="محمد م." />
          <div className="flex flex-col">
            <h1>محمد م.</h1>
            <h1 className="font-graphik-arabic font-semibold text-[16px]">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
              محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
              مقروء.
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Feed;
