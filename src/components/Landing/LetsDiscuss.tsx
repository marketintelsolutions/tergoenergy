import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const LetsDiscuss = () => {
  return (
    <div
      id="discuss"
      className="bg-lightGreen/20 mt-10 md:mt-20 py-12 md:py-20 lg:py-[80px] shadow-[0px_69px_114px_rgba(131,128,135,0.08)] rounded-[20px] w-[95%] md:w-[80%] mx-auto max-w-[1410px]"
    >
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[70px] items-start justify-between">
        <div className="w-full lg:max-w-[50%]">
          <h3 className="justify-start text-black text-2xl md:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[54.47px]">
            Ready to Power Your Future?”
          </h3>
          <p className="text-sm mt-5">
            Let's discuss your energy goals. We design reliable, cost-effective
            systems tailored to your needs.
          </p>
          <div className="w-20 md:w-24 h-[3px] mt-8 md:mt-12 lg:mt-20 bg-gradient-to-l from-zinc-400 to-violet-50/30 rounded-full" />
          <div className="flex mt-10 flex-col gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span>
                <IoMail color="green" size={30} />
              </span>
              <a href="mailto:info@tergoenergy.com">
                <span className="text-black text-base md:text-lg lg:text-xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
                  info@tergoenergy.com
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span>
                <FaPhone color="green" size={30} />
              </span>
              <a href="tel:+2348003003000">
                <span className="text-black text-base md:text-lg lg:text-xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
                  +234 810 928 8365,
                  <br /> +234 906 123 6156
                </span>
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span>
                <IoLocation color="green" size={30} />
              </span>
              <span className="text-black text-base md:text-lg lg:text-xl font-medium font-['Poppins'] ">
                9 Elsie Femi Pearse, Off Adeola Odeku, Victoria Island, Lagos,
                Nigeria
              </span>
            </div>
          </div>
          <div className="flex gap-[22px] text-2xl mt-8 md:mt-12 lg:mt-20 text-primaryGreen items-center">
            <span className="p-2 border border-primaryGreen rounded-full">
              <FaFacebookF />
            </span>
            <a
              href="https://www.linkedin.com/company/tergo-energy-limited"
              target="_blank"
              className="p-2 border border-primaryGreen rounded-full"
            >
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://www.instagram.com/tergoenergy"
              target="_blank"
              className="p-2 border border-primaryGreen rounded-full"
            >
              <span>
                <FaInstagram />
              </span>
            </a>
          </div>

          {/* <Link to={"/contact"}>
            <button className="rounded-[15px] border-2 border-primaryGreen py-3 md:py-4 lg:py-[18px] w-full max-w-[285px] mt-6 md:mt-8 lg:mt-10">
              <span className="text-center justify-start text-BHL-Color text-lg md:text-xl font-normal font-['Poppins']">
                Contact Us
              </span>
            </button>
          </Link> */}
        </div>
        <div className="w-full lg:max-w-[45%]">
          <form className="mt-4 md:mt-5 flex flex-col gap-3 md:gap-2">
            <input
              type="text"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="Email"
            />
            <input
              type="tel"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="Phone Number"
            />
            <select
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              name="enquiry"
              id="enquiry"
            >
              <option disabled selected value="">
                Service Enquiry
              </option>
              <option value="">Gas Delivery (LPG (Butane) and Propane)</option>
              <option value="">
                Gas Systems (Cooking, Water Heating, Cooling)
              </option>
              <option value="">
                Renewable Energy (Solar installations, BESS, Solar Street and
                Perimeter Lighting)
              </option>
              <option value="">Power (Gas , Solar and Hybrid Systems)</option>
              <option value="">Electric Mobility</option>
              <option value="">Energy Management</option>
              <option value="">Partner with us</option>
            </select>

            <textarea
              name="message"
              placeholder="Leave a Message"
              className="h-[120px] md:h-[140px] lg:h-[156px] bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] resize-none text-sm md:text-base"
            ></textarea>
            <button
              className={`w-full h-[50px] md:h-[60px] mt-6 md:mt-8 lg:mt-10 relative overflow-hidden rounded-[4px] text-center justify-start hover:border-2 border-[#C4CFC1] text-white text-base md:text-lg font-bold font-['Poppins'] leading-normal group `}
            >
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D4423] to-primaryGreen transition-opacity duration-300 ease-in-out" />

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#656665] to-[#1D4423] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

              {/* Text content */}
              <span className="relative z-10">Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsDiscuss;
