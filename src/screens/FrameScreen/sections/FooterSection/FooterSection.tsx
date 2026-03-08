import { ArrowRightIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

import Logo from "../../../../assets/angleout-logo-transparent-23.png";

const socialLinks = [
  {
    icon: YoutubeIcon,
    label: "Youtube",
    href: "https://youtube.com",
    color: "hover:text-red-500"
  },
  {
    icon: LinkedinIcon,
    label: "Linkedin",
    href: "https://linkedin.com",
    color: "hover:text-blue-500"
  },
];

const serviceLinks = [
  { label: "Paid Media", href: "#services" },
  { label: "SEO Enablement", href: "#services" },
  { label: "SaaS PPC Agency", href: "#services" },
];

const resourceLinks = [
  { label: "Blog", href: "#blog" },
  { label: "Case Studies", href: "#results" },
];

export const FooterSection = (): JSX.Element => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: behavior });
      }
    }
  };

  const behavior: ScrollBehavior = "smooth";

  return (
    <footer className="footer-glow relative flex flex-col items-center justify-center w-full bg-[#0f1829] border-t border-white/5 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-full pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#4d6bfe]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#9ea8fb]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col max-w-[1440px] w-full px-6 md:px-16 lg:px-20 py-20 pb-12">
        <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-16 lg:gap-24 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-8 max-w-sm">
            <img
              src={Logo}
              alt="AngleOut Logo"
              className="h-40 md:h-56 w-auto object-contain"
            />
            <p className="[font-family:'Montserrat',Helvetica] font-medium text-white/50 text-base leading-relaxed">
              Accelerating B2B SaaS growth through data-driven content strategies and premium SEO execution.
            </p>
            <Button
              className="group h-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#031226] rounded-full border border-solid hover:bg-white/95 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="[font-family:'Montserrat',Helvetica] font-bold text-base leading-6 whitespace-nowrap">
                Start Growing
              </span>
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Navigation Grid */}
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 flex-1">
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-sm tracking-[0.1em] uppercase opacity-40">
                Services
              </h3>
              <ul className="flex flex-col items-start gap-4">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="[font-family:'Montserrat',Helvetica] font-medium text-white/60 text-base hover:text-white transition-all hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-sm tracking-[0.1em] uppercase opacity-40">
                Resources
              </h3>
              <ul className="flex flex-col items-start gap-4">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="[font-family:'Montserrat',Helvetica] font-medium text-white/60 text-base hover:text-white transition-all hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-6 col-span-2 md:col-span-1">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-sm tracking-[0.1em] uppercase opacity-40">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:search@angleout.io" className="[font-family:'Montserrat',Helvetica] font-semibold text-white/80 text-lg hover:text-[#4d6bfe] transition-colors decoration-1 underline-offset-4 hover:underline">
                  search@angleout.io
                </a>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-white/50 text-base leading-6">
                  Bangalore, India<br />
                  Global SaaS SEO Agency
                </p>
                <div className="flex gap-4 mt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-full bg-white/5 text-white/60 transition-all hover:bg-white/10 ${social.color} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <p className="[font-family:'Montserrat',Helvetica] font-medium text-white/30 text-sm">
            © 2026 AngleOut. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="[font-family:'Montserrat',Helvetica] font-medium text-white/30 text-sm hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="[font-family:'Montserrat',Helvetica] font-medium text-white/30 text-sm hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
