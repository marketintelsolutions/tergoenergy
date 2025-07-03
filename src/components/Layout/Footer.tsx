import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const footerData = [
  {
    heading: "Quick Links",
    items: [
      {
        text: "Home",
        path: "/",
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
        text: "About Us",
        path: "/about",
      },
      {
        text: "Our Businesses",
        path: "/our-businesses",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" bg-lightGreen">
      <div className="bg-primaryGreen w-[85%] max-w-[1600px] mx-auto rounded-[50px] py-11  ">
        <div className="w-[90%] flex justify-between gap-[80px] max-w-[1200px] mx-auto">
          <div className="flex justify-between w-full max-w-[65%] ">
            <div>
              <div>
                <Link to={"/"} className="w-full max-w-[200px] ">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-full max-w-[250px]"
                  />
                </Link>
              </div>
              <p className="self-stretch mt-[25px] opacity-80 justify-start text-white text-lg font-normal font-['Inter'] leading-loose tracking-tight">
                E-mail: info@bglafrica.com <br />
                URL: http://www.bglbglafrica.com <br />
                Tel: +234 810 997 6905
              </p>
              <div className="flex gap-[22px] mt-[71px] text-white items-center">
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
            {footerData.map((item, index) => (
              <div key={index}>
                <h4 className="justify-start text-white text-xl font-bold font-['HK_Grotesk']  tracking-tight">
                  {item.heading}
                </h4>
                <div className="mt-6 flex flex-col gap-0.5">
                  {item.items.map((subItem, index) => (
                    <Link
                      to={subItem.path}
                      key={index}
                      className="opacity-80 justify-start text-white text-lg font-normal font-['Inter'] leading-loose tracking-tight"
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="self-stretch justify-start text-white text-2xl font-semibold font-['Poppins'] leading-normal">
              Get The Latest Updates
            </h4>
            <div className="mt-[26px] flex">
              <input
                placeholder="Your username"
                type="text"
                className="bg-[#B4B9B8] py-4 px-5  rounded-[4px] text-white placeholder:text-gray-200 text-base font-light font-['Poppins'] leading-none"
              />
              <button className="py-[14px] px-[30px] bg-[#1D3B09] rounded-[4px]">
                <span className="text-center justify-start text-white text-xl font-medium font-['Poppins'] leading-snug">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] max-w-[1600px] mx-auto flex gap-20 bg-black py-[34px] px-10 rounded-t-[50px] mt-[47px]">
        <p className="justify-start text-white text-lg font-light font-['Poppins'] leading-none">
          © 2025 BGL Group
        </p>
        <p className="justify-start text-white text-lg font-light font-['Poppins'] leading-none">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
