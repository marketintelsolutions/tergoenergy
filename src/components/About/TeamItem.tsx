import React from "react";

const TeamItem: React.FC<any> = ({ name, role, image, onReadMore }) => {
  return (
    <div className="relative">
      <div className=" w-full h-1/2 rounded-full">
        <div className="translate-y-[40%] w-fit md:w-full p-2 md:p-4 rounded-full  border-2 md:border-4 border-primaryGreen">
          <img
            src={`/images/${image}`}
            alt={name}
            className="w-20  md:w-24 lg:w-full h-full  rounded-full object-cover"
          />
        </div>
      </div>
      <div className="px-2 md:px-4">
        <div className="bg-[#FAF6FF] px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10 pt-[50%] md:pt-[60%] rounded-[30px] md:rounded-[50px] shadow-[0px_30px_114px_0px_rgba(51,50,52,0.20)]">
          <h3 className="text-center justify-start text-black text-lg md:text-xl lg:text-2xl font-semibold font-['Poppins'] leading-tight md:leading-8 lg:leading-9">
            {name}
          </h3>
          <p className="mt-3 h-[40px] md:mt-4 lg:mt-[18px] opacity-80 text-center justify-start text-black text-sm md:text-base lg:text-lg font-normal font-['Poppins'] leading-relaxed md:leading-7">
            {role}
          </p>
          <button
            onClick={onReadMore}
            className="py-2 md:py-3 w-full bg-primaryGreen mt-6 md:mt-8 lg:mt-10 rounded-[15px] hover:bg-primaryGreen/90 transition-colors"
          >
            <span className="justify-start text-white text-base md:text-lg font-normal font-['Poppins'] leading-loose">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
