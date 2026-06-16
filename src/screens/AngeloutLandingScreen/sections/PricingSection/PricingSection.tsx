import { ConsultationButton } from "../../../../components/ConsultationButton";
import { SectionHeading } from "../../../../components/SectionHeading";

export const PricingSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center px-4 md:px-10 py-[64px] 3xl:py-[100px] w-full bg-[linear-gradient(0deg,rgb(210,233,255)_0%,rgb(245,245,249)_100%)]"
      data-node-id="398:7784"
      id="services"
    >
      <div className="flex flex-col gap-10 items-center w-full max-w-[1200px] 3xl:max-w-[1440px]">
        <SectionHeading>
          &apos;Off the shelf&apos; SEO just won&apos;t cut it for B2B SaaS.
        </SectionHeading>

        <div className="flex flex-col lg:flex-row gap-9 3xl:gap-[50px] items-stretch w-full">
          <div className="bg-[#1a1a1a] flex flex-col p-8 3xl:p-12 rounded-[10px] w-full lg:flex-1 lg:min-w-0">
            <div className="flex flex-col gap-6">
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[38px] leading-[48px] 3xl:text-[48px] 3xl:leading-[64px] tracking-[-2px]">
                B2B SaaS SEO from Angleout
              </h3>
              <div className="flex flex-col gap-6 [font-family:'Montserrat',Helvetica] font-normal text-[#c2c2c2] text-[17px] leading-[26px] 3xl:text-[20px] 3xl:leading-[30px]">
                <p>
                  B2B SaaS demands a much more detailed and sophisticated
                  approach to marketing than your typical SME. Breaking B2B has
                  extensive experience in the world of B2B and is acutely aware
                  of the complexities that accompany SaaS.
                </p>
                <p>
                  We have carefully honed bespoke B2B SaaS SEO strategies that
                  we&apos;ve tested to perfection. We know what works and we know
                  what doesn&apos;t work. Don&apos;t throw your marketing budget
                  into the wind and hope for a favourable outcome, secure one —
                  With Breaking B2B.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] flex flex-col h-[400px] 3xl:h-[448px] rounded-[10px] overflow-hidden w-full lg:w-[460px] 3xl:w-[550px] lg:shrink-0">
            <div className="bg-[#2b61ee] h-[56px] 3xl:h-[60px] flex items-center justify-center shrink-0">
              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[26px] leading-[34px] 3xl:text-[32px] 3xl:leading-[40px]">
                PRICING
              </span>
            </div>
            <div className="flex flex-col gap-[26px] items-center justify-center flex-1 px-8 py-7 3xl:px-12 3xl:py-9">
              <div className="flex flex-col gap-4 items-center text-center">
                <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#c2c2c2] text-[17px] leading-[26px] 3xl:text-[20px] 3xl:leading-[30px]">
                  Our B2B SaaS SEO plans start at :
                </p>
                <div className="flex flex-col gap-1.5 items-center text-white">
                  <p className="[font-family:'Montserrat',Helvetica] font-bold text-[42px] leading-[52px] 3xl:text-[54px] 3xl:leading-[64px]">
                    $4k+ per month
                  </p>
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-[17px] leading-[26px] 3xl:text-[20px] 3xl:leading-[30px]">
                    (£3,000+ per month)
                  </p>
                </div>
              </div>
              <p className="[font-family:'Montserrat',Helvetica] font-normal text-white text-[16px] leading-[26px] 3xl:text-[18px] 3xl:leading-[30px] text-center max-w-[331px]">
                Average spend for a fast-growth B2B SEO campaign is $7k+ monthly
              </p>
              <ConsultationButton label="Book a call" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
