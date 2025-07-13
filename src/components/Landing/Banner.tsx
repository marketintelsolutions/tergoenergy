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
        backgroundPosition: "center",
      }}
      className="relative w-full text-xl h-[500px] md:h-[600px] lg:h-[800px]"
    >
      <div className="bg-black/25 h-full">
        <div className="w-[90%] md:w-[85%] mx-auto max-w-[1600px] py-16 md:py-20 lg:py-[100px] flex flex-col gap-4 md:gap-7 justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <h1 className="max-w-[873px] justify-start text-neutral-100 text-2xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[1.3] xl:leading-[90.60px]">
            {carousel[activeIndex].heading}
          </h1>
          <p className="max-w-[855px] justify-start text-zinc-400 text-base md:text-lg lg:text-xl xl:text-[24px] font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-9 xl:leading-10">
            {carousel[activeIndex].text}
          </p>
          <div className="mt-6 md:mt-8 lg:mt-12">
          <a href="/about">
            <Button text="LEARN MORE" /></a>
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-20 w-full justify-center flex gap-4 md:gap-6">
        {Array.from({ length: carousel.length }, (_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex
                ? "bg-primaryGreen"
                : "bg-[#d9d9d9] hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
