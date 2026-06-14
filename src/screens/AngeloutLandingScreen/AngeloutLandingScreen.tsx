import "./angelout-fonts.css";
import { ResultsShowcaseSection } from "../FrameScreen/sections/ResultsShowcaseSection/ResultsShowcaseSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ResultsSection } from "./sections/ResultsSection/ResultsSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { LLMFeaturesSection } from "./sections/LLMFeaturesSection/LLMFeaturesSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { GoodFitSection } from "./sections/GoodFitSection/GoodFitSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { BookingSection } from "./sections/BookingSection/BookingSection";

export const AngeloutLandingScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start w-full relative bg-white"
      data-node-id="393:9547"
    >
      <HeroSection />
      <ResultsSection />
      <PricingSection />
      <LLMFeaturesSection />
      <ServicesSection />
      <ResultsShowcaseSection />
      <GoodFitSection />
      <FAQSection />
      <BookingSection />
    </div>
  );
};
