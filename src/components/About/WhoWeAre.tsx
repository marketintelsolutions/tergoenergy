import React from "react";

const WhoWeAre = () => {
  return (
    <section className="mt-[60px] w-[85%] max-w-[1600px] mx-auto  ">
      <div className="w-full flex  justify-between gap-[50px]">
        <div className="min-h-full  rounded-[60px] w-[50%] max-w-[685px]">
          <img
            src="/images/manteeth.png"
            alt="man shining teeth"
            className="w-full h-full object-cover rounded-[60px]"
          />
        </div>
        <div className="h-full  w-[50%] max-w-[800px]">
          <h2 className="justify-start text-ash-g-Color text-5xl font-bold font-['Inter'] leading-10">
            Who we are
          </h2>
          <p className="mt-[30px]  text-justify justify-start text-black text-[21px] font-normal font-['Poppins'] leading-[33.68px]">
            We are one of Africa’s leading Investment Banking and Investment
            Groups headquartered in Lagos, Nigeria. We provide world class
            advisory services and products to clients that include Government,
            Corporations, Financial Institutions and Ultra High Net Worth
            Individuals. <br />
            <br />
            Founded in 1993 and formerly known as Banc Garanti Limited, BGL Plc
            commenced business as a Bank holding company with the aim of
            acquiring distressed or underperforming institutions in the Banking
            Sector. We have since expanded our Investment Banking business to
            become one of Nigeria’s most successful Financial Institutions and a
            very influential member of the Nigerian Stock Exchange. We have also
            participated in several landmark transactions and won industry
            awards across all our business areas. We are highly respected for
            our indepth research and product innovation; our ability to execute
            Investment Banking Mandates; our Securities Trading Platform and our
            unrivalled distribution capabilities. <br />
            <br />
            With Shareholders Funds in excess of N49bn (USD 300MM) and a
            presence in 28 locations throughout Nigeria, BGL is uniquely
            positioned to provide unrivalled full fledged investment banking
            services. <br />
            <br />
            With the emergence of Africa as a powerful investment destination
            and with the continued opening up and development of the continent’s
            financial markets, we have taken bold steps to internationalize our
            operations with plans for a footprint in key growing African Markets
            and also in developed Western Markets via a combination of alliances
            and BGL owned offices. This expansion will help strengthen our
            origination capabilities in Africa and also our distribution
            capabilities in developed western markets. <br />
            <br />
          </p>
        </div>
      </div>
      <p className="w-full max-w-[1596px] mt-[50px] text-justify justify-start text-black text-[21px] font-normal font-['Poppins'] leading-[33.68px]">
        Our success over the years can be attributed to our values and
        principles that put our clients at the centre of everything we do and
        the level of professionalism that permeates right through the
        organisation. We are driven to provide best in class products and
        services and our organizational culture promotes an environment of team
        work to ensure that we all work to achieve the same collective goal of
        maximizing value for all our stake holders. <br />
        <br />
        At BGL, we realise that our biggest assets are our people and our
        reputation. Integrity and honesty in everything we do is sacrosanct. We
        promote diversity and place much emphasis on the personal and
        professional development of all our people. We recruit the best talent
        in the industry and provide them with the resources and opportunities to
        flourish and realize their potential. <br />
        <br />
        These attributes are further exemplified in our mission statement,
        vision statement and values which we aim to inculcate as a behavioral
        practice for all our staff and ensure forms a critical part of our
        culture.
      </p>
    </section>
  );
};

export default WhoWeAre;
