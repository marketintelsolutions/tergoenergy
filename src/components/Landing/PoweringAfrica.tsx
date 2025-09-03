import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const images = ["wedo1", "wedo2", "wedo3", "wedo4", "wedo5", "wedo6"];

const weDos = [
  "Gas Supply Agreements",
  "Clean Power Generation",
  "Modern Cooking Solutions",
  "Efficient Water Heating & Cooling",
  "Electric Mobility",
  "Smart Energy Management",
];

const PoweringAfrica = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div
      className=" relative py-12 md:py-16 lg:py-[100px]"
      style={{
        backgroundImage: `url(/images/caro3.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <div className="w-[90%]  relative mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-14">
        <div className="text-center max-w-[50%] lg:text-left">
          <h2 className="text-2xl text-white uppercase font-light">
            What We Do
          </h2>

          <h1 className="justify-start text-white text-2xl mt-5 md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[64px]">
            Your Partner for Sustainable Energy
          </h1>
          <p className="mt-3 md:mt-5 justify-start  text-white text-lg md:text-xl lg:text-2xl font-light font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
            We provide reliable, clean energy solutions to homes, businesses,
            industries, and entire communities. Our integrated approach ensures
            every project delivers maximum value, reduces carbon footprints, and
            drives sustainable growth.
          </p>

          <div className="grid grid-cols-2 gap-10 mt-10 text-white">
            {weDos.map((item, index) => (
              <div
                key={index}
                className={`flex gap-2 items-center ${
                  activeIndex === index
                    ? "text-white/80 font-bold"
                    : "text-white"
                }`}
              >
                <span className="inline-flex h-3 w-3 border rounded-full"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="/contact">
            <Button className="mt-8 md:mt-16 lg:mt-[130px]" text="Learn More" />
          </a>
        </div>
        <div className="w-full p-5 bg-primaryGrey rounded-[30px] h-[300px] sm:h-[400px] md:h-[500px] max-w-[300px] md:max-w-[400px] lg:max-w-[45%]">
          <img
            src={`/images/${images[activeIndex]}.png`}
            // src={`/images/bringingtogetherimg.png`}
            alt="bring together"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="absolute -right-2 md:-right-4 lg:-right-8 h-full justify-center flex flex-col gap-4 md:gap-6">
          {Array.from({ length: images.length }, (_, index) => (
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
    </div>
  );
};

export default PoweringAfrica;
