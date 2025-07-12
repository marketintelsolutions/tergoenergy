import React, { useEffect, useState } from "react";
import Button from "../ui/Button";

const images = ["aboutbanner.jpg", "banner2.jpg", "banner3.jpg"];

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
      className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto rounded-[25px] md:rounded-[50px] py-12 md:py-16 lg:py-[100px]"
      style={{
        backgroundImage: `url(/images/webelieveimg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%]  relative mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-14">
        <div className="text-center lg:text-left">
          <h1 className="justify-start text-white text-2xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[64px]">
            Powering Africa's Energy Future
          </h1>
          <p className="mt-3 md:mt-5 justify-start text-white text-lg md:text-xl lg:text-2xl font-medium font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
            Clean. Sustainable. Reliable.
          </p>

          <Button className="mt-8 md:mt-16 lg:mt-[130px]" text="Learn More" />
        </div>
        <div className="w-full p-5 bg-primaryGreen rounded-[30px] h-[300px] sm:h-[400px] md:h-[500px] max-w-[300px] md:max-w-[400px] lg:max-w-[45%]">
          <img
            src={`/images/${images[activeIndex]}`}
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
