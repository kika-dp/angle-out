import { ConsultationButton } from "../../../../components/ConsultationButton";

const socialLinks = [
  { label: "Youtube", href: "https://youtube.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
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
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
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
    <footer
      className="relative flex flex-col items-center px-4 md:px-10 py-20 w-full bg-[#0f1829] overflow-hidden"
      data-node-id="393:9816"
    >
      <div className="absolute left-[-225px] top-[-245px] w-[496px] h-[495px] bg-[#7b94ff20] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12 w-full max-w-[1440px]">
        <div className="flex flex-col gap-8">
          <ConsultationButton />
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px]">
            Copyright © 2026 AngleOut
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-[94px]">
          <div className="flex flex-col gap-5">
            <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
              Socials
            </h4>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
              Resources
            </h4>
            <ul className="flex flex-col gap-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[24px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[16px] leading-[24px]">
              Location
            </h4>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#c2c2c2] text-[16px] leading-[28px]">
              search@angleout.io
              <br />
              Bangalore SaaS SEO Agency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
