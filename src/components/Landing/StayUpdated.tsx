import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import LetsDiscuss from "./LetsDiscuss";

const StayUpdated = () => {
  return (
    <section className="pb-[177px] mt-20">
      <div className="bg-[#1D4423] py-[120px] rounded-[40px] w-[90%] mx-auto max-w-[1600px]">
        <div className="w-[87%] mx-auto flex gap-[80px] justify-between">
          <div className="flex flex-col gap-[35px]">
            <div className="w-20 h-[3px] bg-gradient-to-r from-white to-white/30 rounded-full" />
            <h2 className="w-60 justify-start text-zinc-400 text-5xl font-semibold font-['Poppins'] leading-[48px]">
              STAY UPDATED
            </h2>
          </div>
          <div className="w-fit flex gap-10 justify-center">
            <div className="w-full max-w-[451px] bg-[#1D3B09] rounded-[50px] shadow-[0px_69px_114px_0px_rgba(124,20,253,0.08)] py-[47px] px-[43px]">
              <h2 className="justify-start text-zinc-400 text-[30px] font-semibold font-['Poppins'] leading-9">
                Clean Energy Trends –<br />
                2025 Outlook
              </h2>
              <p className="h-[150px] mt-[22px] mb-[57px] justify-start text-white text-[17px] font-medium font-['Poppins'] leading-relaxed">
                Discover the latest developments in renewable energy and natural
                gas solutions across Africa. Learn how Tergo Energy is leading
                the clean energy transition.
              </p>

              <button className="bg-white py-2.5 px-[30px] flex gap-2 items-center rounded-[14px]">
                <span className="justify-start text-black text-lg font-bold font-['HK_Grotesk'] leading-loose">
                  Read More
                </span>
                <span>
                  <FaChevronRight />
                </span>
              </button>
            </div>
            <div className="w-full max-w-[451px] bg-[#1D3B09] rounded-[50px] shadow-[0px_69px_114px_0px_rgba(124,20,253,0.08)] py-[47px] px-[43px]">
              <h2 className="justify-start text-zinc-400 text-[30px] font-semibold font-['Poppins'] leading-9">
                Gas Infrastructure
                <br />
                Development
              </h2>
              <p className="h-[150px] mt-[22px] mb-[57px] justify-start text-white text-[17px] font-medium font-['Poppins'] leading-relaxed">
                Explore how our gas solutions are transforming energy access
                across Nigeria and West Africa, from residential cooking to
                industrial power generation.
              </p>

              <button className="bg-white py-2.5 px-[30px] flex gap-2 items-center rounded-[14px]">
                <span className="justify-start text-black text-lg font-bold font-['HK_Grotesk'] leading-loose">
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

      <LetsDiscuss />
    </section>
  );
};

export default StayUpdated;
