import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    id: "item-1",
    question: "How do you report on progress and results?",
    answer:
      "You'll receive regular, comprehensive reports showing outreach efforts, secured placements, and the impact on key metrics. Our custom reporting platform provides full transparency into our work and your results, with both technical SEO metrics and business-focused outcomes.",
  },
  {
    id: "item-2",
    question: "What kind of SEO results can I expect?",
    answer: "Results vary by industry and competition, but most clients see measurable improvements in organic traffic within 3-6 months. We focus on sustainable, long-term growth through quality content, technical optimization, and strategic link building.",
  },
  {
    id: "item-3",
    question: "What is your approach to keyword research?",
    answer: "We conduct comprehensive keyword research analyzing search volume, competition, and user intent. Our approach balances high-volume keywords with long-tail opportunities that drive qualified traffic and conversions for your business.",
  },
  {
    id: "item-4",
    question: "How do you handle algorithm updates?",
    answer: "We stay ahead of algorithm changes by following white-hat SEO practices and focusing on user experience. Our strategies are built on fundamentals that withstand updates, and we continuously monitor and adapt to ensure your rankings remain stable.",
  },
  {
    id: "item-5",
    question: "What is the onboarding process like?",
    answer: "Our onboarding includes a comprehensive audit of your current SEO, competitor analysis, and strategy development. We'll align on goals, establish KPIs, and create a customized roadmap. The process typically takes 2-3 weeks before active optimization begins.",
  },
];

export const VideoOptimizationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 px-4 md:px-16 lg:px-20 py-[100px] bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center w-full max-w-[1440px]"
      >
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-2xl md:text-3xl lg:text-[40px] tracking-[-1.5px] leading-tight lg:leading-[48px] mb-8">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col w-full max-w-[1440px] items-start"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-t border-[#c2c2c2] data-[state=open]:backdrop-blur-[2.0px] data-[state=open]:backdrop-brightness-[110%] data-[state=open]:shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] data-[state=open]:bg-[linear-gradient(0deg,rgba(210,233,255,1)_0%,rgba(245,245,249,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] transition-all"
            >
              <AccordionTrigger className="px-4 md:px-10 py-5 hover:no-underline [&[data-state=open]>svg]:hidden">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[#1e1e1e] text-lg md:text-xl lg:text-[22px] leading-tight md:leading-8 text-left">
                  {faq.question}
                </span>
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="px-4 md:px-10 pb-8 pt-0">
                  <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#1e1e1e] text-base md:text-lg lg:text-xl leading-relaxed md:leading-[28px]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};
