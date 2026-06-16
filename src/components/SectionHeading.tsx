type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export const SectionHeading = ({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps): JSX.Element => {
  return (
    <Tag
      className={`bg-clip-text text-transparent [font-family:'Poppins',Helvetica] font-semibold text-[40px] leading-[48px] 3xl:text-[54px] 3xl:leading-[64px] tracking-[-2px] text-center ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(42, 53, 106) 0%, rgb(15, 24, 41) 100%)",
      }}
    >
      {children}
    </Tag>
  );
};
