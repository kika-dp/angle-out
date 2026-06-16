import { useState, useRef, useEffect } from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "%");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: duration, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const testimonials = [
  {
    borderColor: "border-[#031226]",
    quote:
      '"Keywords in position 1-3 have grown from ~100 to 600 in 18 months. We\'ve seen significant traffic growth (3-5x) and more qualified leads from SEO than we were seeing previously. We\'re very pleased with these results... Scalerrs are also very revenue-oriented compared to other agencies I\'ve come across."',
    avatar:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e3be299f3e8b7edd40fd78-brendpdpp-png.png",
    name: "Brendan Connaughton",
    title: "Head of Growth @ Qwilr",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2ae596b8fe6f233d4404c-qwlogo-png.png",
    logoWidth: "max-w-[122.65px]",
    chart:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67ffb9fb6e19d3de9ace40ff-customer-20testimonial-20--20styled-20-.png",
    chartHeight: "h-[373px]",
    percentage: 330,
    metric: "Organic SEO Traffic",
  },
  {
    borderColor: "border-[#e09f3e]",
    quote:
      '"Keywords in position 1-3 have grown from ~100 to 600 in 18 months. We\'ve seen significant traffic growth (3-5x) and more qualified leads from SEO than we were seeing previously. We\'re very pleased with these results... Scalerrs are also very revenue-oriented compared to other agencies I\'ve come across."',
    avatar:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2d80a5e5d27bf551220be-claire-png.png",
    name: "Claire Brown",
    title: "Director of Marketing @ Lyssna",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2acd5c5c520bdc492a22b-lyssnalogo-png.png",
    logoWidth: "max-w-[184.94px]",
    chart:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e5b8bd0f58677f37ccd435-graph-png.png",
    chartHeight: "h-[372px]",
    percentage: 330,
    metric: "Organic SEO Traffic",
  },
  {
    borderColor: "border-[#038ff7]",
    quote:
      '"Keywords in position 1-3 have grown from ~100 to 600 in 18 months. We\'ve seen significant traffic growth (3-5x) and more qualified leads from SEO than we were seeing previously. We\'re very pleased with these results... Scalerrs are also very revenue-oriented compared to other agencies I\'ve come across."',
    avatar:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e3bf512eebe682c0af7a9e-mikk-png.png",
    name: "Michael Calberg",
    title: "VP Of Marketing @ Korona POS",
    logo: "https://c.animaapp.com/mlna8z4qvTbWDz/img/67e2d50b0e259d2a9bc3b123-korona-pos-logo-long-png.png",
    logoWidth: "max-w-[179.9px]",
    chart:
      "https://c.animaapp.com/mlna8z4qvTbWDz/img/67ffbaa58f9d375a517feb4a-customer-20testimonial-20--20styled-20-.png",
    chartHeight: "h-[373.75px]",
    percentage: 330,
    metric: "Organic SEO Traffic",
  },
];

export const ResultsShowcaseSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-[60px] px-4 md:px-16 lg:px-20 overflow-hidden">
      <div className="w-full max-w-[1280px] 3xl:max-w-[1600px] mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6"
        >
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-2xl md:text-3xl lg:text-[40px] tracking-[-1.5px] leading-tight lg:leading-[48px]">
            Some recent client results
          </h2>

          <nav
            className="flex items-center gap-[21.91px]"
            aria-label="Carousel navigation"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="h-auto w-auto p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#031226]" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="h-auto w-auto p-2 hover:bg-gray-100 rounded-full transition-all hover:scale-110 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6 text-[#031226]" />
            </Button>
          </nav>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 504}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={`testimonial-${index}`}
                className={`flex-shrink-0 w-[480px] bg-white rounded-[11.96px] border-[3.74px] ${testimonial.borderColor} shadow-none hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-5 flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-[13px] leading-[19px]">
                      {testimonial.quote}
                    </blockquote>

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="w-[42px] h-[42px] rounded-[8px] border-[1.5px] border-black">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </Avatar>

                        <div className="flex flex-col">
                          <cite className="not-italic [font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[14px] leading-[18px]">
                            {testimonial.name}
                          </cite>
                          <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-[9px] leading-[13px] opacity-80">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`${testimonial.logoWidth} w-full h-[35px] bg-contain bg-no-repeat bg-left`}
                        style={{ backgroundImage: `url(${testimonial.logo})` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <img
                      src={testimonial.chart}
                      alt={`${testimonial.name} results chart`}
                      className="w-full object-contain"
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#12131c] text-[14px] leading-[18px]">
                          <Counter value={testimonial.percentage} />
                        </span>
                        <p className="[font-family:'Montserrat',Helvetica] font-normal text-[12px] leading-[16px]">
                          <span className="font-medium text-[#12131c]">
                            increase in{" "}
                          </span>
                          <span className="font-medium text-[#9ea8fb]">
                            {testimonial.metric}
                          </span>
                        </p>
                      </div>

                      <Button className="h-auto bg-[#031226] hover:bg-[#031226]/90 text-white rounded-full px-3 py-1 [font-family:'Montserrat',Helvetica] font-semibold text-xs transition-all hover:scale-105 active:scale-95">
                        View Full Case Study
                        <ArrowRightIcon className="w-4 h-4 ml-1.5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#031226] w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
