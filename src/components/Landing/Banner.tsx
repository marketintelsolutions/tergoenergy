import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const carousel = [
  {
    img: "caro1",
    heading:
      "Powering Africa’s Future with Clean Gas & Renewable Energy Solutions",
    text:
      "From clean cooking gas to solar farms and EV infrastructure—delivering reliable, sustainable energy across the continent.",
  },
  {
    img: "caro2",
    heading: "Clean Gas Energy for Everyday Life & Industry",
    text:
      "Safer cooking, efficient cooling, reliable heating, and uninterrupted power—transforming communities and businesses with modern gas solutions.",
  },
  {
    img: "caro3",
    heading: "Driving Africa’s Energy Transition with Renewables",
    text:
      "Solar farms, EV charging networks, and smart energy consulting—pioneering a greener, more sustainable future.",
  },
  {
    img: "caro4",
    heading: "Bridging Energy Gaps with Smart Hybrid Solutions",
    text:
      "Combining gas and renewables for flexible, reliable, and cost-effective power—meeting Africa’s diverse energy needs today and tomorrow.",
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
        backgroundImage: `url(/images/${carousel[activeIndex].img}.png)`,
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
          <p className="max-w-[855px] justify-start text-zinc-200 text-base md:text-lg lg:text-xl xl:text-[24px] font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-9 xl:leading-10">
            {carousel[activeIndex].text}
          </p>
          <div className="mt-6 md:mt-8 lg:mt-12">
            <a href="/about">
              <Button text="LEARN MORE" />
            </a>
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
