import React from "react";
import TeamItem from "./TeamItem";

const OurTeam = () => {
  return (
    <section className="py-[120px]">
      <h3 className="justify-start text-primaryGreen text-center mt-[95px] text-6xl font-semibold font-['Poppins'] leading-[105px]">
        Our Team
      </h3>

      <div className="mt-[277px] w-[85%] max-w-[1600px] grid grid-cols-3 gap-y-[284px] gap-[50px] items-center mx-auto">
        {Array.from({ length: 6 }, (_, index) => (
          <TeamItem />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
