import { InstagramIcon } from "@/utils/svg";
import Link from "next/link";

function Header() {
  return (
    <div className="pt-8 lg:flex hidden items-center justify-between">
      <div className="flex gap-5 items-center">
        <InstagramIcon />
        <ul className="flex items-center gap-10 [&>li>a]:text-[18px]">
          <li>
            <Link href="">خرید دوره</Link>
          </li>
          <li>
            <Link href="">نمونه پروژه جدید</Link>
          </li>
          <li>
            <Link href="">درباره دوره</Link>
          </li>
          <li>
            <Link href="">سرفصل ها</Link>
          </li>
          <li>
            <Link href="">هنرجویان دوره</Link>
          </li>
        </ul>
      </div>
      <Link
        href=""
        className=" text-[18px] px-7 py-3 rounded-[10px] bg-color-secondary"
      >
        دریافت مشاوره
      </Link>
    </div>
  );
}

export default Header;
