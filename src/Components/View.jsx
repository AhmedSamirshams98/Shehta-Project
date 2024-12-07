import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shehtaimg1 from "../assets/shehta1.png";
import shehtaimg2 from "../assets/shehta2.png";
import shehtaimg3 from "../assets/shehta3.png";
import shehtaimg4 from "../assets/shehta4.png";
import shehtaimg5 from "../assets/shehta5.png";
import shehtaimg6 from "../assets/shehta6.png";
import shehtaimg7 from "../assets/shehta7.png";
import shehtaimg8 from "../assets/shehtacars.jpg";
import shehtaimg9 from "../assets/shehta9.png";
const View = () => {
  const sliderSettings = {
    dots: true,
    dotsClass: "custom-dots slick-dots",
    infinite: true,
    speed: 500, // سرعة الانتقال بين الشرائح
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // تفعيل التمرير التلقائي
    autoplaySpeed: 3000,
    arrows: false, // السرعة بين كل تمريرة بالميلي ثانية
  };
  return (
    <div
      id="about"
      className="bg-white grid grid-cols-1 justify-items-center  md:flex flex-col items-center m-auto   py-8 lg:flex lg:flex-row lg:items-start lg:p-16 mt-4   "
    >
      <div
        data-aos="fade-left"
        className=" w-[322px] mx-auto   md:w-[352px] h-[437px]  md:h-[478px]"
      >
        <Slider {...sliderSettings}>
          <img
            src={shehtaimg1}
            alt="Slide 1"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg2}
            alt="Slide 2"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg3}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg4}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg5}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg6}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg7}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg8}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
          <img
            src={shehtaimg9}
            alt="Slide 3"
            className=" w-[310px] rounded-[42px] md:w-[352px] h-[437px] md:h-[478px]"
          />
        </Slider>
      </div>

      <div
        data-aos="fade-right"
        className=" flex flex-col items-end gap-2 mt-10 px-[3%]  "
      >
        <h1 className=" text-[24px] md:text-[32px]  scroll-smooth px-3 text-[#000000] font-bold font-graphik-arabicbb">
          ✨ لمحة عن شحتة للتجارة
        </h1>
        <h1
          className=" text-[16px] p-2  md:text-[16px] lg:text-[16px]   text-[#000000] font-semibold text-justify font-graphik-arabicm  leading-loose "
          style={{ direction: "rtl" }}
        >
          بدأت رحلة شحتة فى عام 1970 فى تجارة الأدوات المكتبية و الكتب و
          مستلزمات الدراسة و الخردوات و التحف و الأنتيكات وخلافه, من مدينة بلطيم
          مدينة السحر و الجمال كما يطلق عليها لطبيعتها الخلابة و أجوائها
          الساحلية المميزة والتي يتميز أهلها بالطيبة والاصل والاحترام ومراعاة
          الله سبحانه وتعالى في جميع الأمور بشكل عام والتعاملات المالية بشكل خاص
          والتي كانت لزاما علينا ان نلتزم وننتهج بها لضمان رضى الله عز وجل قبل
          اي شئ <br /> ومن هذا المزيج تكونت ثقافتنا وقناعتنا وكانت عامل أساسي في
          تحقيق النجاح المنشود وانعكست على تعاملاتنا وانمزجت بشخصيتنا واصبحت جزء
          لا يتجزأ من تكويننا الشخصي والاعتباري وفي طريقنا المنشود ومع بداية
          الرحلة و الطموح حتى العام ١٩٩٨ عندما قرر الأبناء الدخول الى عالم
          السيارات من معقل التجارة و البيع و الشراء و هو سوق السيارات بالقاهرة و
          الذى يقام كل يوم جمعة ، ولا ننسي فضل وكرم اهل مدينة الاسكندرية الباسلة
          والتي كانت بمثابة فاتحة الخير علينا ، و على مسافة تبعد 200 كيلو متر من
          موطن شحتة للتجارة يولد حلم جديد و طموح جديد بالتميز و الريادة فى عالم
          السيارات <br /> مرت الرحلة بمحطات كثيرة من التعثر و الازدهار حتى أصبح
          اسم شحتة للتجارة محل الثقة و التقدير لعملائه فى مختلف محافظات مصر
          خصوصاً مع انتشار مواقع التواصل الاجتماعى و توسع سوق السيارات بمصر فى
          الفترة بين العام 2008 و حتى 2021 ، كان لزاماً و التزاماً ان تتحقق
          الريادة فى التوسع و تحقيق متطلبات العملاء و السعى نحو توفير أفضل خدمة
          و اضمن منتج فكان الهدف فى هذه الفترة نحو استيراد السيارات الجديدة و
          المستعملة من مختلف الأسواق حول العالم <br />و تتحق الريادة مرة أخرى
          بفضل الله ثم ثقة عملائنا مما يزيد إيماننا بكرم الله و فضله و يضع على
          عاتقنا مسؤولية الالتزام و التجديد المستمر لخدماتنا و الوصول لرضاء
          عملائنا التام شركاء الرحلة و داعميها
        </h1>
      </div>
    </div>
  );
};

export default View;
