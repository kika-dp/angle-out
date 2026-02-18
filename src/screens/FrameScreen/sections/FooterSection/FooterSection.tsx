import { ArrowRightIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const socialLinks = [
  {
    icon: YoutubeIcon,
    label: "Youtube",
    href: "https://youtube.com",
  },
  {
    icon: LinkedinIcon,
    label: "Linkedin",
    href: "https://linkedin.com",
  },
];

const serviceLinks = [
  { label: "Paid media", href: "#services" },
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
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="flex flex-col items-center justify-center w-full bg-[#0f1829]">
      <div className="flex flex-col max-w-[1440px] w-full px-6 md:px-16 lg:px-20 py-16 pb-12">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-start justify-between gap-12 lg:gap-16">
          {/* Left: CTA + Copyright */}
          <div className="flex flex-col items-start gap-8 flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white rounded-full border border-solid hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
            >
              <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[#031226] text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                Get a Free Consultation
              </span>
              <ArrowRightIcon className="w-6 h-6 text-[#031226]" />
            </Button>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff80] text-lg tracking-[0] leading-6 whitespace-nowrap">
              Copyright © 2026 AngleOut
            </p>
          </div>

          {/* Right: Navigation columns */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col items-start gap-5">
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[23.4px]">
                Socials
              </h3>

              <ul className="flex flex-col items-start gap-4">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-80 transition-all hover:translate-x-1"
                    >
                      <social.icon className="w-6 h-6 text-[#565c6b]" />
                      <span className="[font-family:'Fira_Sans',Helvetica] font-normal text-[#565c6b] text-lg tracking-[0] leading-6 whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-5">
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[23.4px]">
                Services
              </h3>

              <ul className="flex flex-col items-start gap-4">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      onClick={(e) => handleSmoothScroll(e, service.href)}
                      className="[font-family:'Fira_Sans',Helvetica] font-normal text-[#565c6b] text-lg tracking-[0] leading-6 whitespace-nowrap hover:text-[#7a8090] transition-all hover:translate-x-1 inline-block"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-5">
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[23.4px]">
                Resources
              </h3>

              <ul className="flex flex-col items-start gap-4">
                {resourceLinks.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      onClick={(e) => handleSmoothScroll(e, resource.href)}
                      className="[font-family:'Fira_Sans',Helvetica] font-normal text-[#565c6b] text-lg tracking-[0] leading-6 whitespace-nowrap hover:text-[#7a8090] transition-all hover:translate-x-1 inline-block"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-5">
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[23.4px]">
                Location
              </h3>

              <address className="not-italic [font-family:'Fira_Sans',Helvetica] font-normal text-[#565c6b] text-lg tracking-[0] leading-7">
                <a href="mailto:search@angleout.io" className="hover:text-[#7a8090] transition-colors">
                  search@angleout.io
                </a>
                <br />
                Bangalore SaaS SEO Agency
              </address>
            </div>
          </nav>
        </div>

        {/* Bottom divider */}
        <div className="w-full h-px bg-[#ffffff15] mt-12" />
      </div>
    </footer>
  );
};
