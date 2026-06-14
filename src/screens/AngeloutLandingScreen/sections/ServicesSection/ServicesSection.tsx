import { ConsultationButton } from "../../../../components/ConsultationButton";
import { SectionHeading } from "../../../../components/SectionHeading";
import serviceAudit from "../../../../assets/figma/service-audit.png";
import serviceStrategy from "../../../../assets/figma/service-strategy.png";
import serviceLinkBuilding from "../../../../assets/figma/service-linkbuilding.png";

const services = [
  {
    title: ["SEO Audit and", "Competitor Analysis"],
    description:
      "We dive into your website's technical and on-page SEO, check your keyword rankings, backlinks, and content. Plus, we analyse your competitors to find ways to set your business apart and use their successful strategies to your advantage.",
    image: serviceAudit,
    imagePosition: "right" as const,
    imageClass: "object-top",
  },
  {
    title: ["SEO Strategy", "and Implementation"],
    description:
      "Our expert team of SaaS SEO consultants stays on top of the latest trends and search engine updates. We ensure every SEO action aligns with Google's ever-changing rules. Your company will get closer to its revenue goals with tailored and innovative SaaS SEO tips and tactics.",
    image: serviceStrategy,
    imagePosition: "left" as const,
    imageClass: "object-[center_-15%] h-[132%] top-[-16%]",
  },
  {
    title: ["Internal and External", "Link Building"],
    description:
      "We take a strategic and ethical approach to both internal and external link building, avoiding costly mistakes from poor backlink strategies. With careful anchor selection, validated external sources, and consistent execution, your SaaS website will become an authoritative industry resource.",
    image: serviceLinkBuilding,
    imagePosition: "right" as const,
    imageClass: "object-top",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center px-4 md:px-10 py-[100px] w-full bg-[linear-gradient(0deg,rgb(210,233,255)_0%,rgb(245,245,249)_100%)]"
      data-node-id="393:9796"
    >
      <div className="flex flex-col gap-20 w-full max-w-[1440px]">
        <SectionHeading>What we do</SectionHeading>

        <div className="flex flex-col gap-[100px]">
          {services.map((service) => (
            <div
              key={service.title.join(" ")}
              className={`flex flex-col ${
                service.imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-16 xl:gap-[100px] 2xl:gap-[165px] w-full`}
            >
              <div className="flex flex-col gap-[27px] items-start w-full lg:max-w-[664px]">
                <h3 className="[font-family:'Sora',Helvetica] font-semibold text-[#132d39] text-[40.5px] leading-[56.7px]">
                  {service.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="[font-family:'Sora',Helvetica] font-normal text-[#132d39] text-[20.25px] leading-[30.375px]">
                  {service.description}
                </p>
                <ConsultationButton variant="dark" />
              </div>

              <div className="relative w-full flex-1 min-h-[300px] lg:min-h-[438px] rounded-[36px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title.join(" ")}
                  className={`absolute inset-0 w-full h-full object-cover ${service.imageClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
