import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

import Logo from "../../../../assets/angleout-logo-transparent-23.png";

import FrameBg from "../../../../assets/Frame-bg.svg";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
];

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll to a section when arriving with a hash (e.g. from the Services page)
  useEffect(() => {
    if (!location.hash) return;
    const element = document.querySelector(location.hash);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  }, [location]);

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

    if (!href.startsWith("#")) {
      navigate(href);
    } else if (href === "#") {
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
    <section className="flex flex-col items-center gap-[60px] pt-0 pb-[60px] px-0 relative w-full overflow-hidden bg-[#0f1829]">
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-310px] right-[-270px] w-[758px] h-[758px] bg-[#7b94ff30] rounded-[379px] blur-[125px] pointer-events-none"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[264px] left-[-300px] w-[758px] h-[758px] bg-[#7b94ff20] rounded-[379px] blur-[125px] pointer-events-none"
      />

      <img
        src={FrameBg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-[1046px] object-cover pointer-events-none"
      />

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.05] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
        : "bg-transparent border-b border-transparent"
        }`}>
        <nav className={`flex items-center justify-center px-4 md:px-10 py-0 relative w-full transition-all duration-500 ${scrolled ? "min-h-[70px] md:min-h-[80px]" : "min-h-[100px] md:min-h-[120px]"
          }`}>
          <div className="flex max-w-[1440px] w-full items-center justify-between">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#", "Home")}
              className="hover:opacity-80 transition-all duration-300"
            >
              <img
                src={Logo}
                alt="AngleOut Logo"
                className={`object-contain transition-all duration-300 ${scrolled
                  ? "h-16 md:h-20 brightness-0"
                  : "h-28 md:h-36"
                  }`}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between gap-8 flex-1 max-w-[1266px] pl-10">
              <ul className="flex items-center gap-2">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)}>
                      <Button
                        variant="ghost"
                        className={`h-auto px-5 py-2.5 text-sm [font-family:'Montserrat',Helvetica] font-medium transition-all duration-300 rounded-full ${scrolled
                          ? `text-[#031226] hover:bg-[#031226]/5`
                          : `text-white hover:bg-white/10`
                          } ${activeSection === item.label ? "font-bold" : ""}`}
                      >
                        {item.label}
                      </Button>
                      {activeSection === item.label && (
                        <motion.div
                          layoutId="activeNavHighlight"
                          className={`absolute inset-0 rounded-full z-[-1] transition-colors duration-300 ${scrolled ? "bg-[#031226]/5 shadow-sm" : "bg-white/10 backdrop-blur-sm"
                            }`}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <Button className={`h-auto gap-2 px-7 py-3.5 rounded-full border border-solid transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${scrolled
                ? "bg-[#031226] text-white border-[#031226] hover:bg-[#031226]/90"
                : "bg-white text-black border-white hover:bg-white/95"
                }`}>
                <span className="[font-family:'Montserrat',Helvetica] font-bold text-sm">
                  Get a Free Consultation
                </span>
                <img
                  className={`w-4 h-4 transition-all duration-300 ${scrolled ? "invert" : ""}`}
                  alt="Arrow"
                  src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
                />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-full transition-all duration-300 z-50 ${scrolled
                ? "text-black bg-black/5 hover:bg-black/10"
                : "text-white bg-white/10 hover:bg-white/20"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <Badge className="h-auto flex items-center justify-center gap-2.5 px-6 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all hover:scale-105 cursor-default">
            <motion.img
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[20px] h-[20px]"
              alt="Trust icon"
              src="https://c.animaapp.com/mlna8z4qvTbWDz/img/vector.svg"
            />
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center tracking-wide whitespace-nowrap">
              Trusted by 100+ Clients Worldwide
            </span>
          </Badge>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="max-w-[1100px] px-4 [font-family:'Montserrat',Helvetica] font-extrabold text-white text-[clamp(2rem,6vw,4.5rem)] text-center tracking-tighter leading-[1.05] drop-shadow-2xl">
              Future-Proof SEO Strategy<br />for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d6bfe] to-[#9ea8fb]">B2B Growth</span>
            </h1>

            <div className="w-24 h-1.5 bg-[#4d6bfe] rounded-full" />

            <p className="max-w-[800px] px-4 [font-family:'Montserrat',Helvetica] font-medium text-white/70 text-base md:text-xl text-center tracking-normal leading-relaxed">
              We build and execute data-driven content strategies that boost rankings, engagement,
              and brand awareness and improve ROI.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center w-full"
        >
          <Button className="group relative h-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full border-[1.16px] border-solid hover:bg-white/95 transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-lg hover:shadow-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 [font-family:'Montserrat',Helvetica] font-semibold text-sm md:text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
              Get a Free Consultation
            </span>
            <img
              className="relative z-10 w-[18px] h-[18px]"
              alt="Arrow"
              src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container.svg"
            />
          </Button>
        </motion.div>
      </div>

      {/* Logo Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col max-w-[1440px] w-full items-center gap-4 px-4 z-10"
      >
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
      </motion.div>
    </section>
  );
};
