import { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

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
    percentage: "330%",
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
    percentage: "330%",
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
    percentage: "330%",
    metric: "Organic SEO Traffic",
  },
];

export const ResultsShowcaseSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-[100px] px-4 md:px-16 lg:px-20">
      <div className="w-full max-w-[1600px] mx-auto">
        <header className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-24 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-3xl md:text-4xl lg:text-[54px] tracking-[-2.00px] leading-tight lg:leading-[64px]">
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
        </header>

        <div className={`overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 24}px))` }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={`testimonial-${index}`}
                className={`flex-shrink-0 w-full bg-white rounded-[11.96px] border-[3.74px] ${testimonial.borderColor} shadow-none hover:shadow-lg transition-all duration-300 ${index < testimonials.length - 1 ? 'mr-6' : ''}`}
              >
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    <blockquote className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-lg md:text-xl leading-[23.9px]">
                      {testimonial.quote}
                    </blockquote>

                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-[59.81px] h-[59.81px] rounded-[11.96px] border-[1.5px] border-black">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </Avatar>

                        <div className="flex flex-col">
                          <cite className="not-italic [font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-[17.9px] leading-[21.5px]">
                            {testimonial.name}
                          </cite>
                          <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#12131c] text-[10.5px] leading-[15.7px] opacity-80">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`${testimonial.logoWidth} w-full h-[47.85px] bg-cover bg-center`}
                        style={{ backgroundImage: `url(${testimonial.logo})` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[23.18px]">
                    <img
                      src={testimonial.chart}
                      alt={`${testimonial.name} results chart`}
                      className="w-full object-contain"
                    />

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#12131c] text-[17.9px] leading-[23.3px]">
                          {testimonial.percentage}
                        </span>
                        <p className="[font-family:'Montserrat',Helvetica] font-normal text-[14.4px] leading-[20.1px]">
                          <span className="font-medium text-[#12131c]">
                            increase in{" "}
                          </span>
                          <span className="font-medium text-[#9ea8fb]">
                            {testimonial.metric}
                          </span>
                        </p>
                      </div>

                      <Button className="h-auto bg-[#031226] hover:bg-[#031226]/90 text-white rounded-full px-4 py-1.5 [font-family:'Montserrat',Helvetica] font-semibold text-base transition-all hover:scale-105 active:scale-95">
                        View Full Case Study
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
