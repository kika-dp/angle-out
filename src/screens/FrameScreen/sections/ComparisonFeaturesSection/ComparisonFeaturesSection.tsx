import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    tag: "YOUTUBE SEO FOR SAAS",
    title: "Optimise videos to take up more space on the SERP",
    description:
      "We help your YouTube videos appear in Google and YouTube search results so your brand occupies more SERP real estate.",
    buttonText: "Get a Free Consultation",
    imageUrl:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/6827488153823ffbf4c9cc6b-group-2035763-png.png",
    imagePosition: "left",
    hasBlur: true,
    hasBorder: false,
  },
  {
    tag: "SAAS YOUTUBE GROWTH",
    title: "Dominate search results with optimized videos",
    description:
      "We make your videos highly visible on Google and YouTube, increasing your brand's presence in search results.",
    buttonText: "Request a Free Audit",
    imageUrl:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/68273d4df60fc7a98a5837a5-group-2035756-20-1--png.png",
    imagePosition: "right",
    hasBlur: true,
    hasBorder: false,
  },
  {
    tag: "IGNITE RAPID SEO GROWTH",
    title: "Accelerate growth with expert SEO",
    description:
      "We drive targeted traffic and boost your online visibility, delivering accelerated growth and tangible results.",
    buttonText: "Request a Free Audit",
    imageUrl:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/679d0043b814fb422105bbe2-frame-20129-avif.png",
    imagePosition: "left",
    hasBlur: true,
    hasBorder: true,
  },
];

export const ComparisonFeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[100px] px-4 md:px-16 lg:px-20 py-[60px] bg-[linear-gradient(0deg,rgba(210,233,255,1)_0%,rgba(245,245,249,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] overflow-hidden">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 w-full max-w-[1200px]"
        >
          {feature.imagePosition === "left" && (
            <div className="flex flex-col max-w-full lg:max-w-[540px] w-full lg:w-[540px] items-start relative group">
              {feature.hasBlur && (
                <div className="absolute w-[50.00%] h-full top-0 left-[50.00%] blur-[95.2px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(158,168,251,1)_0%,rgba(158,168,251,0)_100%)]" />
              )}

              <div
                className={`relative self-stretch w-full h-[320px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${feature.hasBorder
                  ? "rounded-[11.3px] border-[2.05px] border-solid border-[#12131c] shadow-[8px_8px_0px_#12131c]"
                  : ""
                  }`}
                style={{ backgroundImage: `url(${feature.imageUrl})` }}
              />
            </div>
          )}

          <div className="flex flex-col w-full lg:w-[540px] items-start gap-4">
            <div className="flex flex-col items-start w-full">
              <span className="[font-family:'Roboto',Helvetica] font-bold text-[#9ea8fb] text-sm tracking-[1.50px] leading-[21px] whitespace-nowrap">
                {feature.tag}
              </span>
            </div>

            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-2xl lg:text-[36px] tracking-[-1.5px] leading-tight lg:leading-[44px]">
                  {feature.title}
                </h2>

                <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-base lg:text-lg tracking-[0] leading-[26px]">
                  {feature.description}
                </p>
              </div>

              <Button className="inline-flex items-center justify-center gap-[9.32px] px-[27.96px] py-[13.98px] h-auto bg-[#031226] hover:bg-[#031226]/90 rounded-full border-[1.16px] border-solid transition-all hover:scale-105 active:scale-95">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-base lg:text-lg text-center tracking-[0] leading-[24px] whitespace-nowrap">
                  {feature.buttonText}
                </span>
                <ArrowRightIcon className="w-[23.3px] h-[23.3px]" />
              </Button>
            </div>
          </div>

          {feature.imagePosition === "right" && (
            <div className="flex flex-col max-w-full lg:max-w-[540px] w-full lg:w-[540px] items-start relative group">
              {feature.hasBlur && (
                <div className="absolute w-[50.00%] h-full top-0 left-[50.00%] blur-[95.2px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(158,168,251,1)_0%,rgba(158,168,251,0)_100%)]" />
              )}

              <div
                className={`relative self-stretch w-full h-[320px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105 ${feature.hasBorder
                  ? "rounded-[11.3px] border-[2.05px] border-solid border-[#12131c] shadow-[8px_8px_0px_#12131c]"
                  : ""
                  }`}
                style={{ backgroundImage: `url(${feature.imageUrl})` }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
};
