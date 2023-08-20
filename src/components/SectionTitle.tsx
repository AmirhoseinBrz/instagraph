import { Allison } from "next/font/google";

const alison = Allison({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

interface sectoinTitleProp {
  title: string;
  englishTitle: string;
  bgColor?: string;
}

function SectionTitle({
  title,
  englishTitle,
  bgColor = "#FD346E",
}: sectoinTitleProp) {
  return (
    <div className="flex justify-center text-center relative">
      <div className="flex flex-col items-center">
        <span
          className={`${alison.className} absolute bottom-2.5 bg-clip-text text-transparent bg-gradient-to-b from-white to-text-gradiant lg:text-[50px] text-[30px] block`}
        >
          {englishTitle}
        </span>
        <h3 className=" font-black lg:text-[18px] text-sm translate-y-[40%]">
          {title}
        </h3>
        <div
          className={`h-4 lg:w-3/4 w-[125%] rounded-[10px] border ${
            bgColor === "#FD346E"
              ? "border-color-primary shadow-[0_0_6px_0_#fd3463]"
              : "border-[#00FFF0] shadow-[0_0_6px_0_#00FFF0]"
          }`}
        />
      </div>
    </div>
  );
}

export default SectionTitle;
