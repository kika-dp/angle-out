import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { ConsultationButton } from "../../../../components/ConsultationButton";
import Logo from "../../../../assets/angleout-logo-transparent-23.png";
import FrameBg from "../../../../assets/Frame-bg.svg";
import heroDashboard from "../../../../assets/figma/hero-dashboard.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["#", "#services", "#blog", "#testimonials"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section =
          sections[i] === "#" ? document.body : document.querySelector(sections[i]);
        if (section) {
          const sectionTop =
            sections[i] === "#" ? 0 : (section as HTMLElement).offsetTop;
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(label);

    // Routes back to the dashboard (optionally to a section via hash)
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="relative flex flex-col items-center gap-[100px] pb-[100px] w-full overflow-hidden bg-[#0f1829]"
      data-node-id="393:9548"
    >
      {/* Background grid */}
      <img
        src={FrameBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none opacity-100"
      />

      {/* Glow ellipses */}
      <div className="absolute right-[-270px] top-[-309.72px] w-[758px] h-[758px] bg-[#7b94ff30] rounded-full blur-[125px] pointer-events-none" />
      <div className="absolute left-[-462px] top-[264px] w-[758px] h-[758px] bg-[#7b94ff20] rounded-full blur-[125px] pointer-events-none" />

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.05] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
        : "bg-transparent border-b border-transparent"
        }`}>
        <nav className={`flex items-center justify-center px-4 md:px-10 py-0 relative w-full transition-all duration-500 ${scrolled ? "min-h-[70px] md:min-h-[80px]" : "min-h-[100px] md:min-h-[120px]"
          }`}>
          <div className="flex max-w-[1440px] w-full items-center justify-between">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", "Home")}
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
            <ConsultationButton />
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="w-full h-[72px]" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full max-w-[1440px] px-4 md:px-10">
        <div className="flex flex-col gap-10 items-start w-full lg:max-w-[623px] shrink-0">
          <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[clamp(3rem,6vw,100px)] leading-[1.08] tracking-[-3.1486px] max-w-[623px]">
            B2B SaaS<br />SEO Agency
          </h1>

          <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#c2c2c2] text-[clamp(1.125rem,2vw,24px)] leading-[40px] max-w-[623px]">
            Without strong SEO strategy for SaaS, you risk losing potential
            revenue. Trust us, we know how to get Google and Bing to love your
            website from first sight, even in a crowded market.
          </p>

          <ConsultationButton />
        </div>

        <div className="relative w-full max-w-[660px] min-w-0">
          <img
            src={heroDashboard}
            alt="B2B SaaS SEO analytics dashboard"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Logo strip */}
      <div className="relative z-10 flex flex-col gap-4 items-center w-full max-w-[1440px] px-4">
        <p className="[font-family:'Montserrat',Helvetica] font-medium text-[24px] leading-[34px] text-[rgba(194,194,194,0.7)] text-center">
          Trusted by growing B2B SaaS companies
        </p>
        <div className="w-full h-[42px] overflow-hidden">
          <img
            src="https://c.animaapp.com/mlna8z4qvTbWDz/img/container-16.svg"
            alt="Trusted company logos"
            className="w-full h-[42px] object-contain opacity-85 contrast-125 brightness-110"
          />
        </div>
      </div>
    </section>
  );
};
