import React, { useState } from "react";
import TeamItem from "./TeamItem";

const boardMembers = [
  {
    name: "Chris Oshiafi",
    role: "Chief Executive Officer",
    image: "chris.jpg",
    bio:
      "The Chief Executive Officer comes with over two decades of experience in Structured Finance, Consulting, Investment Banking and Venture Capital/Private Equity. He holds a 2nd Class (Upper Division) in Accounting & Finance from the University of London and a Master of Business Administration degree from the University of Lagos. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Insurance Institute of London, (ACII) UK and Chartered Institute of Taxation of Nigeria (ACIT). He also attended various programs at the prestigious Columbia Business School, New York, United States and INSEAD Business School, Fontainebleau, France, the IESE Business School in Barcelona, Spain and the Chief Executive Programme (CEP 17) Class of the Lagos Business School. He was the Pioneer Managing Director/CEO of Truebond Investments & Capital Limited, a Company with diverse interests in Oil & Gas, Telecommunications, Power and the Capital Markets. He has also worked with the firm of Damitop Consulting Limited as Managing Partner where he worked on a number of World Bank projects for the Federal and several State Governments. He served as Executive Director (Investment Banking) of Citizens International Bank (now Heritage Bank Limited) until his appointment as the pioneer Chief Executive Officer of PanAfrican Capital Holdings Limited.",
  },
  {
    name: "Sina Alimi",
    role: "Deputy Chief Executive Officer",
    image: "sina.jpg",
    bio:
      "Sina has considerable experience in Deal Structuring, Project Finance, Mergers & Acquisitions, Privatization and Asset Management. He is an Alumnus of the Lagos Business School's Chief Executive Programme (CEP 18) and IESE Business School, Barcelona, Spain. He holds a Bachelor of Science degree in Accounting (Second Class Upper) from the prestigious University of Lagos in 1989. He is also a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and Chartered Institute of Taxation of Nigeria (CITN). He joined the Investment Banking Division of Fountain Trust Bank Plc in 1997 and subsequently served as Group Head, Corporate Finance and Head, Investment Banking Group. While in Corporate Finance, he was actively involved in high profile projects and advisory mandates in the private sector as well as the privatization programme of the Federal Government of Nigeria.",
  },
  {
    name: "Eric Okoruwa",
    role: "Executive Director",
    image: "eric.jpg",
    bio:
      "Eric holds a master's degree in marketing and a bachelor's degree in business administration from the University of Lagos. He is a member of the Nigerian Institute of Management. Prior to joining PanAfrican Capital Holdings, he was actively involved in various high-profile projects, capital raising exercise and advisory mandates in the private sector as well as privatization programme of both the State and Federal governments at Profound Securities Limited, Fountain Trust Bank Plc and Refuge Home Savings and Loans Limited. He has industry experience close to 20 years in Investment Banking & Structured Finance. He has been involved in raising capital in excess of N200 billion in the Nigerian markets and excess of $1 billion dollars from foreign institutions for project execution. He has attended various international and local courses on company Valuation and Issues Pricing, Managing and Packaging Issues, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities & Structured Finance.",
  },
  {
    name: "Nentok Gomwalk",
    role: "Head, Finance, Investment & Strategy",
    image: "nentok.jpg",
    bio:
      "Nentok holds a master's degree in marketing and a bachelor's degree in business administration from the University of Lagos. He is a member of the Nigerian Institute of Management. Prior to joining PanAfrican Capital Holdings, he was actively involved in various high-profile projects, capital raising exercise and advisory mandates in the private sector as well as privatization programme of both the State and Federal governments at Profound Securities Limited, Fountain Trust Bank Plc and Refuge Home Savings and Loans Limited. He has industry experience close to 20 years in Investment Banking & Structured Finance. He has been involved in raising capital in excess of N200 billion in the Nigerian markets and excess of $1 billion dollars from foreign institutions for project execution. He has attended various international and local courses on company Valuation and Issues Pricing, Managing and Packaging Issues, Mergers & Acquisitions, Bonds & Derivatives, Asset Backed Securities & Structured Finance.",
  },

  {
    name: "Bolarinwa Sanni",
    role: "Director",
    image: "teammember.png",
    bio:
      "Bolarinwa Sanni is a seasoned investment banker with over 15 years of experience in financial advisory, investment banking, and capital raising across Africa. He brings a strategic approach to structuring complex financial transactions, with a strong focus on infrastructure, energy, and transformative investments that drive sustainable economic growth across the continent. As Executive Director, Bolarinwa oversees a transaction portfolio exceeding $10 billion, developing innovative, impact-driven financing solutions that align with Africa’s evolving financial landscape. His leadership has played a key role in unlocking capital for high-impact energy projects, including the facilitation of a $443 million term loan to support Etu Energias’ offshore acquisition in Angola—an energy transaction that underscores his ability to navigate complex cross-border financing for the power and resources sector. He was also instrumental in closing Afreximbank’s first-ever CONMED product - a milestone that highlights his expertise in pioneering new financial instruments tailored to emerging market needs. Beyond his transactional expertise, Bolarinwa is an active voice in Africa’s financial ecosystem, frequently engaging in macroeconomic trends and investment strategies through media, industry forums, and regulatory platforms. He holds an MBA in Finance from Lagos Business School and completed the Advanced Management Programme at IESE Business School in Barcelona. Bolarinwa is deeply committed to advancing Africa’s energy transition, leveraging finance to accelerate renewable energy adoption, and collaborating with forward-thinking leaders to shape a more sustainable future.",
  },
  {
    name: "Isioma Martins",
    role: "General Manager",
    image: "teammember.png",
    bio:
      "Isioma Martins boasts over 12 years of rich experience in the gas and energy industry, specializing in LPG systems, equipment, and applications. Her fervent advocacy for clean technology, environmental sustainability, and innovation drives her dedication to transitioning towards renewable energy sources. Equipped with a master's degree from Imperial College London, Isioma's expertise lies at the intersection of engineering and business management. She has spearheaded numerous projects, from conception to execution, focusing on the design, implementation, and optimization of LPG systems across industrial, commercial, and residential sectors. Her comprehensive knowledge spans storage facilities, reticulation systems, and stringent safety protocols. Isioma's career showcases exceptional problem-solving skills, meticulous attention to detail, and an unwavering commitment to delivering top-tier results. Currently serving as the General Manager of Tergo Energy Limited, a subsidiary of Pan African Capital Holdings and a company that is committed to the utilization of gas and renewable energy, Isioma plays a pivotal role in driving the strategic direction, operational excellence, and sustainable growth of the company, while ensuring alignment with industry best practices and regulatory requirements. Her leadership ethos extends beyond technical prowess to encompass advocacy and policy development. As a dedicated member of the NLPGA Safety and Technical Committee and NLPGA Safety and Technical Curriculum Development Committee, Isioma contributes significantly to shaping industry standards and advocating for best practices in safety and technical training. Her impact reverberates through her past involvement in the Advocacy and Technical subcommittees of the Lagos State LPG reforms committee. In her capacity as Treasurer and chair for the Online Programs Committee at Women in LPG Nigeria, Isioma collaborates with fellow impassioned women to foster empowerment through mentorship, training, and advocacy endeavors. Her dedication to fostering gender diversity and inclusion in the energy sector extends to her membership in WIEN (Women in Energy Network). Driven by an unwavering commitment to effecting positive change and leaving an indelible mark, Isioma continues to champion sustainability, innovation, and empowerment within the gas and energy industry and beyond.",
  },
];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState<any>();

  return (
    <section className="border py-12 md:py-20 lg:py-[120px]">
      <h3 className="justify-start text-primaryGreen text-center mt-12 md:mt-20 lg:mt-[95px] text-3xl md:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight md:leading-[1.2] lg:leading-[105px]">
        Leadership Team
      </h3>
      <p className="mt-2 md:mt-3 lg:mt-4 w-[95%] md:w-[85%] mx-auto max-w-[1600px] opacity-80 text-center justify-start text-black text-base md:text-lg lg:text-xl font-normal font-['Poppins'] leading-relaxed md:leading-7">
        Our leadership team brings together diverse expertise in energy,
        finance, and strategic management to drive Tergo Energy's mission of
        advancing Africa's clean energy transition.
      </p>
      <div className="rounded-[25px] md:rounded-[50px] py-8 md:py-12 lg:py-[70px] px-4 md:px-8 lg:px-[80px] shadow-[0px_69px_114px_rgba(58,64,58,0.08)]">
        <div className="mt-16 md:mt-32 lg:mt-[207px] w-[95%] xl:w-[95%] max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 md:gap-y-48 lg:gap-y-[4px] gap-6 md:gap-8 lg:gap-[50px] items-center mx-auto">
          {boardMembers.map((member, index) => (
            <TeamItem
              key={index}
              {...member}
              onReadMore={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999999] p-4">
          <div className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={`/images/${selectedMember.image}`}
                    alt={selectedMember.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black">
                      {selectedMember.name}
                    </h3>
                    <p className="text-primaryGreen font-medium">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurTeam;
