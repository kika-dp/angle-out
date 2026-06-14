import { useState } from "react";
import resultsVideo from "../../../../assets/figma/results-video.webp";
import profileUdita from "../../../../assets/figma/profile-udita.webp";
import profileTejaswi from "../../../../assets/figma/profile-tejaswi.webp";
import profileDivyesh from "../../../../assets/figma/profile-divyesh.webp";
import profileKaranvir from "../../../../assets/figma/profile-karanvir.webp";

const clients = [
  {
    id: "udita",
    name: "Udita Pal",
    role: "Co-founder, Salt",
    stage: "SaaS Start-up | Seed Stage",
    tagline: "Unlocked 3x faster experimentation with full accountability.",
    quote:
      '"We were doing ads, campaigns we were doing everything but the biggest game change for us was to understand the logic behind why and how things are working, and that only came because your smart team was in picture."',
    video: resultsVideo,
    avatar: profileUdita,
    tabRole: "Co-founder, Salt",
    activeBorder: "border-[rgba(234,198,117,0.25)]",
    activeBg: "bg-[#0f1829]",
    activeText: "text-white",
  },
  {
    id: "tejaswi",
    name: "Tejaswi",
    role: "Director, Fielddrive",
    stage: "",
    tagline: "",
    quote: "",
    video: resultsVideo,
    avatar: profileTejaswi,
    tabRole: "Director, Fielddrive",
    activeBorder: "",
    activeBg: "bg-white",
    activeText: "text-[#031226]",
  },
  {
    id: "divyesh",
    name: "Divyesh",
    role: "Co-founder, Gumlet",
    stage: "",
    tagline: "",
    quote: "",
    video: resultsVideo,
    avatar: profileDivyesh,
    tabRole: "Co-founder, Gumlet",
    activeBorder: "",
    activeBg: "bg-white",
    activeText: "text-[#031226]",
  },
  {
    id: "karanvir",
    name: "Karanvir",
    role: "Director, Hatica",
    stage: "",
    tagline: "",
    quote: "",
    video: resultsVideo,
    avatar: profileKaranvir,
    tabRole: "Director, Hatica",
    activeBorder: "",
    activeBg: "bg-white",
    activeText: "text-[#031226]",
  },
];

export const ResultsSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = clients[activeIndex];

  return (
    <section
      className="flex flex-col items-center px-4 md:px-10 py-[100px] w-full bg-white"
      data-node-id="393:9722"
      id="results"
    >
      <div className="flex flex-col gap-8 items-center w-full max-w-[1440px]">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[54px] leading-[64px] tracking-[-2px] text-center">
          Some recent client results
        </h2>

        <div className="flex flex-col gap-[36px] items-center pt-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
            <div className="flex flex-col gap-8 items-start w-full lg:max-w-[657px]">
              <div className="flex flex-col gap-3 items-start">
                <p className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[48px] leading-[56px] tracking-[-2px]">
                  {active.name}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[24px] leading-[32px]">
                    {active.role}
                  </p>
                  {active.stage && (
                    <p className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[24px] leading-[32px]">
                      {active.stage}
                    </p>
                  )}
                </div>
                {active.tagline && (
                  <p className="[font-family:'Montserrat',Helvetica] font-semibold italic text-[#666] text-[20px] leading-[28px]">
                    {active.tagline}
                  </p>
                )}
              </div>
              {active.quote && (
                <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#666] text-[24px] leading-[34px] max-w-[637px]">
                  {active.quote}
                </p>
              )}
            </div>

            <div className="border-[#038ff7] border-[2.907px] border-solid rounded-[12.044px] overflow-hidden w-full max-w-[660px] min-w-0">
              <img
                src={active.video}
                alt={`${active.name} testimonial video thumbnail`}
                className="w-full h-[371px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26.66px] w-full">
            {clients.map((client, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={client.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-[18.113px] p-[18.113px] rounded-[10px] border-[1.132px] border-solid text-left transition-colors ${
                    isActive
                      ? "bg-[#0f1829] border-[rgba(234,198,117,0.25)] shadow-[0px_1.132px_1.698px_rgba(0,0,0,0.2)]"
                      : "bg-white border-[rgba(122,122,122,0.23)]"
                  }`}
                >
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className="w-[66px] h-[66px] rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className={`[font-family:'Montserrat',Helvetica] font-semibold text-[24px] leading-[32px] truncate ${
                        isActive ? "text-white" : "text-[#031226]"
                      }`}
                    >
                      {client.name}
                    </span>
                    <span
                      className={`[font-family:'Montserrat',Helvetica] font-semibold text-[20px] leading-[32px] truncate ${
                        isActive ? "text-white" : "text-[#031226]"
                      }`}
                    >
                      {client.tabRole}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
