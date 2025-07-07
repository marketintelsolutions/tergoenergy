import React from "react";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <div className="w-full text-xl h-lvh bg-black">
      <div className="w-[85%] mx-auto max-w-[1600px] py-[100px] flex flex-col gap-7 justify-center">
        <h1 className="max-w-[873px] justify-start text-neutral-100 text-[68px] font-semibold font-['Poppins'] leading-[90.60px]">
          Leading provider of clean energy solutions across Africa
        </h1>
        <p className="max-w-[855px] justify-start text-zinc-400 text-[28px] font-medium font-['Poppins'] leading-10">
          Accelerating clean energy transition through building a portfolio of
          assets in renewable energy and natural gas to achieve stakeholders'
          value
        </p>
        <div className="mt-20">
          <Button text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
