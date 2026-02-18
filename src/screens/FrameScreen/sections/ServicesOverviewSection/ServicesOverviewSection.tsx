import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "Do you work with companies outside the SaaS industry?",
    answer: "Yes, while we specialize in SaaS, we work with B2B companies across various industries including technology, professional services, and enterprise software. Our data-driven approach adapts to different business models and target audiences.",
  },
  {
    id: "item-2",
    question: "What makes you different from other link building agencies?",
    answer: "We focus on quality over quantity, building genuine relationships with authoritative sites in your industry. Our white-hat approach ensures sustainable results that won't be penalized by search engine updates.",
  },
  {
    id: "item-3",
    question: "Do you guarantee rankings or specific results?",
    answer: "While we can't guarantee specific rankings due to constantly changing algorithms, we do guarantee our commitment to best practices, transparent reporting, and continuous optimization based on data and results.",
  },
  {
    id: "item-4",
    question: "What makes your links better than other agencies?",
    answer: "We prioritize relevance, authority, and natural link placement. Every link is manually vetted, contextually relevant, and placed on sites with genuine traffic and domain authority in your industry.",
  },
  {
    id: "item-5",
    question: "How long does it take to see results?",
    answer: "SEO is a long-term investment. Most clients start seeing measurable improvements in 3-6 months, with significant growth typically occurring after 6-12 months of consistent optimization and content strategy execution.",
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
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
    <section ref={sectionRef} className="relative flex flex-col items-center justify-center gap-8 px-4 py-[100px] w-full overflow-hidden bg-[linear-gradient(0deg,rgba(15,24,41,1)_0%,rgba(15,24,41,1)_100%),linear-gradient(180deg,rgba(42,53,106,1)_0%,rgba(15,24,41,1)_100%)]">
      <div className="absolute top-[-170px] right-[-180px] w-[758px] h-[758px] bg-[#7b94ff40] rounded-[379px] blur-[125px] pointer-events-none" />

      <div className="absolute top-[683px] right-[1588px] w-[758px] h-[758px] bg-[#7b94ff40] rounded-[379px] blur-[125px] pointer-events-none" />

      <div className={`flex items-center justify-center w-full max-w-[1440px] px-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-[54px] tracking-[-2.00px] leading-tight lg:leading-[64px] text-center">
          How we can help you
        </h2>
      </div>

      <div className={`w-full max-w-[1440px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-t border-white transition-all hover:bg-white/5"
            >
              <AccordionTrigger className="px-4 md:px-10 py-8 hover:no-underline [&[data-state=open]>svg]:rotate-45 transition-all">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-10 text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-10 pb-8">
                <div className="text-white/80 text-base md:text-lg leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
