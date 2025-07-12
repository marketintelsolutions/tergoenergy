import React, { useState } from "react";

const Banner: React.FC<{
  img?: string | null;
  text: string;
  desc?: string;
}> = ({ img = "projects.png", text, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        backgroundImage: `url(/images/${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[95%] md:w-[85%] mx-auto max-w-[1600px] flex items-end justify-start px-6 md:px-12 lg:px-[50px] pb-12 md:pb-20 lg:pb-[100px] rounded-[25px] md:rounded-[50px] h-[400px] md:h-[600px] lg:h-[935px] max-h-[80lvh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <h1 className="text-left justify-center text-white text-2xl md:text-4xl lg:text-6xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[87.93px] transition-all duration-700 ease-out transform translate-y-0 opacity-100">
          {text}
        </h1>
        <p
          className={`text-white text-base md:text-lg lg:text-2xl transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 transform translate-y-0 h-auto mt-4"
              : "opacity-0 transform translate-y-8 h-0"
          }`}
        >
          {desc ||
            "This is testing"}
        </p>
      </div>
    </section>
  );
};

export default Banner;
