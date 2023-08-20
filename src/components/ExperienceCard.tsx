import { Allison } from "next/font/google";

const alison = Allison({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

interface ExperienceProp {
  children: React.ReactNode;
  string: string;
  englishTitle: string;
}

function Experience({ children, string, englishTitle }: ExperienceProp) {
  return (
    <div className="rounded-[18px] relative lg:flex-1 bg-[rgba(255,255,255,0.03)] text-center pb-2 pt-3 max-lg:w-full">
      <div className="absolute left-1/2 top-[-30%] -translate-x-1/2">
        {children}
      </div>
      <span
        className={`text-[29px] ${alison.className} bg-clip-text text-transparent bg-gradient-to-b from-color-primary to-text-gradiant whitespace-nowrap`}
      >
        {englishTitle}
      </span>
      <span className="text-[18px] font-black translate-y-[-50%] block">
        {string?.split(" ")?.map((word, index) =>
          word.includes("#") ? (
            <span className="text-red-500" key={index}>
              {word.replace("#", "")}{" "}
            </span>
          ) : (
            word + " "
          )
        )}
      </span>
    </div>
  );
}

export default Experience;
