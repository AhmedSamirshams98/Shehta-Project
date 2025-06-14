import React, { useEffect, useState } from "react";
import logo from "../assets/download1.png";
import { Link, Element, Events, scrollSpy, scroller } from "react-scroll";
// import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.sectionId) {
      scroller.scrollTo(location.state.sectionId, {
        duration: 2000,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const goToSection = (path, sectionId) => {
    navigate(path, { state: { sectionId } }, window.scrollTo(0, 0));
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex  md:flex-row items-center fixed z-50 justify-between w-full px-0 md:px-[6%] py-0 md:py-[10px] transition-all duration-300 ">
      <div className="  px-6 py-[20px] mt-0 md:mt-[32px]    gap-10    md:flex flex-row    z-10 items-center  bg-[#3B260680] backdrop-blur-lg w-[100%] justify-between shadow-custom-shadow rounded-none md:rounded-full h-[64px] ">
        <div className="hidden md:flex flex-row items-center gap-16">
          <Link
            onClick={() => goToSection("/", "contact")}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[16px] scroll-smooth  text-white font-graphik-arabicm font-bold not-italic"
          >
            تواصل معنا
          </Link>

          <Link
            onClick={() => {
              goToSection("/cars", "exit");
            }}
            className="text-[16px] cursor-pointer text-white font-graphik-arabicm font-bold not-italic"
          >
            المعروضات{" "}
          </Link>

          <Link
            onClick={() => goToSection("/", "about")}
            className="text-[16px] cursor-pointer  text-white font-graphik-arabicm font-bold not-italic"
          >
            عن شحتة
          </Link>
          <Link
            onClick={() => goToSection("/form", "")}
            className="text-[16px] cursor-pointer  text-white font-graphik-arabicm font-bold not-italic"
          >
            اطلب سيارتك
          </Link>
        </div>
        <div
          className="flex flex-row items-center absolute top-4 right-2 "
          style={{ direction: "rtl" }}
        >
          <Link onClick={() => goToSection("/")}>
            <img
              className=" cursor-pointer w-[48px] md:w-[50px] "
              src={logo}
              alt="logo"
            />
          </Link>
          <Link onClick={() => goToSection("/")}>
            <h1 className=" cursor-pointer    text-[24px]  text-white font-graphik-arabicm font-bold text-right not-italic">
              شحتة للتجارة
            </h1>
          </Link>
        </div>
        <div className="w-20 md:hidden ">
          <div className=" absolute top-4     ">
            {/* {isOpen ? (
              <RiCloseFill
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <RiMenu2Fill
                className="text-white text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
            )} */}
          </div>
          {isOpen && (
            <div
              data-aos="fade-right"
              className="absolute top-20 right-0 left-0 h-[770px] bg-opacity-90 bg-[#FDB800] shadow-2xl rounded-md p-5 flex flex-col items-center space-y-16 z-50  transition-opacity duration-700 ease-in-out "
            >
              <Link
                onClick={() => {
                  goToSection("/", "about");
                  toggleMenu();
                }}
                className="text-[24px] cursor-pointer  text-black font-graphik-arabicbb font-bold not-italic"
              >
                عن شحتة
              </Link>
              <Link
                onClick={() => {
                  goToSection("/cars", "exit");
                  toggleMenu();
                }}
                className="text-[24px] cursor-pointer text-black font-graphik-arabicbb font-bold not-italic"
              >
                المعروضات{" "}
              </Link>

              <Link
                to="contact"
                onClick={() => {
                  goToSection("/", "contact");
                  toggleMenu();
                }}
                smooth={true}
                duration={500}
                className="text-[24px] scroll-smooth  text-black  font-graphik-arabicbb font-bold not-italic"
              >
                تواصل معنا
              </Link>
              <Link
                to="contact"
                onClick={() => {
                  goToSection("/form", "");
                  toggleMenu();
                }}
                smooth={true}
                duration={500}
                className="text-[24px] scroll-smooth  text-black  font-graphik-arabicbb font-bold not-italic"
              >
                اطلب سيارتك
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
