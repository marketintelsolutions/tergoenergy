import React from "react";
import Button from "../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const WeBelieveSection = () => {
  return (
    <section className="py-[147px]">
      <div
        style={{
          backgroundImage: `url(/images/webelieveimg.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[80%] max-w-[1595px] mx-auto py-[97px] border rounded-[50px] "
      >
        <div className="w-[85%] max-w-[1100px] mx-auto flex items-center gap-12 justify-between">
          <div>
            <h2 className=" max-w-[561px] justify-start text-white text-6xl font-bold font-['Poppins'] leading-[64px]">
              We believe in the power of data
            </h2>
            <p className=" mt-[60px] max-w-[563px] justify-start text-zinc-400 text-[28px] font-medium font-['Poppins'] leading-10">
              With Shareholders Funds in excess of N49bn (USD 300M) and a
              presence in 28 locations throughout Nigeria, BGL is uniquely
              positioned to provide unrivalled full fledged investment banking
              services.
            </p>
            <div className="mt-[96px]">
              <Button text="READ MORE" />
            </div>
          </div>
          <div className="h-fit flex flex-col gap-5">
            <div className="rounded-[30px] flex  flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[14px] py-[50px] px-[60px]">
              <p className=" justify-start text-white text-5xl font-semibold font-['Poppins'] leading-[50px]">
                $300m
              </p>
              <p className=" justify-start text-white text-2xl font-light font-['Poppins'] leading-normal">
                Funds
              </p>
            </div>
            <div className="rounded-[30px] flex  flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[14px] py-[50px] px-[60px]">
              <p className=" justify-start text-white text-5xl font-semibold font-['Poppins'] leading-[50px]">
                + 235,000
              </p>
              <p className=" justify-start text-white text-2xl font-light font-['Poppins'] leading-normal">
                Projects completed
              </p>
            </div>
            <div className="rounded-[30px] flex  flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[14px] py-[50px] px-[60px]">
              <p className=" justify-start text-white text-5xl font-semibold font-['Poppins'] leading-[50px]">
                28
              </p>
              <p className=" justify-start text-white text-2xl font-light font-['Poppins'] leading-normal">
                Locations
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="self-stretch mt-[70px] text-center justify-start text-BGL-Color text-4xl font-semibold font-['Poppins'] leading-[54px]">
        Parent Company and investment Banking Firm{" "}
      </h3>
      <div className="mt-[102px]  min-w-[1100px] w-[85%] max-w-[1595px] mx-auto flex gap-[36px] justify-center flex-wrap">
        {[
          "Corporate Finance",
          "Public Sector Advisory",
          "Structured Finance",
          "Principal Investments",
          "Investment Research",
        ].map((item) => (
          <div className="max-w-[31%] rounded-[30px] flex  flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[32px] py-[30px] px-[50px]">
            <p className="max-w-[300px] justify-start text-white text-[42px] font-semibold font-['Poppins'] leading-[50px]">
              {item}
            </p>
            <button className="flex items-center text-zinc-400 text-[20px] gap-2">
              <span className="justify-start   font-semibold font-['Poppins'] leading-normal">
                Learn More
              </span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeBelieveSection;
