import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PortfolioItem: React.FC<{
  img: string;
  icon: string;
  text: string;
  link: string;
  desc: string;
}> = ({ img, icon, text, link, desc }) => {
  const [isItems, setIsItems] = useState(false);

  const { pathname } = window.location;

  return (
    <div
      style={{
        backgroundImage: `url(/images/${img}.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full md:max-w-[32%] rounded-[24px] h-[250px] md:h-[302px]"
    >
      {pathname === link && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-[24px]"></div>
      )}
      <div className="absolute top-0 left-2.5 -translate-y-1/2">
        <img
          src={`/images/${icon}.png`}
          alt="icon"
          className="w-8 h-8 md:w-auto md:h-auto"
        />
      </div>
      <div
        onMouseEnter={() => setIsItems(true)}
        onMouseLeave={() => setIsItems(false)}
        className="h-full border rounded-[24px] bg-black/15 flex flex-col gap-2 justify-end px-3 md:px-4 py-4 md:py-[27px]"
      >
        <h4 className="justify-center text-white text-base md:text-lg lg:text-[22px] font-bold font-['Poppins'] leading-tight md:leading-7">
          {text}
        </h4>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isItems
              ? "max-h-40 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-2">
            <p className="text-white text-xs md:text-sm transition-opacity duration-300 ease-in-out">
              {desc}
            </p>
            <Link to={link}>
              <button className="p-2 md:p-3 bg-secondaryGreen rounded-full w-fit text-white transition-all duration-300 ease-in-out hover:bg-secondaryGreen/80 transform hover:scale-105">
                <span>
                  <FaChevronRight className="text-sm md:text-base" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
