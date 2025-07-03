import React from "react";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-gradient-to-br from-[#1D4423] to-primaryGreen  rounded-[6px] px-[36px] py-[22px] w-fit text-center justify-start text-white text-2xl font-bold font-['Poppins'] leading-normal">
      {text}
    </button>
  );
};

export default Button;
