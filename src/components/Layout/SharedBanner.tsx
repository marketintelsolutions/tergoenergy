import React from "react";

const SharedBanner: React.FC<{ img?: string | null; text: string }> = ({
  img = "aboutbanner",
  text,
}) => {
  return (
    <section
      style={{ backgroundImage: `url(/images/${img}.jpg)` }}
      className="w-[85%] mx-auto max-w-[1600px] flex items-end justify-center pb-[100px] rounded-[50px] h-[478px]"
    >
      <h1 className="w-[470px] h-28 text-center justify-center text-white text-7xl font-semibold font-['Poppins'] leading-[87.93px]">
        {text}
      </h1>
    </section>
  );
};

export default SharedBanner;
