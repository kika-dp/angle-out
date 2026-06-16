import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ConsultationButton } from "../../../../components/ConsultationButton";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// March 2026 starts on a Sunday and has 31 days
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const AVAILABLE_DAYS = [17, 19, 23, 24, 26, 31];

const socialLinks = [
  { label: "Youtube", href: "https://youtube.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
];

const serviceLinks = [
  { label: "Paid Media", href: "#services" },
  { label: "SEO Enablement", href: "#services" },
  { label: "SaaS PPC Agency", href: "#services" },
];

const resourceLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Case Studies", href: "#results" },
];

export const BookingSection = (): JSX.Element => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="relative flex flex-col items-center w-full overflow-hidden bg-[linear-gradient(180deg,#2A356A_0%,#0F1829_100%)]"
      data-node-id="394:5651"
    >
      <div className="absolute right-[-180px] top-[-170px] w-[758px] h-[758px] bg-[#7b94ff30] rounded-full blur-[125px] pointer-events-none" />

      {/* Booking */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-[1200px] 3xl:max-w-[1440px] px-4 md:px-10 pt-[64px] pb-[56px] 3xl:pt-[100px] 3xl:pb-[80px]">
        <div className="flex flex-col gap-8 max-w-[593px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] leading-[50px] 3xl:text-[54px] 3xl:leading-[68px] tracking-[-2px]">
            Ready to take the B2B SaaS industry by AngleOut
          </h2>
          <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#c2c2c2] text-[18px] leading-[30px] 3xl:text-[24px] 3xl:leading-[40px] max-w-[578px]">
            Schedule a 1:1 strategic call with our co-founder to see if
            AngleOut is the right fit for your SaaS.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-[80px] h-[80px] 3xl:w-[99px] 3xl:h-[99px] rounded-full bg-[#2b61ee] shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#4d6bfe] to-[#9ea8fb] flex items-center justify-center text-white text-2xl font-semibold">
                SS
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[20px] leading-[28px] 3xl:text-[24px] 3xl:leading-[30px]">
                  Sreeram Sharma
                </span>
              </div>
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#c2c2c2] text-[17px] leading-[26px] 3xl:text-[20px] 3xl:leading-[30px]">
                CEO &amp; Co-Founder at Angleout
              </span>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="w-full max-w-[560px] 3xl:max-w-[680px] bg-white rounded-[12px] shadow-[0px_4px_24px_rgba(0,0,0,0.15)] flex flex-col p-6 md:p-8 3xl:p-10 shrink-0">
          <p className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[20px] leading-[28px] 3xl:text-[24px] 3xl:leading-[32px] text-center mb-6">
            Select a Day
          </p>

          <div className="flex items-center justify-between px-2 mb-6">
            <button
              type="button"
              aria-label="Previous month"
              className="p-1 text-[#666] hover:text-[#031226] transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#031226] text-[18px] leading-[24px]">
              March 2026
            </span>
            <button
              type="button"
              aria-label="Next month"
              className="p-1 text-[#666] hover:text-[#031226] transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1">
            {WEEKDAYS.map((day) => (
              <div
                key={day}
                className="[font-family:'Montserrat',Helvetica] font-semibold text-[#8a8f98] text-[13px] leading-[20px] tracking-wide text-center py-2"
              >
                {day}
              </div>
            ))}

            {DAYS.map((day) => {
              const available = AVAILABLE_DAYS.includes(day);
              const isSelected = selectedDay === day;
              return (
                <div key={day} className="flex items-center justify-center py-1">
                  <button
                    type="button"
                    disabled={!available}
                    onClick={() => setSelectedDay(day)}
                    className={`relative w-11 h-11 rounded-full flex items-center justify-center [font-family:'Montserrat',Helvetica] text-[16px] leading-[24px] transition-colors ${
                      isSelected
                        ? "bg-[#2b61ee] text-white font-bold"
                        : available
                          ? "bg-[#eef2ff] text-[#2b61ee] font-bold hover:bg-[#dde5ff]"
                          : "text-[#9aa0a6] cursor-default"
                    }`}
                  >
                    {day}
                    {day === 11 && (
                      <span className="absolute bottom-1.5 w-1 h-1 rounded-full bg-[#2b61ee]" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 w-full flex flex-col items-center px-4 md:px-10 pb-20"
        data-node-id="393:9816"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full max-w-[1200px] 3xl:max-w-[1440px]">
          <div className="flex flex-col gap-8">
            <ConsultationButton />
            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px]">
              Copyright © 2026 AngleOut
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-[94px]">
            <div className="flex flex-col gap-5">
              <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
                Socials
              </h4>
              <ul className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
                Services
              </h4>
              <ul className="flex flex-col gap-4">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
                Resources
              </h4>
              <ul className="flex flex-col gap-4">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
                Location
              </h4>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[28px]">
                search@angleout.io
                <br />
                Bangalore SaaS SEO Agency
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
