import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
];

export const HeroSection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["#", "#services", "#blog", "#testimonials"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] === "#" ? document.body : document.querySelector(sections[i]);
        if (section) {
          const sectionTop = sections[i] === "#" ? 0 : (section as HTMLElement).offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(label);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="flex flex-col items-center gap-[60px] pt-0 pb-[60px] px-0 relative w-full overflow-hidden bg-[linear-gradient(0deg,rgba(15,24,41,1)_0%,rgba(15,24,41,1)_100%),linear-gradient(0deg,rgba(210,233,255,1)_0%,rgba(245,245,249,1)_100%)]">
      <div className="absolute top-[-310px] right-[-270px] w-[758px] h-[758px] bg-[#7b94ff40] rounded-[379px] blur-[125px]" />

      <img
        className="absolute top-0 left-0 w-full h-[1046px] object-cover"
        alt="Background gradient"
        src="https://c.animaapp.com/mlna8z4qvTbWDz/img/group-1000003957.png"
      />

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
        : "bg-transparent"
        }`}>
        <nav className="flex min-h-[72px] items-center justify-center px-4 md:px-10 py-0 relative w-full">
          <div className="flex max-w-[1440px] w-full items-center justify-between">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#", "Home")}
              className={`[font-family:'Baloo_Bhaina-Regular',Helvetica] font-normal text-2xl md:text-3xl leading-10 tracking-[0] whitespace-nowrap hover:opacity-80 transition-all duration-300 ${scrolled ? "text-[#031226]" : "text-white"
                }`}
            >
              AngleOut.io
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between gap-6 flex-1 max-w-[1266px] pl-6">
              <ul className="flex items-center gap-0">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)}>
                      <Button
                        variant="ghost"
                        className={`h-auto px-5 py-3 text-sm [font-family:'Roboto',Helvetica] font-normal transition-all duration-300 ${scrolled
                          ? `text-[#031226] hover:bg-[#031226]/5 ${activeSection === item.label ? "bg-[#031226]/10 font-semibold" : ""}`
                          : `text-white hover:bg-white/10 ${activeSection === item.label ? "bg-white/10 font-semibold" : ""}`
                          }`}
                      >
                        {item.label}
                      </Button>
                    </a>
                  </li>
                ))}
              </ul>

              <Button className={`h-auto gap-2 px-6 py-3 rounded-full border border-solid transition-all duration-300 hover:scale-105 active:scale-95 ${scrolled
                ? "bg-[#031226] text-white hover:bg-[#031226]/90"
                : "bg-white text-black hover:bg-white/90"
                }`}>
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-sm">
                  Get a Free Consultation
                </span>
                <img
                  className={`w-5 h-5 transition-all duration-300 ${scrolled ? "invert" : ""}`}
                  alt="Arrow"
                  src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
                />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors z-50 ${scrolled ? "text-[#031226] hover:bg-[#031226]/10" : "text-white hover:bg-white/10"
                }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#0f1829] z-40 transition-all duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
            <ul className="flex flex-col items-center gap-4 w-full">
              {navItems.map((item, index) => (
                <li key={index} className="w-full">
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)} className="block w-full">
                    <Button
                      variant="ghost"
                      className={`h-auto w-full px-8 py-6 text-white text-xl [font-family:'Roboto',Helvetica] font-normal hover:bg-white/10 transition-all ${activeSection === item.label ? "bg-white/10 font-semibold" : ""
                        }`}
                    >
                      {item.label}
                    </Button>
                  </a>
                </li>
              ))}
            </ul>

            <Button className="h-auto gap-2 px-8 py-4 bg-white text-black rounded-full border border-solid hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-lg">
                Get a Free Consultation
              </span>
              <img
                className="w-5 h-5"
                alt="Arrow"
                src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
              />
            </Button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="w-full h-[72px]" />

      <div className="absolute top-[264px] right-[1624px] w-[758px] h-[758px] bg-[#7b94ff40] rounded-[379px] blur-[125px]" />

      <div className="flex flex-col items-center gap-12 relative w-full px-4 z-10">
        <div className="flex flex-col items-center gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <Badge className="h-auto flex items-center justify-center gap-[10.77px] px-[25.13px] py-[9.57px] bg-[#f5f5f933] rounded-[957.3px] border-[1.2px] border-solid border-[#dedee9] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#f5f5f933] transition-all hover:scale-105">
            <img
              className="w-[25.13px] h-[23.06px]"
              alt="Trust icon"
              src="https://c.animaapp.com/mlna8z4qvTbWDz/img/vector.svg"
            />
            <span className="[font-family:'Roboto',Helvetica] font-normal text-white text-[14.4px] text-center tracking-[0] leading-[21.5px] whitespace-nowrap">
              Trusted by 100+ Clients Worldwide
            </span>
            <img
              className="flex-[0_0_auto]"
              alt="Decoration"
              src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container-12.svg"
            />
          </Badge>

          <div className="flex flex-col items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h1 className="max-w-[1000px] px-4 [font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl md:text-5xl lg:text-[64px] text-center tracking-[-2px] leading-tight md:leading-[72px]">
              Future-Proof SEO Strategy<br />for B2B Growth
            </h1>

            <img
              className="flex-[0_0_auto] max-w-[600px] max-h-[40px]"
              alt="Decorative line"
              src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container-8.svg"
            />

            <p className="px-4 [font-family:'Montserrat',Helvetica] font-normal text-[#c2c2c2] text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed md:leading-8">
              We build and execute data-driven content strategies that boost rankings, engagement,<br />
              and brand awareness and improve ROI.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Button className="h-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-[931.87px] border-[1.16px] border-solid hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
            <span className="[font-family:'Montserrat',Helvetica] font-semibold text-sm md:text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
              Get a Free Consultation
            </span>
            <img
              className="w-[18px] h-[18px]"
              alt="Arrow"
              src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
            />
          </Button>
        </div>
      </div>

      {/* Logo Strip */}
      <div className="flex flex-col max-w-[1440px] w-full items-center gap-4 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] z-10">
        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#c2c2c2b2] text-sm md:text-base tracking-[0] leading-[24px] text-center">
          Trusted by growing B2B SaaS companies
        </p>

        <div className="w-full h-[42px] overflow-hidden">
          <img
            className="w-full h-[42px] object-contain opacity-85 contrast-125 brightness-110"
            alt="Company logos"
            src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container-16.svg"
          />
        </div>
      </div>
    </section>
  );
};
