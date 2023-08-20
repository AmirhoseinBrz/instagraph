"use client";

import { ArrowDownIcon, CornometrIcon, VideoIcon } from "@/utils/svg";
import { useState } from "react";

interface ChapterMenuProps {
  title: string;
  subMenu: SubMenuProps[];
  duration: string;
}

interface SubMenuProps {
  id: number;
  title: string;
}

function ChapterMenu({ title, subMenu, duration }: ChapterMenuProps) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="flex items-center justify-between rounded-2xl bg-color-black-05 px-5 py-3 relative after:absolute after:top-1/3 lg:after:right-[-12px] after:right-[-7px] lg:after:w-[24px] lg:after:h-[24px] after:w-[16px] after:h-[16px] after:rounded-full after:bg-color-primary">
        <h3 className="text-[18px] font-extrabold">{title}</h3>
        <div className="flex lg:gap-[72px] justify-between basis-3/5">
          <div className="lg:flex hidden items-center gap-10">
            {subMenu && (
              <div className="flex text-sm gap-2">
                <VideoIcon />
                <span>تعداد ویدیو ها : {subMenu.length} ویدیو</span>
              </div>
            )}
            {duration ? (
              <div className="flex items-center gap-2">
                <CornometrIcon />
                <span>مدت زمان : {duration} ساعت</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>حجم پک : 4 گیگابایت</span>
              </div>
            )}
          </div>
          {duration && (
            <button
              className="flex items-center lg:gap-2 lg:py-2.5 py-[18px] lg:px-5 px-3.5 rounded-[10px] bg-[rgba(255,255,255,0.03)]"
              onClick={toggleHandler}
            >
              <span className="max-lg:hidden">مشاهده</span>
              <ArrowDownIcon />
            </button>
          )}
        </div>
      </div>
      {subMenu && (
        <div
          className={`${
            toggle ? "max-h-[1000px]" : ""
          } max-h-0 overflow-hidden mb-5 transition-all duration-300 ease-in-out relative before:absolute before:w-1 before:h-full before:border-r-2 before:border-dashed before:top-[-50px] before:right-5 before:border-color-black-5`}
        >
          <div className="[&>div]:flex [&>div]:justify-between [&>div]:font-semibold [&>div]:mb-2.5 [&>div]:py-6 [&>div]:px-4 [&>div]:bg-color-black-02 [&>div]:rounded-2xl my-4 pr-11 flex-1 [&>div]:relative [&>div]:before:absolute [&>div]:before:w-[22px] [&>div]:before:h-1 [&>div]:before:top-1/2 [&>div]:before:right-[-22px] [&>div]:before:border-color-black-5 [&>div]:before:border-t-2 [&>div]:before:border-dashed [&>div]:before:-z-10">
            {subMenu &&
              subMenu.map((title) => (
                <div key={title.id}>
                  <span>{title.title}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChapterMenu;
