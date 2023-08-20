"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

function StickyButton({ isInView }: any) {
  const [show, setShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setShow(isInView);
  }, [isInView]);

  return (
    <div
      className={`py-3 bg-color-secondary w-full fixed left-0 bottom-[-10%] flex ${
        show ? "" : "bottom-[0%]"
      } gap-3 items-center justify-center z-50 transition-all`}
    >
      <Link
        href=""
        className="py-3 px-4 rounded-[10px] bg-color-primary font-black lg:text-xl flex"
      >
        شرکت در دوره
      </Link>
      <div className="font-bold lg:text-2xl">
        <span className="max-lg:text-xl">980,000 </span>
        <span className="ml-3">تومان</span>
        <span className="opacity-30 line-through lg:text-2xl max-lg:block">
          3,200,000 تومان
        </span>
      </div>
    </div>
  );
}

const Container = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <div ref={ref}>
      <StickyButton isInView={isInView} />
    </div>
  );
};

export default Container;
