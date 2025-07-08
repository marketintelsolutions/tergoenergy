import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const carousel = [
  {
    img: "caro1",
    heading: "Leading provider of clean energy solutions across Africa",
    text:
      "Accelerating clean energy transition through building a portfolio of assets in renewable energy and natural gas to achieve stakeholders' value",
  },
  {
    img: "caro2",
    heading: "Comprehensive Gas & Renewable Energy Solutions",
    text:
      "From bulk gas supply and CNG services to solar installations and energy storage - we deliver sustainable energy solutions for residential, commercial, and industrial needs.",
  },
  {
    img: "caro3",
    heading: "Powering Africa's Energy Future Since 2020",
    text:
      "As a member of the Nigerian Gas Association, we're committed to addressing Africa's energy challenges through innovative natural gas and renewable energy solutions.",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex === carousel.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);
  return (
    <div
      style={{
        backgroundImage: `url(/images/${carousel[activeIndex].img}.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full text-xl h-lvh "
    >
      <div className="bg-black/25 h-full ">
        <div className="w-[85%] mx-auto max-w-[1600px] py-[100px] flex flex-col gap-7 justify-center">
          <h1 className="max-w-[873px] justify-start text-neutral-100 text-[68px] font-semibold font-['Poppins'] leading-[90.60px]">
            {carousel[activeIndex].heading}
          </h1>
          <p className="max-w-[855px] justify-start text-zinc-400 text-[28px] font-medium font-['Poppins'] leading-10">
            {carousel[activeIndex].text}
          </p>
          <div className="mt-20">
            <Button text="LEARN MORE" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 w-full justify-center flex gap-6">
        {Array.from({ length: carousel.length }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3  rounded-full ${
              index === activeIndex ? "bg-primaryGreen" : "bg-[#d9d9d9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
