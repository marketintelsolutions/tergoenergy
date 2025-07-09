import React from "react";

const Button: React.FC<{
  text: string;
  width?: string;
  className?: string;
}> = ({ text, className, width = "180px" }) => {
  return (
    <button
      style={{
        width,
      }}
      className={` h-[60px] relative overflow-hidden rounded-[4px] text-center justify-start hover:border-2 border-[#C4CFC1] text-white text-lg font-bold font-['Poppins'] leading-normal group ${className}`}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D4423] to-primaryGreen transition-opacity duration-300 ease-in-out" />

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#656665] to-[#1D4423] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

      {/* Text content */}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
