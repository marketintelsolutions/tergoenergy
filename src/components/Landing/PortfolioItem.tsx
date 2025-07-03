import React from "react";

const PortfolioItem: React.FC<{ img: string; icon: string; text: string }> = ({
  img,
  icon,
  text,
}) => {
  return (
    <div className="relative w-full max-w-[32%] bg-black rounded-[24px] h-[302px] flex items-end px-4 py-[27px] ">
      <div className="absolute top-0 left-2.5   -translate-y-1/2">
        <img src={`/images/${icon}.svg`} alt="lock" />
      </div>
      <p className="  justify-center text-white text-[27px] font-bold font-['Poppins'] leading-7">
        {text}
      </p>
    </div>
  );
};

export default PortfolioItem;
