import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dana } from "@/constants/font";

export const metadata = {
  title: "اینستاگراف",
  description:
    "طراحی گرافیک · طراحی سایت · طراحی سایت · طراحی لوگو · مشاور اینستاگرام · آموزش فتوشاپ.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${dana.className} bg-[#171721]`}>
      <body>
        <div className="overflow-hidden">
          <div className="max-lg:px-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
