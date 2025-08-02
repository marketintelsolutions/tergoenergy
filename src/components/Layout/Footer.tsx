import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const footerData = [
  {
    heading: "Quick Links",
    items: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "About Us",
        path: "/about",
      },
      {
        text: "News",
        path: "/news",
      },
      {
        text: "Contact Us",
        path: "/contact",
      },
    ],
  },
  {
    heading: "Company",
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
];

const Footer = () => {
  return (
    <footer className="bg-lightGreen pb-20">
      <div className="bg-primaryGreen w-[95%] md:w-[85%] max-w-[1600px] mx-auto rounded-[25px] md:rounded-[50px] py-8 md:py-11">
        <div className="w-[90%] flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[80px] max-w-[1200px] mx-auto">
          <div className=" flex flex-col md:flex-row justify-between w-full lg:max-w-[75%] gap-8 md:gap-10">
            <div className="  min-w-0">
              <div className="w-full max-w-[200px]">
                <img src="/whitelogo.svg" alt="whitelogo" className="w-full" />
              </div>

              <p className=" self-stretch mt-4 md:mt-[25px] opacity-80 justify-start text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose tracking-tight">
                E-mail: info@tergoenergy.com
              </p>
              <p className="w-max self-stretch mt-4 md:mt-[25px] opacity-80 justify-start text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose tracking-tight">
                Tel: +234 800 300 3000
              </p>
              <div className="flex gap-[22px] mt-8 md:mt-12 lg:mt-[71px] text-white items-center">
                <span>
                  <FaFacebookF />
                </span>

                <span>
                  <FaLinkedin />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>

            <div className="flex  flex-col sm:flex-row gap-8 md:gap-10">
              {footerData.map((item, index) => (
                <div key={index} className="flex-1 min-w-0">
                  <h4 className="justify-start text-white text-lg md:text-xl font-bold font-['HK_Grotesk'] tracking-tight">
                    {item.heading}
                  </h4>
                  <div className="mt-4 md:mt-6 flex flex-col gap-0.5">
                    {item.items.map((subItem, index) => (
                      <Link
                        to={subItem.path}
                        key={index}
                        className="opacity-80 w-max justify-start text-white text-base md:text-lg font-normal font-['Inter'] leading-relaxed md:leading-loose tracking-tight hover:opacity-100 transition-opacity"
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1  lg:flex-none">
            <h4 className="self-stretch justify-start text-white text-xl md:text-2xl font-semibold font-['Poppins'] leading-normal">
              Get The Latest Updates
            </h4>
            <div className="mt-4 md:mt-[26px] flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                placeholder="Email Address"
                type="text"
                className="bg-[#B4B9B8] py-3 md:py-4 px-4 md:px-5 rounded-[4px] text-white placeholder:text-gray-200 text-sm md:text-base font-light font-['Poppins'] leading-none flex-1"
              />
              <Button
                text="Subscribe"
                className="max-w-none sm:max-w-[170px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-wrap gap-10 mt-10">
          <p className="justify-start text-white text-sm md:text-base font-light font-['Poppins'] leading-none">
            © 2025 Tergo Energy
          </p>
          <p className="justify-start text-white text-sm md:text-base font-light font-['Poppins'] leading-none">
            Privacy Policy
          </p>
        </div>
      </div>

      {/* <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-20 bg-black py-6 md:py-[34px] px-6 md:px-10 rounded-t-[25px] md:rounded-t-[50px] mt-8 md:mt-[47px]">
        <p className="justify-start text-white text-base md:text-lg font-light font-['Poppins'] leading-none">
          © 2025 Tergo Energy
        </p>
        <p className="justify-start text-white text-base md:text-lg font-light font-['Poppins'] leading-none">
          Privacy Policy
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
