import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

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
    <section ref={sectionRef} className="flex flex-col items-center gap-8 px-4 md:px-16 lg:px-20 py-[100px] w-full bg-[linear-gradient(0deg,rgba(210,233,255,1)_0%,rgba(245,245,249,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="w-full max-w-[1440px]">
        <header className={`flex items-center justify-between mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-3xl md:text-4xl lg:text-[54px] tracking-[-2.00px] leading-tight lg:leading-[64px]">
            What our clients are saying
          </h2>
        </header>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                  className="pl-4 md:basis-full lg:basis-full"
                >
                  <Card
                    className={`border-[5px] ${testimonial.borderColor} rounded-3xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row items-stretch">
                        <img
                          className="w-full md:w-[462px] h-[400px] md:h-[575px] object-cover"
                          alt={testimonial.name}
                          src={testimonial.image}
                        />
                        <div className="flex flex-col gap-4 p-6 md:p-10 flex-1">
                          <div className="flex flex-col gap-8">
                            <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-xl md:text-2xl leading-relaxed">
                              &quot;{testimonial.quote}&quot;
                            </blockquote>
                            <div className="h-px bg-[#12131c]" />
                            <div className="flex flex-col gap-1">
                              <cite className="not-italic [font-family:'Roboto',Helvetica] font-normal text-[#12131c] text-[28px] md:text-[31.8px] leading-[38.2px]">
                                {testimonial.name}
                              </cite>
                              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#4f515e] text-base md:text-[18.5px] leading-[27.8px]">
                                {testimonial.title}
                              </p>
                            </div>
                            <div
                              className={`${testimonial.logoWidth} ${testimonial.logoHeight} bg-cover bg-center bg-no-repeat`}
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
            <div className="flex justify-end gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 hover:scale-110 transition-transform" />
              <CarouselNext className="static translate-y-0 hover:scale-110 transition-transform" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
