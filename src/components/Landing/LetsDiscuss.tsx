import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LetsDiscuss = () => {
  return (
    <div className="bg-white mt-10 md:mt-20 py-12 md:py-20 lg:py-[80px] shadow-[0px_69px_114px_rgba(131,128,135,0.08)] rounded-[20px] w-[95%] md:w-[80%] mx-auto max-w-[1410px]">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[70px] items-start justify-between">
        <div className="w-full lg:max-w-[50%]">
          <h3 className="justify-start text-black text-2xl md:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[54.47px]">
            Let us discuss your
            <br />
            Finance strategy!
          </h3>
          <div className="w-20 md:w-24 h-[3px] mt-8 md:mt-12 lg:mt-20 bg-gradient-to-l from-zinc-400 to-violet-50/30 rounded-full" />

          <div className="flex gap-[22px] mt-12 md:mt-16 lg:mt-[237px] text-primaryGreen items-center">
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

          <button className="rounded-[15px] border-2 border-primaryGreen py-3 md:py-4 lg:py-[18px] w-full max-w-[285px] mt-6 md:mt-8 lg:mt-10">
            <span className="text-center justify-start text-BHL-Color text-lg md:text-xl font-normal font-['Poppins']">
              Contact Us
            </span>
          </button>
        </div>
        <div className="w-full lg:max-w-[45%]">
          <p className="justify-start text-black text-lg md:text-xl font-normal font-['Product_Sans'] leading-relaxed md:leading-7 tracking-wide">
            Or you can also contact us here
          </p>

          <form className="mt-4 md:mt-5 flex flex-col gap-3 md:gap-2">
            <input
              type="text"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full bg-[#FAF6FF] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:py-[22px] rounded-[15px] text-sm md:text-base"
              placeholder="Subject"
            />
            <textarea
              name="message"
              placeholder="Message"
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
