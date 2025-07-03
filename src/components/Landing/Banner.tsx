import React from "react";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <div
      style={
        {
          // backgroundImage: `url(/images/webelieveimg.png)`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }
      }
      className="w-full text-xl h-lvh  bg-black  "
    >
      <div className="w-[85%] mx-auto max-w-[1600px] py-[100px] flex flex-col gap-7 justify-center">
        <h1 className="max-w-[873px]  justify-start text-neutral-100 text-[68px] font-semibold font-['Poppins'] leading-[90.60px]">
          Africa's leading Investment Banking and Investment Group
        </h1>
        <p className="max-w-[855px] justify-start text-zinc-400 text-[28px] font-medium font-['Poppins'] leading-10">
          BGL will actively seek the best opportunities to bring people and
          knowledge together to deliver values greater than the sum of its parts
        </p>
        <div className="mt-20">
          <Button text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
