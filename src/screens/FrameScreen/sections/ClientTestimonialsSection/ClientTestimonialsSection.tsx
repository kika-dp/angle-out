import { useState, useEffect, useRef } from "react";
import { CheckIcon, XIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const angleOutFeatures = [
  "All you need for success — marketing strategies, branding, analytics, innovation, development, consulting.",
  "Tools for your growth — project management, social media, outreach, automation, UX, mentorship.",
  "Solutions that elevate — research, content creation, audience engagement, visuals, strategy, coaching.",
  "Complete toolkit — data analysis, advertising, community building, optimization, design, support.",
  "Comprehensive resources — storytelling, outreach, performance metrics,",
];

const inHouseFeatures = [
  "Collaboration is key — consider bringing in additional contractors.",
  "No one can handle everything alone — it's helpful to hire support staff.",
  "Teamwork is essential — you may want to enlist more independent workers.",
  "Even the best can't manage it single-handedly — look for more external talent.",
  "You can't tackle every task solo — it's wise to find more freelance help.",
];

const comparisonBadges = [
  { text: "In-House Marketer", rotation: "-rotate-6", bg: "bg-[#1e1e1e]" },
  { text: "Freelancer", rotation: "-rotate-1", bg: "bg-[#c8cfda]" },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col w-full items-center justify-center gap-[40px] px-4 md:px-16 lg:px-20 py-[60px] bg-white">
      <div className="flex flex-col w-full max-w-[1200px] items-start gap-14">
        <header className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center">
            <h2 className="bg-[linear-gradient(180deg,rgba(42,53,106,1)_0%,rgba(15,24,41,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-semibold text-transparent text-2xl md:text-[40px] text-center leading-tight md:leading-[48px] tracking-[0] whitespace-nowrap">
              AngleOut
            </h2>
          </div>

          <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#212529] text-2xl md:text-[40px] text-center tracking-[0] leading-[50px]">
            vs
          </span>

          <div className="flex flex-col items-center md:items-start gap-2">
            {comparisonBadges.map((badge, index) => (
              <Badge
                key={index}
                className={`inline-flex items-center pt-[5.5px] pb-[5.7px] px-4 ${badge.bg} rounded-lg ${badge.rotation} h-auto hover:scale-105 transition-transform`}
              >
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg md:text-xl text-center tracking-[0] leading-[28px] whitespace-nowrap">
                  {badge.text}
                </span>
              </Badge>
            ))}
          </div>
        </header>

        <div className={`flex flex-col lg:flex-row items-start justify-center gap-6 w-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="flex-1 bg-[#0f1829] rounded-lg border-0 relative overflow-visible hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-16 left-[-43px] w-[287px] h-24 rotate-[-4.92deg] z-10">
              <div className="absolute top-0.5 -left-px w-72 h-[91px] bg-white rounded-[144.25px/45.63px] border-[3px] border-solid border-[#0f1829] rotate-[-6.07deg]" />
              <div className="absolute top-[26px] left-[39px] h-[43px] flex items-center justify-center rotate-[-6.42deg] [font-family:'Poppins',Helvetica] font-semibold text-[#132d39] text-[28.4px] tracking-[0] leading-[42.6px] whitespace-nowrap">
                With AngleOut
              </div>
            </div>

            <CardContent className="flex flex-col items-start gap-[39.99px] pt-[47.29px] pb-[0.01px] px-0">
              <ul className="flex flex-col items-start gap-[19.2px] px-8 py-0 w-full list-none">
                {angleOutFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 w-full group">
                    <CheckIcon className="w-5 h-5 text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="flex-1 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start pt-0 pb-10 px-5 w-full bg-[#0f1829] rounded-[0px_0px_8px_8px]">
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                  <Button className="inline-flex items-center justify-center gap-[9.32px] px-[24px] py-[12px] bg-white text-black rounded-full border-[1.16px] border-solid hover:bg-white/90 transition-all h-auto [font-family:'Montserrat',Helvetica] font-semibold text-base hover:scale-105 active:scale-95">
                    Get in Touch
                    <img
                      className="w-[23.3px] h-[23.3px]"
                      alt="Arrow icon"
                      src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
                    />
                  </Button>

                  <Button
                    variant="ghost"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-white hover:bg-white/10 transition-all h-auto [font-family:'Montserrat',Helvetica] font-semibold text-base"
                  >
                    Read Success Stories
                    <img
                      className="w-[23.3px] h-[23.3px]"
                      alt="Arrow icon"
                      src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
                    />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 rounded-lg border border-solid border-[#c8cfda] hover:shadow-xl transition-all duration-300">
            <CardContent className="flex flex-col items-start pt-10 pb-0 px-8">
              <div className="flex flex-col items-start gap-[19.3px] w-full">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#212529] text-[28px] tracking-[0] leading-[39.2px]">
                  With In-House Marketer
                </h3>

                <ul className="flex flex-col items-start gap-[19.2px] w-full list-none">
                  {inHouseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4 w-full group">
                      <XIcon className="w-5 h-5 text-[#212529] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <p className="flex-1 [font-family:'Poppins',Helvetica] font-normal text-[#212529] text-base tracking-[0] leading-[26px]">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
