import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaChevronRight, FaXTwitter } from "react-icons/fa6";

const StayUpdated = () => {
  return (
    <section className="pb-[177px] ">
      <div className="bg-[#1D4423] py-[120px]   rounded-[40px] w-[90%] mx-auto max-w-[1600px]">
        <div className="w-[87%] mx-auto flex gap-[80px] justify-between">
          <div className="flex flex-col gap-[35px]">
            <div className="w-20 h-[3px] bg-gradient-to-r from-white to-white/30 rounded-full" />
            <h2 className="w-60 justify-start text-zinc-400 text-5xl font-semibold font-['Poppins'] leading-[48px]">
              STAY UPDATED
            </h2>
          </div>
          <div className="w-fit flex gap-10 justify-center">
            <div className="w-full max-w-[451px] bg-[#1D3B09] rounded-[50px] shadow-[0px_69px_114px_0px_rgba(124,20,253,0.08)] py-[47px] px-[43px]">
              <h2 className="  justify-start text-zinc-400 text-[30px] font-semibold font-['Poppins'] leading-9">
                Top Businesses –<br />
                August 2024
              </h2>
              <p className="h-[150px] mt-[22px] mb-[57px] justify-start text-white text-[17px] font-medium font-['Poppins'] leading-relaxed">
                Are you currently using one of the BGL businesses, according to
                the team at BGL Strategy?{" "}
              </p>

              <button className="bg-white py-2.5 px-[30px] flex gap-2 items-center rounded-[14px]">
                <span className=" justify-start text-black text-lg font-bold font-['HK_Grotesk'] leading-loose">
                  Read More
                </span>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            </div>
            <div className="w-full max-w-[451px] bg-[#1D3B09] rounded-[50px] shadow-[0px_69px_114px_0px_rgba(124,20,253,0.08)] py-[47px] px-[43px]">
              <h2 className="  justify-start text-zinc-400 text-[30px] font-semibold font-['Poppins'] leading-9">
                Top Businesses –<br />
                August 2024
              </h2>
              <p className="h-[150px] mt-[22px] mb-[57px] justify-start text-white text-[17px] font-medium font-['Poppins'] leading-relaxed">
                Lead conversion is an essential goal for any business. Be it
                converting site visitors into members, increasing their email
                subscription list, or converting members into
              </p>

              <button className="bg-white py-2.5 px-[30px] flex gap-2 items-center rounded-[14px]">
                <span className=" justify-start text-black text-lg font-bold font-['HK_Grotesk'] leading-loose">
                  Read More
                </span>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-9 py-[120px] shadow-[0px_69px_114px_rgba(131,128,135,0.08)]  rounded-[20px] w-[85%] mx-auto max-w-[1410px]">
        <div className="w-[80%] mx-auto flex gap-[70px] items-center justify-between">
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
                className="h-[156px] bg-[#FAF6FF] px-[30px] py-[22px] rounded-[15px] resize-none"
              ></textarea>
              <button className="bg-primaryGreen py-[18px] w-full text-white rounded-[15px] text-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
