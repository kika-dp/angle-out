import arrowDark from "../assets/figma/arrow-dark.svg";
import arrowLight from "../assets/figma/arrow-light.svg";

type ConsultationButtonProps = {
  label?: string;
  variant?: "white" | "dark";
  className?: string;
  onClick?: () => void;
};

export const ConsultationButton = ({
  label = "Get a Free Consultation",
  variant = "white",
  className = "",
  onClick,
}: ConsultationButtonProps): JSX.Element => {
  const isWhite = variant === "white";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[9.319px] px-[29.121px] py-[15.143px] rounded-[931.868px] border-[1.165px] border-solid shrink-0 transition-opacity hover:opacity-90 ${
        isWhite
          ? "bg-white border-white text-black"
          : "bg-[#031226] border-[#031226] text-white"
      } ${className}`}
    >
      <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[20px] leading-[27.956px] whitespace-nowrap">
        {label}
      </span>
      <img
        src={isWhite ? arrowDark : arrowLight}
        alt=""
        className="w-[23.297px] h-[23.297px]"
      />
    </button>
  );
};
