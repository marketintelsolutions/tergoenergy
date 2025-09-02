import React from "react";

const WhoWeAre = () => {
  return (
    <section className="flex gap-20 items-center w-[95%] md:w-[85%] max-w-[1600px] mx-auto pb-20 pt-40">
      <div className=" max-w-[40%]">
        <h2 className="text-2xl uppercase font-light">Who we are</h2>
        <h1 className="text-4xl mt-5 text-primaryGreen font-bold">
          Advancing Africa's energy transition with clean, reliable power.
        </h1>
        <p className="text-lg leading-10 mt-10">
          Since our founding in 2022, we have been dedicated to the thoughtful
          development of natural gas and renewable energy solutions. Our
          approach is rooted in unparalleled regional knowledge and high-caliber
          technical skill, designed specifically for the African market.
        </p>
      </div>
      <div>
        <img
          src="/images/whoweareimg.png"
          alt="who we are"
          className="w-full rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
