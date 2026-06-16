import { ConsultationButton } from "../../../../components/ConsultationButton";
import { SectionHeading } from "../../../../components/SectionHeading";
import arrowUpGreen from "../../../../assets/figma/arrow-up-green.svg";
import arrowDownGrey from "../../../../assets/figma/arrow-down-grey.svg";
import arrowLight from "../../../../assets/figma/arrow-light.svg";
import badgeEllipse from "../../../../assets/figma/badge-ellipse.svg";

const angleOutItems = [
  "All you need for success — marketing strategies, branding, analytics, innovation, development, consulting.",
  "Tools for your growth — project management, social media, outreach, automation, UX, mentorship.",
  "Solutions that elevate — research, content creation, audience engagement, visuals, strategy, coaching.",
  "Complete toolkit — data analysis, advertising, community building, optimization, design, support.",
  "Comprehensive resources — storytelling, outreach, performance metrics,",
];

const inHouseItems = [
  "Collaboration is key — consider bringing in additional contractors.",
  "No one can handle everything alone — it's helpful to hire support staff.",
  "Teamwork is essential — you may want to enlist more independent workers.",
  "Even the best can't manage it single-handedly — look for more external talent.",
  "You can't tackle every task solo — it's wise to find more freelance help.",
];

export const GoodFitSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center px-4 md:px-10 py-[64px] 3xl:py-[100px] w-full bg-[linear-gradient(0deg,rgb(210,233,255)_0%,rgb(245,245,249)_100%)]"
      data-node-id="398:8008"
      id="testimonials"
    >
      <div className="flex flex-col gap-[64px] 3xl:gap-[100px] items-center w-full max-w-[1200px] 3xl:max-w-[1440px]">
        <SectionHeading>Are we a good fit for your SaaS?</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <div className="relative bg-[#0f1829] rounded-[8px] pt-[47px] px-8 pb-10 flex flex-col gap-10">
            <div className="absolute -left-[47px] -top-[76px] flex items-center justify-center w-[294px] h-[120px] pointer-events-none">
              <div className="-rotate-[4.92deg] relative w-[287px] h-[96px]">
                <img
                  src={badgeEllipse}
                  alt=""
                  className="absolute -left-[5px] -top-[13px] w-[297px] h-[121px] -rotate-[6.07deg]"
                />
                <span className="absolute left-[37px] top-[39px] -rotate-[6.42deg] [font-family:'Poppins',Helvetica] font-semibold text-[#132d39] text-[28.41px] leading-[42.615px] whitespace-nowrap">
                  With AngleOut
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-[19.2px] mt-4">
              {angleOutItems.map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <img src={arrowUpGreen} alt="" className="w-5 h-5 shrink-0" />
                  <span className="[font-family:'Poppins',Helvetica] text-white text-[16px] leading-[27px] 3xl:text-[18px] 3xl:leading-[30.6px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <ConsultationButton label="Get in Touch" />
              <button
                type="button"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-white hover:opacity-80 transition-opacity"
              >
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-base leading-[24px] 3xl:text-[20px] 3xl:leading-[27.956px]">
                  Read Success Stories
                </span>
                <img src={arrowLight} alt="" className="w-[23.297px] h-[23.297px]" />
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#c8cfda] rounded-[8px] px-[33px] py-[41px]">
            <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-[#212529] text-[24px] leading-[34px] 3xl:text-[28px] 3xl:leading-[39.2px] mb-5">
              With In-House Marketer
            </h4>
            <ul className="flex flex-col gap-[19.2px]">
              {inHouseItems.map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <img src={arrowDownGrey} alt="" className="w-5 h-5 shrink-0" />
                  <span className="[font-family:'Poppins',Helvetica] text-[#212529] text-[16px] leading-[27px] 3xl:text-[18px] 3xl:leading-[30.6px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
