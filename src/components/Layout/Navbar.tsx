import React, { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaChevronDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";

const navData = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Our Businesses",
    path: "/our-businesses",
    items: [
      {
        text: "BGL Securities",
        path: "/our-businesses/bgl-securities",
      },
      {
        text: "BGL Capitals",
        path: "/our-businesses/bgl-capitals",
      },
      {
        text: "BGL Assets Management",
        path: "/our-businesses/bgl-assets-management",
      },
    ],
  },
  {
    text: "News",
    path: "/news",
  },
  {
    text: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [currentpath, setCurrentpath] = useState("");
  const [isDropdown, setIsDropdown] = useState(false);

  const { pathname } = window.location;

  useEffect(() => {
    setCurrentpath(pathname);
  }, [pathname]);
  return (
    <>
      <div className="w-full bg-lightGreen  pt-[37px] pb-[73px]">
        <div className="   items-center w-[85%]  max-w-[1600px]  mx-auto flex gap-[100px] ">
          <Link to={"/"} className="w-full max-w-[200px] ">
            <img src="/logo.png" alt="logo" className="w-full max-w-[250px]" />
          </Link>
          <div className="w-full flex items-center justify-center gap-[62px]">
            <div className="flex gap-3 items-center">
              <span className="bg-primaryGreen p-1 rounded-full h-fit text-white">
                <TbWorld />
              </span>
              <p className="  justify-start text-primaryGreen text-xl font-medium font-['Poppins'] leading-tight">
                info@bglafrica.com
              </p>
            </div>
            <div className="flex gap-3">
              <span className="bg-primaryGreen p-1 rounded-full h-fit text-white">
                <MdPhoneInTalk />
              </span>
              <p className="  justify-start text-primaryGreen text-xl font-medium font-['Poppins'] leading-tight">
                +234 810 997 6905
              </p>
            </div>
          </div>
          <div className="flex gap-[22px] text-primaryGreen items-center">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      <nav className="w-full h-0 sticky z-[999] top-[65px] left-0 ">
        <div className="w-[70%] flex justify-between items-center max-w-[1369px] -translate-y-1/2  bg-primaryGreen mx-auto rounded-full py-5 px-10">
          <div className="flex gap-12 ">
            {navData.map((item) => {
              if (item.items) {
                return (
                  <p
                    onMouseEnter={() => setIsDropdown(true)}
                    onMouseLeave={() => setIsDropdown(false)}
                    className={`${
                      currentpath.startsWith("/our-businesses")
                        ? "text-secondaryGreen border-secondaryGreen"
                        : "text-primaryGrey border-primaryGreen"
                    } relative cursor-pointer border-b-[5px] flex items-center gap-2 pb-1 rounded-br-[4.5px] text-lg font-medium font-['Poppins'] leading-none
                      `}
                  >
                    <span>{item.text}</span>
                    <span
                      className={`${isDropdown ? "rotate-180" : "rotate-0"}`}
                    >
                      <FaChevronDown />
                    </span>

                    {isDropdown && (
                      <div className="absolute top-[120%] min-w-full w-max rounded-[20px]  p-[1px] bg-gradient-to-tr from-[#FFFFFF] via-primaryGrey to-primaryGrey">
                        <div className="  flex flex-col gap-4 bg-primaryGrey rounded-[20px] backdrop-blur-[6px]  py-5 px-4 ">
                          {item.items.map((subItem) => (
                            <Link
                              to={subItem.path}
                              className="justify-start border-b border-[#BDBDBD] pb-1 text-slate-50 text-lg font-semibold font-['Poppins'] underline"
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </p>
                );
              }
              return (
                <Link
                  to={item.path}
                  className={`${
                    currentpath === item.path
                      ? "text-secondaryGreen border-secondaryGreen"
                      : "text-primaryGrey border-primaryGreen"
                  } border-b-[5px] pb-1 rounded-br-[4.5px] text-lg font-medium font-['Poppins'] leading-none`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>
          <div className="p-[2px] bg-gradient-to-tr transition-all transition-discrete duration-100 ease-out delay-75 hover:from-[#C9C9C900] from-[#FFFFFF] rounded-full  to-[#C9C9C900] hover:to-[#FFFFFF]">
            <div className="p-[5px] bg-primaryGreen rounded-full">
              <button className="bg-white text-primaryGreen flex gap-2 items-center rounded-full px-[30px] py-[10px]">
                <p className="justify-start text-BHL-Color text-xl font-semibold font-['Poppins']">
                  Get Started
                </p>
                <span>
                  <RxArrowTopRight size={25} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
