import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LetsDiscuss = () => {
  return (
    <div className="bg-white mt-20 py-[120px] shadow-[0px_69px_114px_rgba(131,128,135,0.08)]  rounded-[20px] w-[80%] mx-auto max-w-[1410px]">
      <div className="w-[85%] mx-auto flex gap-[70px] items-center justify-between">
        <div className="w-full max-w-[50%]">
          <h3 className="justify-start text-black text-5xl font-semibold font-['Poppins'] leading-[54.47px]">
            Let us discuss your
            <br />
            Finance strategy!
          </h3>
          <div className="w-24 h-[3px] mt-20 bg-gradient-to-l from-zinc-400 to-violet-50/30 rounded-full" />

          <div className="flex gap-[22px] mt-[237px] text-primaryGreen items-center">
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

          <button className="rounded-[15px] border-2 border-primaryGreen py-[18px] w-[285px] mt-10">
            <span className="w-56 h-6 text-center justify-start text-BHL-Color text-xl font-normal font-['Poppins']">
              Contact Us
            </span>
          </button>
        </div>
        <div className="w-full max-w-[45%] ">
          <p className="justify-start text-black text-xl font-normal font-['Product_Sans'] leading-7 tracking-wide">
            Or you can also contact us here
          </p>

          <form className="mt-5 flex flex-col gap-2">
            <input
              type="text"
              className="w-full bg-[#FAF6FF] px-[30px] py-[22px] rounded-[15px]"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full bg-[#FAF6FF] px-[30px] py-[22px] rounded-[15px]"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full bg-[#FAF6FF] px-[30px] py-[22px] rounded-[15px]"
              placeholder="Subject"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="h-[156px] bg-[#FAF6FF] px-[30px] py-[22px] rounded-[15px] resize-none"
            ></textarea>
            <button className="bg-primaryGreen py-[18px] w-full text-white rounded-[15px] text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsDiscuss;
