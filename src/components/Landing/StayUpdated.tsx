import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import LetsDiscuss from "./LetsDiscuss";
import { Link } from "react-router-dom";

const StayUpdated = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-[177px] mt-10 md:mt-20">
      <div className="bg-secondaryGreen py-12 md:py-20 lg:py-[120px] rounded-[20px] md:rounded-[40px] w-[95%] md:w-[90%] mx-auto max-w-[1600px]">
        <div className="w-[90%] md:w-[87%] mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[80px] justify-between">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-[35px]">
            <div className="w-16 md:w-20 h-[3px] bg-gradient-to-r from-white to-white/30 rounded-full" />
            <h2 className="w-full max-w-[240px] md:max-w-[260px] justify-start text-gray-200 text-2xl md:text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[48px]">
              STAY UPDATED
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 justify-center">
            <div className="w-full max-w-[451px] bg-primaryGreen/80 rounded-[30px] md:rounded-[50px] shadow-[0px_69px_114px_0px_rgba(124,20,253,0.08)] py-8 px-6 md:py-10 md:px-8 lg:py-[47px] lg:px-[43px]">
              <h2 className="justify-start text-zinc-400 text-xl md:text-2xl lg:text-[26px] font-semibold font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
                Clean Energy Trends –<br />
                2025 Outlook
              </h2>
              <p className="h-auto md:h-[120px] lg:h-[150px] mt-4 md:mt-6 lg:mt-[22px] mb-8 md:mb-10 lg:mb-[57px] justify-start text-white text-sm md:text-base lg:text-[15px] font-medium font-['Poppins'] leading-relaxed">
                Discover the latest developments in renewable energy and natural
                gas solutions across Africa. Learn how Tergo Energy is leading
                the clean energy transition.
              </p>

              <Link
                to={"/news"}
                className="bg-white w-fit border border-white hover:bg-transparent hover:text-white text-black py-2 md:py-2.5 px-6 md:px-8 lg:px-[30px] flex gap-2 items-center rounded-[14px] transition-all duration-300"
              >
                <span className="justify-start text-sm md:text-base font-bold font-['HK_Grotesk'] leading-loose">
                  Read More
                </span>
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </div>
            <div className="w-full max-w-[451px] bg-primaryGreen/80 rounded-[30px] md:rounded-[50px] shadow-[0px_69px_114px_0px_rgba(124,20,253,0.08)] py-8 px-6 md:py-10 md:px-8 lg:py-[47px] lg:px-[43px]">
              <h2 className="justify-start text-zinc-400 text-xl md:text-2xl lg:text-[26px] font-semibold font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
                Gas Infrastructure
                <br />
                Development
              </h2>
              <p className="h-auto md:h-[120px] lg:h-[150px] mt-4 md:mt-6 lg:mt-[22px] mb-8 md:mb-10 lg:mb-[57px] justify-start text-white text-sm md:text-base lg:text-[15px] font-medium font-['Poppins'] leading-relaxed">
                Explore how our gas solutions are transforming energy access
                across Nigeria and West Africa, from residential cooking to
                industrial power generation.
              </p>

              <Link
                to={"/news"}
                className="bg-white w-fit border border-white hover:bg-transparent hover:text-white text-black py-2 md:py-2.5 px-6 md:px-8 lg:px-[30px] flex gap-2 items-center rounded-[14px] transition-all duration-300"
              >
                <span className="justify-start text-sm md:text-base font-bold font-['HK_Grotesk'] leading-loose">
                  Read More
                </span>
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <LetsDiscuss />
    </section>
  );
};

export default StayUpdated;
