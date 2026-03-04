import { useState, useEffect, useRef } from "react";
import { CheckIcon, ArrowDown } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const angleOutFeatures = [
  "All you need for success — marketing strategies, branding, analytics, innovation, development, consulting.",
  "Tools for your growth — project management, social media, outreach, automation, UX, mentorship.",
  "Solutions that elevate — research, content creation, audience engagement, visuals, strategy, coaching.",
  "Complete toolkit — data analysis, advertising, community building, optimization, design, support.",
  "Comprehensive resources — storytelling, outreach, performance metrics.",
];

const inHouseFeatures = [
  "Collaboration is key — consider bringing in additional contractors.",
  "No one can handle everything alone — it's helpful to hire support staff.",
  "Teamwork is essential — you may want to enlist more independent workers.",
  "Even the best can't manage it single-handedly — look for more external talent.",
  "You can't tackle every task solo — it's wise to find more freelance help.",
];

const freelancerFeatures = [
  "Freelancers can offer specialized skills that enhance your project.",
  "Expand your reach by utilizing freelancers for targeted campaigns.",
  "Freelancers can bring fresh perspectives and innovative ideas.",
  "Leverage freelancers to scale your efforts during peak times.",
  "Freelancers often have flexible schedules, allowing for faster turnarounds.",
  "Building relationships with freelancers can enrich your network.",
  "Freelancers often have flexible schedules, allowing for faster turnarounds.",
];

const comparisonBadges = [
  { id: "in-house", text: "In-House Marketer", rotation: "-rotate-6" },
  { id: "freelancer", text: "Freelancer", rotation: "-rotate-1" },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeType, setActiveType] = useState<"in-house" | "freelancer">("in-house");
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

          <div className="flex flex-col items-center md:items-start gap-3">
            {comparisonBadges.map((badge) => (
              <Badge
                key={badge.id}
                onClick={() => setActiveType(badge.id as any)}
                className={`inline-flex items-center pt-[5.5px] pb-[5.7px] px-4 cursor-pointer rounded-lg ${badge.rotation} h-auto transition-all duration-300 ${activeType === badge.id
                  ? "bg-[#1e1e1e] text-white shadow-lg scale-110 z-10"
                  : "bg-[#c8cfda] text-[#1e1e1e] hover:bg-[#b0b9c5]"
                  }`}
              >
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-lg md:text-xl text-center tracking-[0] leading-[28px] whitespace-nowrap">
                  {badge.text}
                </span>
              </Badge>
            ))}
          </div>
        </header>

        <div className={`flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

          <Card className="flex-1 rounded-lg border border-solid border-[#c8cfda] hover:shadow-xl transition-all duration-500 overflow-hidden">
            <CardContent className="flex flex-col items-start pt-10 pb-10 px-8">
              <div className="flex flex-col items-start gap-[19.3px] w-full">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#212529] text-[28px] tracking-[0] leading-[39.2px]">
                  {activeType === "in-house" ? "With In-House Marketer" : "With Freelancer"}
                </h3>

                <ul className={`flex flex-col items-start ${activeType === 'freelancer' ? 'gap-3' : 'gap-[19.2px]'} w-full list-none transition-all duration-300`}>
                  {(activeType === "in-house" ? inHouseFeatures : freelancerFeatures).map((feature, index) => (
                    <li key={index} className="flex items-center gap-4 w-full group">
                      <ArrowDown className="w-5 h-5 text-[#c8cfda] flex-shrink-0 group-hover:translate-y-1 transition-transform" />
                      <p className={`flex-1 [font-family:'Poppins',Helvetica] font-normal text-[#212529] tracking-[0] transition-all duration-300 ${activeType === 'freelancer' ? 'text-[15px] leading-[24px]' : 'text-base leading-[26px]'
                        }`}>
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
