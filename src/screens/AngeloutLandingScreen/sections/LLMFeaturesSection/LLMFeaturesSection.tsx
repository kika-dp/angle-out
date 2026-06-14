import { SectionHeading } from "../../../../components/SectionHeading";
import checkIcon from "../../../../assets/figma/check-icon.svg";
import llmContent from "../../../../assets/figma/llm-content.png";
import llmPublish from "../../../../assets/figma/llm-publish.png";

const contentItems = [
  "Audit the content LLMs are already referencing",
  "Identify missing topics or weak pages",
  "Create or update pages to fill those gaps.",
  "Interview your team for unique insights AI models can't find elsewhere",
  "Publish on your website and external platforms (Medium, LinkedIn Pulse, etc.)",
];

const publishItems = [
  "Identify the exact listicles and comparison articles LLMs cite when recommending vendors in your category",
  "Reach out and negotiate placements to get you included in those third-party sources",
  "Build a network of credible mentions that reinforce your positioning across the pages LLMs trust",
];

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-[7px] py-4">
    {items.map((item) => (
      <li key={item} className="relative pl-[35px] [font-family:'Fira_Sans',Helvetica] text-[#565c6b] text-[16px] leading-[25.6px]">
        <img
          src={checkIcon}
          alt=""
          className="absolute left-0 top-[2px] w-[21px] h-5"
        />
        {item}
      </li>
    ))}
  </ul>
);

const FeatureImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full max-w-[600px] rounded-[15px] shadow-[1px_0px_7px_0px_#808080] overflow-hidden shrink-0">
    <img src={src} alt={alt} className="w-full h-[300px] object-cover object-top" />
  </div>
);

export const LLMFeaturesSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col gap-20 items-center px-4 md:px-10 py-[100px] w-full bg-white"
      data-node-id="398:7199"
    >
      <div className="max-w-[624px] text-center">
        <SectionHeading as="h2">
          <span className="block">Here&apos;s How We&apos;ll Get You</span>
          <span className="block">Recommended on LLMs</span>
        </SectionHeading>
      </div>

      <div className="flex flex-col gap-[100px] w-full max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          <div className="flex flex-col gap-5 max-w-[616px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#06101e] text-[32px] leading-[38.4px]">
              Create Content Optimized
              <br />
              for AI Search (&amp; SEO!)
            </h3>
            <div>
              <p className="[font-family:'Fira_Sans',Helvetica] text-[#565c6b] text-[16px] leading-[20.8px] mb-0">
                What we do:
              </p>
              <FeatureList items={contentItems} />
              <p className="[font-family:'Fira_Sans',Helvetica] text-[#565c6b] text-[16px] leading-[20.8px] max-w-[616px]">
                Everything we create is structured for both SEO and AI Search
                visibility - so you&apos;re not sacrificing one for the other.
              </p>
            </div>
          </div>
          <FeatureImage src={llmContent} alt="Content optimized for AI search dashboard" />
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 w-full">
          <div className="flex flex-col gap-5 max-w-[744px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#06101e] text-[32px] leading-[38.4px]">
              Publish &amp; Get Referenced
              <br />
              Across the Web
            </h3>
            <div className="flex flex-col gap-3">
              <FeatureList items={publishItems} />
              <p className="[font-family:'Fira_Sans',Helvetica] text-[#565c6b] text-[16px] leading-[20.8px]">
                LLMs don&apos;t just look at your website; they look at what
                other people are saying about you. We make sure you&apos;re
                mentioned in the sources that matter, and if you&apos;re not, we
                get you in.
              </p>
            </div>
          </div>
          <FeatureImage src={llmPublish} alt="Publish and get referenced dashboard" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          <div className="flex flex-col gap-5 max-w-[616px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#06101e] text-[32px] leading-[38.4px]">
              Create Content Optimized
              <br />
              for AI Search (&amp; SEO!)
            </h3>
            <div>
              <p className="[font-family:'Fira_Sans',Helvetica] text-[#565c6b] text-[16px] leading-[20.8px]">
                What we do:
              </p>
              <FeatureList items={contentItems} />
              <p className="[font-family:'Fira_Sans',Helvetica] text-[#565c6b] text-[16px] leading-[20.8px] max-w-[616px]">
                Everything we create is structured for both SEO and AI Search
                visibility - so you&apos;re not sacrificing one for the other.
              </p>
            </div>
          </div>
          <FeatureImage src={llmContent} alt="Content optimized for AI search dashboard" />
        </div>
      </div>
    </section>
  );
};
