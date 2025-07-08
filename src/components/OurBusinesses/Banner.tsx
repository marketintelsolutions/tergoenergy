import React from "react";

const Banner: React.FC<{ img?: string | null; text: string }> = ({
  img = "projects",
  text,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(/images/${img}.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-[85%] mx-auto max-w-[1600px] flex items-end justify-start px-[50px] pb-[100px] rounded-[50px] h-[935px] max-h-[80lvh]"
    >
      <h1 className=" h-28 text-left justify-center text-white text-7xl font-semibold font-['Poppins'] leading-[87.93px]">
        {text}
      </h1>
    </section>
  );
};

export default Banner;
