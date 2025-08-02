import React from "react";

const SharedBanner: React.FC<{ img?: string | null; text: string }> = ({
  img = "aboutbanner",
  text,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(/images/${img}.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative w-[95%] md:w-[85%] mx-auto max-w-[1600px] flex items-end justify-center pb-12 md:pb-16 lg:pb-[100px] rounded-[25px] md:rounded-[50px] h-[300px] md:h-[400px] lg:h-[478px]"
    >
      <h1 className="w-full max-w-[470px] px-4 text-center justify-center text-white text-3xl md:text-5xl lg:text-7xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[87.93px]">
        {text}
      </h1>
    </section>
  );
};

export default SharedBanner;
