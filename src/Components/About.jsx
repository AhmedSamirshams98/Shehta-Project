// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Marquee from "react-fast-marquee";
// import car from "../assets/merceds1.png"
// import cars1 from "../assets/Group1.png";
// import cars2 from "../assets/Group2.png";
// import cars3 from "../assets/Group3.png";
// import shehtaimg from "../assets/shehtaimgg.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Main carousel styles
// import { Carousel } from "react-responsive-carousel";
// import Slider from "react-slick"; // Slider for inner carousel
// import "slick-carousel/slick/slick.css"; // Slider styles
// import "slick-carousel/slick/slick-theme.css";

// const About = () => {
//   const sliderSettings = {
//     dots: true,
//     dotsClass: "custom-dots slick-dots",
//     infinite: true,
//     speed: 500, // سرعة الانتقال بين الشرائح
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // تفعيل التمرير التلقائي
//     autoplaySpeed: 3000,
//     arrows: false, // السرعة بين كل تمريرة بالميلي ثانية
//   };
//   return (
//     <div className="h-[130vh] w-full bg-[#F4F1EC] px-20 py-10">
//       <div className="flex flex-col overflow-hidden items-center justify-center gap-5 w-full ">
//         <Marquee direction="right " gradient={false} speed={40}>
//           <div className="flex flex-row gap-2 ">
//             <img className=" h-[800%] " src={cars1} />
//           </div>
//         </Marquee>
//         <Marquee direction="left" gradient={false} speed={50}>
//           <div className="flex flex-row gap-2 ">
//             <img className=" h-[800%] " src={cars2} />
//           </div>
//         </Marquee>
//         <Marquee direction="right " gradient={false} speed={60}>
//           <div className="flex flex-row gap-2 ">
//             <img className=" h-[800%] " src={cars3} />
//           </div>
//         </Marquee>

//         <div
//           id="about"
//           className="bg-white flex flex-row  justify-center word w-[1200px] h-[542px] rounded-[42px] px-4 py-5 mt-10 gap-4"
//         >
//          <div className="w-[352px] h-[478px]">
//             <Slider {...sliderSettings}>
//               <img src={shehtaimg} alt="Slide 1" className="w-full h-full" />
//               <img src={car} alt="Slide 2" className="w-full h-[478px]" />
//               <img src={shehtaimg} alt="Slide 3" className="w-full h-auto" />
//             </Slider>
//           </div>
//           <div class="absolute w-[352px] h-[478px] left-[152px] top-[1304px] bg-[url('WhatsApp Image 2024-08-29 at 14.55.15.jpg')] rounded-[26px]">
// </div>

//           <div className="flex flex-col items-end gap-8">
//             <h1 className="text-[32px] scroll-smooth text-[#000000] font-bold font-graphik-arabic">
//               ✨ لمحة عن شحتة للتجارة
//             </h1>
//             <h1 className="text-[16px]  text-[#000000] font-medium text-right font-graphik-arabic leading-loose">
//               بدأت رحلة شحتة فى عام 1970 فى تجارة الأدوات المكتبية و الكتب و
//               مستلزمات الدراسة و الخردوات و التحف و الأنتيكات , من مدينة بلطيم
//               مدينة السحر و الجمال كما يطلق عليها لطبيعتها الخلابة و أجوائها
//               الساحلية المميزة <br />، استمرت الرحلة و الطموح حتى العام ١٩٩٨ عندما قرر
//               الأبناء الدخول الى عالم السيارات من معقل التجارة و البيع و الشراء
//               و هو سوق السيارات بالقاهرة و الذى يقام كل يوم جمعة ، و على مسافة
//               تبعد 200 كيلو متر من موطن شحتة للتجارة يولد حلم جديد و طموح جديد
//               بالتميز و الريادة فى عالم السيارات. <br /> مرت الرحلة بمحطات كثيرة من
//               التعثر و الازدهار حتى أصبح اسم شحتة للتجارة محل الثقة و التقدير
//               لعملائه فى مختلف محافظات مصر , خصوصاً مع انتشار مواقع التواصل
//               الاجتماعى و توسع سوق السيارات بمصر فى الفترة بين العام 2008 و حتى
//               2021 ، كان لزاماً و التزاماً ان تتحقق الريادة فى التوسع و تحقيق
//               متطلبات العملاء و السعى نحو توفير أفضل خدمة و اضمن منتج , فكان
//               الهدف فى هذه الفترة نحو استيراد السيارات الجديدة و المستعملة من
//               مختلف الأسواق حول العالم و تتحق الريادة مرة أخرى بفضل الله ثم ثقة
//               عملائنا , مما يزيد إيماننا بكرم الله و فضله و يضع على عاتقنا
//               مسؤولية الالتزام و التجديد المستمر لخدماتنا و الوصول لرضاء عملائنا
//               التام شركاء الرحلة و داعميها..
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
