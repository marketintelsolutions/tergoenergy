import { FaArrowRightLong } from "react-icons/fa6";

const TergoServices = () => {
  return (
    <section className="py-[147px]">
      <div
        style={{
          backgroundImage: `url(/images/energy-bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[80%] max-w-[1595px] mx-auto py-[97px] border rounded-[50px]"
      >
        <div className="w-[85%] max-w-[1100px] mx-auto flex items-center gap-12 justify-between">
          <div>
            <h2 className="max-w-[561px] justify-start text-white text-6xl font-bold font-['Poppins'] leading-[64px]">
              Powering Africa's Energy Future
            </h2>
            <p className="mt-[60px] max-w-[563px] justify-start text-zinc-400 text-[28px] font-medium font-['Poppins'] leading-10">
              From renewable energy installations to comprehensive gas
              solutions, we deliver sustainable energy across residential,
              commercial, and industrial sectors.
            </p>
            <div className="mt-[96px]">
              <button className="bg-primaryGreen py-[12px] px-[30px] rounded-[8px]">
                <span className="text-white text-xl font-bold">
                  EXPLORE SERVICES
                </span>
              </button>
            </div>
          </div>
          <div className="h-fit flex flex-col gap-5">
            <div className="rounded-[30px] flex flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[14px] py-[50px] px-[60px]">
              <p className="justify-start text-white text-5xl font-semibold font-['Poppins'] leading-[50px]">
                2020
              </p>
              <p className="justify-start text-white text-2xl font-light font-['Poppins'] leading-normal">
                Established
              </p>
            </div>
            <div className="rounded-[30px] flex flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[14px] py-[50px] px-[60px]">
              <p className="justify-start text-white text-5xl font-semibold font-['Poppins'] leading-[50px]">
                3
              </p>
              <p className="justify-start text-white text-2xl font-light font-['Poppins'] leading-normal">
                Portfolio Companies
              </p>
            </div>
            <div className="rounded-[30px] flex flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[14px] py-[50px] px-[60px]">
              <p className="justify-start text-white text-5xl font-semibold font-['Poppins'] leading-[50px]">
                100%
              </p>
              <p className="justify-start text-white text-2xl font-light font-['Poppins'] leading-normal">
                Clean Energy Focus
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="self-stretch mt-[70px] text-center justify-start text-BGL-Color text-4xl font-semibold font-['Poppins'] leading-[54px]">
        Our Core Service Areas
      </h3>

      <div className="mt-[102px] min-w-[1100px] w-[85%] max-w-[1595px] mx-auto flex gap-[36px] justify-center flex-wrap">
        {[
          "Renewable Energy Solutions",
          "Gas Solutions & Trading",
          "Energy Storage Systems",
          "Power Generation",
          "Energy Consultation",
          "Maintenance & Support",
        ].map((item) => (
          <div
            key={item}
            className="max-w-[31%] rounded-[30px] flex flex-col bg-gradient-to-br from-[#1D4423] to-primaryGreen gap-[32px] py-[30px] px-[50px]"
          >
            <p className="max-w-[300px] justify-start text-white text-[42px] font-semibold font-['Poppins'] leading-[50px]">
              {item}
            </p>
            <button className="flex items-center text-zinc-400 text-[20px] gap-2">
              <span className="justify-start font-semibold font-['Poppins'] leading-normal">
                Learn More
              </span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
