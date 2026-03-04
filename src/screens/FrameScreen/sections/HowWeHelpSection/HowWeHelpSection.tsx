import { useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The Scalerrs team is incredibly knowledgeable, professional, and a pleasure to work with. They consistently deliver high-quality articles and are very open to feedback, adjusting their processes to suit our needs as we go.",
    name: "Diane Leyman",
    title: "Content Marketing Manager @ Lyssna",
    image:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e3bdd3d25049a3f2c9a6a3-diane-20pdp-20f-png-2.png",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2acd5c5c520bdc492a22b-lyssnalogo-png-2.png",
    borderColor: "border-[#e09f3e]",
    logoWidth: "w-[314px]",
    logoHeight: "h-[81.24px]",
  },
  {
    quote:
      "The Scalerrs team is incredibly knowledgeable, professional, and a pleasure to work with. They consistently deliver high-quality articles and are very open to feedback, adjusting their processes to suit our needs as we go.",
    name: "Diane Leyman",
    title: "Content Marketing Manager @ Lyssna",
    image:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e3bdd3d25049a3f2c9a6a3-diane-20pdp-20f-png-3.png",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2ae596b8fe6f233d4404c-qwlogo-png-2.png",
    borderColor: "border-[#038ff7]",
    logoWidth: "w-[243.51px]",
    logoHeight: "h-[95px]",
  },
  {
    quote:
      "The Scalerrs team is incredibly knowledgeable, professional, and a pleasure to work with. They consistently deliver high-quality articles and are very open to feedback, adjusting their processes to suit our needs as we go.",
    name: "Diane Leyman",
    title: "Content Marketing Manager @ Lyssna",
    image:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e3bdd3d25049a3f2c9a6a3-diane-20pdp-20f-png-2.png",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2acd5c5c520bdc492a22b-lyssnalogo-png-3.png",
    borderColor: "border-[#e09f3e]",
    logoWidth: "w-[314px]",
    logoHeight: "h-[81.24px]",
  },
  {
    quote:
      "The Scalerrs team is incredibly knowledgeable, professional, and a pleasure to work with. They consistently deliver high-quality articles and are very open to feedback, adjusting their processes to suit our needs as we go.",
    name: "Diane Leyman",
    title: "Content Marketing Manager @ Lyssna",
    image:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e3bdd3d25049a3f2c9a6a3-diane-20pdp-20f-png-3.png",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2ae596b8fe6f233d4404c-qwlogo-png-3.png",
    borderColor: "border-[#038ff7]",
    logoWidth: "w-[243.51px]",
    logoHeight: "h-[95px]",
  },
];

export const HowWeHelpSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-6 px-4 md:px-16 lg:px-20 py-[100px] w-full bg-[linear-gradient(180deg,rgba(245,245,249,1)_0%,rgba(210,233,255,1)_100%)] overflow-hidden">
      <div className="w-full max-w-[1600px]">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between mb-20"
        >
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-2xl md:text-3xl lg:text-[40px] tracking-[-1.5px] leading-tight lg:leading-[48px]">
            What our clients are saying
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-[85%] lg:basis-[85%]"
                >
                  <Card
                    className={`border-[5px] ${testimonial.borderColor} rounded-[32px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]`}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row items-stretch">
                        <img
                          className="w-full md:w-[360px] h-[300px] md:h-[450px] object-cover"
                          alt={testimonial.name}
                          src={testimonial.image}
                        />
                        <div className="flex flex-col gap-3 p-6 md:p-10 flex-1 justify-center">
                          <div className="flex flex-col gap-8">
                            <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-base md:text-xl leading-relaxed italic opacity-90">
                              &quot;{testimonial.quote}&quot;
                            </blockquote>
                            <div className="h-px bg-black/5" />
                            <div className="flex flex-col gap-1">
                              <cite className="not-italic [font-family:'Montserrat',Helvetica] font-bold text-[#031226] text-xl md:text-2xl leading-[30px]">
                                {testimonial.name}
                              </cite>
                              <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#4f515e] text-base md:text-lg leading-[27.8px]">
                                {testimonial.title}
                              </p>
                            </div>
                            <div
                              className={`${testimonial.logoWidth} ${testimonial.logoHeight} bg-contain bg-center bg-no-repeat opacity-80`}
                              style={{
                                backgroundImage: `url(${testimonial.logo})`,
                              }}
                              role="img"
                              aria-label="Company logo"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-6 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-[#031226]/10 hover:bg-[#031226] hover:text-white transition-all duration-300" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-[#031226]/10 hover:bg-[#031226] hover:text-white transition-all duration-300" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
