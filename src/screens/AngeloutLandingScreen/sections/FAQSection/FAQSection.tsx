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
    answer:
      "Yes, while we specialize in SaaS, we work with B2B companies across various industries including technology, professional services, and enterprise software. Our data-driven approach adapts to different business models and target audiences.",
  },
  {
    id: "item-2",
    question: "What makes you different from other link building agencies?",
    answer:
      "We focus on quality over quantity, building genuine relationships with authoritative sites in your industry. Our white-hat approach ensures sustainable results that won't be penalized by search engine updates.",
  },
  {
    id: "item-3",
    question: "Do you guarantee rankings or specific results?",
    answer:
      "While we can't guarantee specific rankings due to constantly changing algorithms, we do guarantee our commitment to best practices, transparent reporting, and continuous optimization based on data and results.",
  },
  {
    id: "item-4",
    question: "What makes your links better than other agencies?",
    answer:
      "We prioritize relevance, authority, and natural link placement. Every link is manually vetted, contextually relevant, and placed on sites with genuine traffic and domain authority in your industry.",
  },
  {
    id: "item-5",
    question: "How long does it take to see results?",
    answer:
      "SEO is a long-term investment. Most clients start seeing measurable improvements in 3-6 months, with significant growth typically occurring after 6-12 months of consistent optimization and content strategy execution.",
  },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col w-full items-center justify-center gap-6 px-4 md:px-16 lg:px-20 py-[100px] bg-white overflow-hidden"
      data-node-id="393:9805"
    >
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
          {faqItems.map((faq) => (
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
