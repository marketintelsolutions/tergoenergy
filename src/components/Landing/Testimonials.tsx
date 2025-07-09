import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <h3 className="justify-start text-primaryGreen text-center mt-16 md:mt-20 lg:mt-[122px] text-2xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[105px]">
        Client Testimonials
      </h3>
      <div className="bg-white shadow-[0px_69px_114px_rgba(58,64,58,0.08)] rounded-[20px] mt-8 md:mt-12 lg:mt-[52px] w-[95%] md:w-[80%] py-8 md:py-12 lg:py-[89px] max-w-[1410px] mx-auto">
        <div className="w-[90%] md:w-[80%] relative mx-auto">
          <div className="absolute flex gap-5 -bottom-3 right-0 hidden md:flex">
            <span className="text-gray-400 cursor-pointer">
              <FaChevronLeft />
            </span>
            <span className="cursor-pointer">
              <FaChevronRight />
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-14">
            <div className="relative w-full max-w-[200px] md:max-w-[253px] h-[200px] md:h-[292px] bg-primaryGreen rounded-[8px] mx-auto lg:mx-0">
              <div className="absolute bottom-0 left-4 md:left-[27px] translate-y-1/2">
                <img
                  src="/images/quoteleft.svg"
                  alt="left quote"
                  className="w-8 h-8 md:w-auto md:h-auto"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="max-w-[718px] justify-start text-black text-lg md:text-xl lg:text-2xl font-normal font-['Poppins'] leading-relaxed md:leading-8 lg:leading-[51px] tracking-tight">
                Tergo Energy delivered exceptional renewable energy solutions
                for our facility. Their professional approach and reliable
                service have significantly reduced our energy costs while
                supporting our sustainability goals.
              </p>
              <p className="mt-8 md:mt-12 lg:mt-20 justify-start text-green-900 text-base md:text-lg font-normal font-['Poppins']">
                — Energy Manager, Leading Manufacturing Company
              </p>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-5 mt-6 md:hidden">
            <span className="text-gray-400 cursor-pointer">
              <FaChevronLeft />
            </span>
            <span className="cursor-pointer">
              <FaChevronRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
