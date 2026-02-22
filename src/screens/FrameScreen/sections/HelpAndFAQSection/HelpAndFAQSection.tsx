import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Alice Johnson",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-2-1.png",
    text: "Nova Rise has revolutionized our approach! Their calculated methods and meticulousness have greatly enhanced our web presence. They've become indispensable to our achievements, and we're extremely pleased with the outcomes. A definite success! 🚀",
  },
  {
    name: "Jamie Smith",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-3.png",
    text: "Phoenix SEO has changed the game! Their cutting-edge strategies and tailored support have revolutionized our online results. They're an essential component of our success, and we couldn't be more satisfied with the results. A truly ace ally! 💫Phoenix SEO has changed the game! Their cutting-edge strategies and tailored support have revolutionized our online results. They're an essential component of our success, and we couldn't be more satisfied with the results. A truly ace ally! 💫Phoenix SEO has changed the game! Their cutting-edge strategies and tailored support.",
  },
  {
    name: "Mia Thomas",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-5.png",
    text: "Aurora Digital is a data-centric powerhouse! Their detailed analysis and straightforward communication have produced outstanding results. They're a dependable and reliable ally, and we enthusiastically recommend them to anyone seeking a results-driven digital marketing firm. Aurora Digital is a data-centric powerhouse! Their detailed analysis and straightforward communication have produced outstanding results. They're a dependable and reliable ally, and we enthusiastically recommend them to anyone seeking a results-driven digital marketing firm. ✨",
  },
  {
    name: "Isabella Taylor",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-7.png",
    text: "Ethereal SEO has revolutionized our approach! Their all-encompassing strategies and tailored care have fueled substantial growth for our online business. They're a dependable and trustworthy ally, and we enthusiastically recommend them to anyone seeking a results-driven digital marketing firm. ⛰",
  },
  {
    name: "Ethan Moore",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-9.png",
    text: "Vortex Rise is a powerful entity! Their innovative strategy and dedication to quality have exceeded our highest expectations. They're a crucial part of our achievements, and we couldn't be more pleased with the outcomes. 🌀Vortex Rise is a powerful entity! Their innovative strategy and dedication to quality have exceeded our highest expectations. They're a crucial part of our achievements, and we couldn't be more pleased with the outcomes. 🌀Vortex Rise is a powerful entity! Their innovative strategy and dedication.",
  },
  {
    name: "Sophia Wilson",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-11.png",
    text: "Infinity Digital is truly invaluable! Their strategic understanding and keen eye for detail have significantly improved our online appeal. They're a joy to collaborate with, and we highly recommend them to anyone seeking a digital marketing agency that delivers results. 🌐",
  },
  {
    name: "Olivia Davis",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-14.png",
    text: "Zenith SEO has changed the game! Their inventive strategies and customized assistance have transformed our online presence. They're an essential component of our success, and we couldn't be more satisfied with the results. An excellent partner! 🔥",
  },
  {
    name: "David Jones",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-2-1.png",
    text: "Quantum Digital is a data-focused powerhouse! Their strategic thinking and transparent communication have led to remarkable results. They're a dependable and reliable ally, and we enthusiastically recommend them to anyone seeking a results-driven digital marketing firm. 💡",
  },
  {
    name: "Emily Brown",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-2-3.png",
    text: "Summit SEO has been a game-changer! Their in-depth research and tailored plans have transformed our website's efficiency. They're an invaluable part of our achievements, and we highly recommend them to anyone wanting to boost their online visibility. 📈Summit SEO has been a game-changer! Their in-depth research and tailored plans have transformed our website's efficiency. They're an invaluable part of our achievements.",
  },
  {
    name: "Robert Williams",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-19.png",
    text: "Peak Digital is simply outstanding! Their groundbreaking concepts and pursuit of perfection have gone beyond what we hoped for. 🌟",
  },
  {
    name: "Michael Miller",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-1-21.png",
    text: "Titan Digital is a premier digital marketing agency! Their knowledge and commitment have noticeably improved our website's performance.  💪",
  },
  {
    name: "Daniel Anderson",
    username: "@johnkappa",
    avatar: "https://c.animaapp.com/mlna8z4qvTbWDz/img/ellipse-2-3.png",
    text: "I'm beyond thrilled with Apex Digital! Their innovative team is deeply committed and genuinely values its clients.  🙌",
  },
];

