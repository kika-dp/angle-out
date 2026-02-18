import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection/ClientTestimonialsSection";
import { ComparisonFeaturesSection } from "./sections/ComparisonFeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HelpAndFAQSection } from "./sections/HelpAndFAQSection/HelpAndFAQSection";
import { HeroSection } from "./sections/HeroSection";
import { HowWeHelpSection } from "./sections/HowWeHelpSection/HowWeHelpSection";
import { ResultsShowcaseSection } from "./sections/ResultsShowcaseSection/ResultsShowcaseSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection/ServicesOverviewSection";
import { VideoOptimizationSection } from "./sections/VideoOptimizationSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start w-full relative bg-white"
      data-model-id="18:11487"
    >
      <div className="w-full">
        <HeroSection />
      </div>
      <div id="results" className="w-full">
        <ResultsShowcaseSection />
      </div>
      <div id="services" className="w-full">
        <ComparisonFeaturesSection />
      </div>
      <div className="w-full">
        <ServicesOverviewSection />
      </div>
      <div id="testimonials" className="w-full">
        <HowWeHelpSection />
      </div>
      <div className="w-full">
        <ClientTestimonialsSection />
      </div>
      <div className="w-full">
        <HelpAndFAQSection />
      </div>
      <div className="w-full">
        <VideoOptimizationSection />
      </div>
      <div className="w-full">
        <FooterSection />
      </div>
    </div>
  );
};
