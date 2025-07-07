import React from "react";

const RenewableEnergy = () => {
  return (
    <div className="w-[85%] max-w-[1600px] mx-auto my-[172px]">
      <div className="flex gap-12">
        <div>
          <h3 className="justify-start text-ash-g-Color text-2xl font-bold font-['Inter'] leading-10">
            COSOL Energy Solutions Limited
          </h3>
          <p className="max-w-[836px] mt-[50px] justify-start text-ash-g-Color text-[22px] font-normal font-['Inter'] leading-[37px]">
            At COSOL Energy, we are committed to delivering top-tier renewable
            energy solutions that drive sustainability and efficiency. Our
            comprehensive range of services is designed to meet the unique
            energy needs of both residential and commercial clients.
          </p>
          <p className="self-stretch mt-10 justify-start text-ash-g-Color text-[22px] font-normal font-['Inter'] leading-[37px]">
            We specialize in renewable energy installation including solar
            panels, wind turbines, and other clean energy systems. Our services
            include customized energy solutions, power audits, energy
            consultation, and advanced energy storage solutions with
            cutting-edge battery storage options.
            <br />
            <br />
            Our ongoing maintenance and support services ensure your renewable
            energy systems operate at peak efficiency through regular
            inspections, performance monitoring, and rapid response to any
            issues.
          </p>
        </div>
        <img
          src="/images/solar-panels.jpg"
          alt="solar panels"
          className="w-[43%] max-w-[685px] object-cover rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default RenewableEnergy;
