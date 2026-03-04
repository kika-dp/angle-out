import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { motion } from "framer-motion";

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
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 px-4 py-[100px] w-full overflow-hidden bg-[#0f1829]">
      <div className="absolute top-[-170px] right-[-180px] w-[758px] h-[758px] bg-[#7b94ff30] rounded-[379px] blur-[125px] pointer-events-none" />
      <div className="absolute bottom-[-170px] left-[-180px] w-[758px] h-[758px] bg-[#7b94ff20] rounded-[379px] blur-[125px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center w-full max-w-[1440px] px-10 text-center z-10"
      >
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight mb-4">
          How we can help you grow
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1000px] z-10"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-t border-white/10 transition-all hover:bg-white/[0.02]"
            >
              <AccordionTrigger className="px-4 md:px-8 py-6 hover:no-underline [&[data-state=open]>svg]:rotate-45 transition-all text-white">
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-lg md:text-xl lg:text-[22px] leading-tight text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-8 pb-8">
                <div className="text-white/70 text-base md:text-lg leading-relaxed [font-family:'Montserrat',Helvetica]">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};