// Split testimonials into 3 columns
const column1 = [testimonials[0], testimonials[3], testimonials[7], testimonials[10]];
const column2 = [testimonials[1], testimonials[5], testimonials[8], testimonials[11]];
const column3 = [testimonials[2], testimonials[4], testimonials[6], testimonials[9]];

interface TestimonialCardProps {
  name: string;
  username: string;
  avatar: string;
  text: string;
}

const TestimonialCard = ({ name, username, avatar, text }: TestimonialCardProps) => (
  <Card className="w-full bg-white rounded-[13px] shadow-[0px_10.4px_31.19px_#00000014] border-0 flex-shrink-0">
    <CardContent className="flex flex-col items-start justify-center gap-[15.6px] p-[25.99px]">
      <div className="flex flex-col gap-[10.4px]">
        <div className="flex items-center gap-[8.32px]">
          <Avatar className="w-[62.38px] h-[62.38px]">
            <AvatarImage
              src={avatar}
              alt={name}
              className="object-cover"
            />
            <AvatarFallback>
              {name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-[3.12px]">
            <div className="flex items-center gap-[5.2px]">
              <span className="[font-family:'Inter',Helvetica] font-bold text-black text-[16.6px] tracking-[-0.50px] leading-[normal]">
                {name}
              </span>
              <img
                className="w-[16.64px] h-[16.64px]"
                alt="Verified"
                src="https://c.animaapp.com/mlna8z4qvTbWDz/img/verified.svg"
              />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#8e8e8e] text-[16.6px] tracking-[-0.50px] leading-[normal]">
              {username}
            </span>
          </div>
        </div>

        <p className="[font-family:'Roboto',Helvetica] font-normal text-black text-[18.7px] tracking-[-0.56px] leading-[28.1px]">
          {text}
        </p>
      </div>
    </CardContent>
  </Card>
);

interface ScrollColumnProps {
  items: TestimonialCardProps[];
  direction: "up" | "down";
  duration: number;
}

const ScrollColumn = ({ items, direction, duration }: ScrollColumnProps) => {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  const animationName = direction === "up" ? "scrollUp" : "scrollDown";

  return (
    <div className="relative overflow-hidden h-full w-full">
      <div
        className="flex flex-col gap-5"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

export const HelpAndFAQSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-6 px-0 py-[60px] relative bg-[linear-gradient(0deg,rgba(15,24,41,1)_0%,rgba(15,24,41,1)_100%),linear-gradient(180deg,rgba(42,53,106,1)_0%,rgba(0,0,1,1)_100%)]">
      <header className="flex items-center justify-center relative w-full">
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] font-semibold text-white text-[40px] tracking-[-1.5px] leading-[48px] [font-family:'Montserrat',Helvetica]">
          Wall Of Love
        </h2>
      </header>

      <div className="relative w-full max-w-[1200px] h-[600px] overflow-hidden">
        {/* 3-column grid */}
        <div className="grid grid-cols-3 gap-5 h-full px-4">
          <ScrollColumn items={column1} direction="up" duration={30} />
          <ScrollColumn items={column2} direction="down" duration={35} />
          <ScrollColumn items={column3} direction="up" duration={32} />
        </div>

        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 w-full h-[163px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(15,24,41,1)_0%,rgba(15,24,41,0)_100%)] pointer-events-none z-10" />

        {/* Bottom fade overlay */}
        <div className="absolute left-0 bottom-0 w-full h-[168px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(15,24,41,1)_0%,rgba(15,24,41,0)_100%)] pointer-events-none z-10" />
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
