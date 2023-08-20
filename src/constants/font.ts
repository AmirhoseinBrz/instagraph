import localFont from "next/font/local";

export const dana = localFont({
  src: [
    {
      path: "../../public/font/DanaFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/DanaFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/DanaFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/DanaFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/DanaFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/DanaFaNum-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "fallback",
});
