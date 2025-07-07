import React from "react";
import TeamItem from "./TeamItem";

const boardMembers = [
  { name: "Chris Oshiafi", role: "Board Director" },
  { name: "Sina Alimi", role: "Board Director" },
  { name: "Eric Okoruwa", role: "Board Director" },
  { name: "Nentok Gomwalk", role: "Board Director" },
  { name: "Bolarinwa Sanni", role: "Board Director" },
  { name: "Isioma Martins", role: "Board Director" },
];

const OurTeam = () => {
  return (
    <section className="py-[120px]">
      <h3 className="justify-start text-primaryGreen text-center mt-[95px] text-6xl font-semibold font-['Poppins'] leading-[105px]">
        Leadership Team
      </h3>
      <p className="mt-16 w-[85%] mx-auto max-w-[1600px] opacity-80 text-center justify-start text-black text-xl font-normal font-['Poppins'] leading-7">
        Our leadership team brings together diverse expertise in energy,
        finance, and strategic management to drive Tergo Energy's mission of
        advancing Africa's clean energy transition.
      </p>
      <div className=" rounded-[50px] py-[70px] px-[80px] shadow-[0px_69px_114px_rgba(58,64,58,0.08)]">
        <div className="mt-[277px] w-[85%] max-w-[1600px] grid grid-cols-3 gap-y-[284px] gap-[50px] items-center mx-auto">
          {boardMembers.map((member, index) => (
            <TeamItem key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
