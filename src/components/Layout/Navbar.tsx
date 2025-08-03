import React, { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaChevronDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";
import { HiMenu, HiX } from "react-icons/hi";

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
    items: [
      {
        text: "Nexus Gas",
        path: "/our-businesses/nexus-gas",
      },
      {
        text: "Cosol Energy",
        path: "/our-businesses/cosol-energy",
      },
      {
        text: "Multigas Systems",
        path: "/our-businesses/multigas-systems",
      },
      {
        text: "Projects",
        path: "/our-businesses/projects",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { pathname } = window.location;

  useEffect(() => {
    setCurrentpath(pathname);
  }, [pathname]);

  return (
    <>
      {/* Top section with contact info */}
      <div className="w-full bg-lightGreen pt-4 pb-6 md:pt-[37px] md:pb-[73px]">
        <div className="items-center w-[90%] md:w-[85%] max-w-[1600px] mx-auto flex flex-col md:flex-row gap-4 md:gap-[100px]">
          <Link to={"/"} className="w-full max-w-[150px] md:max-w-[200px]">
            <img src="/logo.png" alt="logo" className="w-full max-w-[250px]" />
          </Link>

          {/* Contact info - hidden on mobile */}
          <div className="hidden md:flex flex-wrap w-full items-center justify-center gap-5 lg:gap-[62px]">
            <div className="flex gap-3 items-center">
              <span className="bg-green-600 p-1 rounded-full h-fit text-white">
                <TbWorld />
              </span>
              <p className="justify-start text-primaryGreen text-base font-medium font-['Poppins'] leading-tight">
                info@tergoenergy.com
              </p>
            </div>
            <div className="flex gap-3 hidden xl:flex">
              <span className="bg-green-600 p-1 rounded-full h-fit text-white">
                <MdPhoneInTalk />
              </span>
              <p className="justify-start  text-primaryGreen text-base font-medium font-['Poppins'] leading-tight">
                +234 800 300 3000
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className=" flex gap-[22px] text-green-600 items-center">
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

      {/* Navigation */}
      <nav className="w-full md:h-0 relative md:sticky z-[999] md:top-[65px] left-0">
        <div className="w-full md:w-[85%] lg:w-[80%] xl:w-[70%] flex justify-between items-center max-w-[1369px] md:-translate-y-1/2 bg-primaryGreen mx-auto md:rounded-full py-3 px-4 md:py-5 md:px-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-12">
            {navData.map((item, index) => {
              if (item.items) {
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setIsDropdown(true)}
                    onMouseLeave={() => setIsDropdown(false)}
                    className={`${
                      currentpath.startsWith("/our-businesses")
                        ? "text-secondaryGreen border-secondaryGreen"
                        : "text-gray-200 border-primaryGreen"
                    } relative cursor-pointer border-b-[5px] flex items-center gap-2 pb-1 rounded-br-[4.5px] text-sm font-medium font-['Poppins'] leading-none`}
                  >
                    <span>{item.text}</span>
                    <span
                      className={`${isDropdown ? "rotate-180" : "rotate-0"}`}
                    >
                      <FaChevronDown />
                    </span>

                    {isDropdown && (
                      <div className="navdropdown absolute top-[125%] min-w-full w-max rounded-[20px] p-[1px] bg-gradient-to-tr from-[#FFFFFF]/30 via-primaryGrey/95 to-primaryGrey/75">
                        <div className="flex flex-col gap-4 rounded-[20px] backdrop-blur-[5px] py-5 px-4">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              onClick={() => setIsDropdown(false)}
                              to={subItem.path}
                              className="justify-start border-b border-[#BDBDBD] text-primaryGreen pb-1 text-sm font-semibold font-['Poppins'] underline"
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`${
                    currentpath === item.path
                      ? "text-secondaryGreen border-secondaryGreen"
                      : "text-gray-200 border-primaryGreen"
                  } border-b-[5px] pb-1 rounded-br-[4.5px] hover:text-secondaryGreen hover:border-secondaryGreen text-sm font-medium font-['Poppins'] leading-none`}
                >
                  {item.text}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Get Started Button */}
          <Link
            to={"/contact#discuss"}
            className="p-[2px] bg-gradient-to-tr transition-all transition-discrete duration-100 ease-out delay-75 hover:from-[#C9C9C900] from-[#FFFFFF] rounded-full to-[#C9C9C900] hover:to-[#FFFFFF]"
          >
            <div className="p-[5px] bg-primaryGreen rounded-full">
              <button className="bg-white text-green-600 flex gap-2 items-center rounded-full px-4 py-2 md:px-[30px] md:py-[10px]">
                <p className="justify-start text-BHL-Color text-sm md:text-base font-semibold font-['Poppins']">
                  Discuss With Us
                </p>
                <span>
                  <RxArrowTopRight size={20} className="md:size-[25px]" />
                </span>
              </button>
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-primaryGreen shadow-lg rounded-b-lg z-[998]">
            <div className="w-[95%] mx-auto py-4">
              {navData.map((item, index) => {
                if (item.items) {
                  return (
                    <div
                      key={index}
                      className="border-b border-gray-600 last:border-b-0"
                    >
                      <button
                        onClick={() => setIsDropdown(!isDropdown)}
                        className={`${
                          currentpath.startsWith("/our-businesses")
                            ? "text-secondaryGreen"
                            : "text-gray-200"
                        } w-full text-left py-3 px-4 flex justify-between items-center text-sm font-medium font-['Poppins']`}
                      >
                        <span>{item.text}</span>
                        <span
                          className={`${
                            isDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <FaChevronDown />
                        </span>
                      </button>
                      {isDropdown && (
                        <div className="bg-primaryGreen/80 rounded-lg mx-4 mb-2">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              onClick={() => {
                                setIsDropdown(false);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block py-2 px-4 text-gray-300 text-sm font-medium border-b border-gray-600 last:border-b-0"
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      currentpath === item.path
                        ? "text-secondaryGreen"
                        : "text-gray-200"
                    } block py-3 px-4 text-sm font-medium font-['Poppins'] border-b border-gray-600 last:border-b-0`}
                  >
                    {item.text}
                  </Link>
                );
              })}

              {/* Mobile Contact Info */}
              <div className="px-4 py-3 border-t border-gray-600 mt-2">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <span className="bg-white p-1 rounded-full h-fit text-primaryGreen">
                      <TbWorld />
                    </span>
                    <p className="text-gray-200 text-sm font-medium font-['Poppins']">
                      info@tergoenergy.com
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-white p-1 rounded-full h-fit text-primaryGreen">
                      <MdPhoneInTalk />
                    </span>
                    <p className=" text-gray-200 text-sm font-medium font-['Poppins']">
                      +234 800 300 3000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
