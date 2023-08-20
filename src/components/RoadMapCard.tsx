import React from "react";

interface RoadMapCardProp {
  children: React.ReactNode;
  title: string;
  desc: string;
}

function RoadMapCard({ children, title, desc }: RoadMapCardProp) {
  return (
    <div className="lg:py-8 py-5 px-4 rounded-[10px] flex flex-col items-center bg-color-black-03 lg:flex-1 max-lg:w-full">
      <div className="mb-1.5">{children}</div>
      <h3 className="font-black lg:text-[18px] text-sm mb-[18px] text-center max-lg:mt-2.5">
        {title}
      </h3>
      <p className="lg:text-sm text-xs text-justify">{desc}</p>
    </div>
  );
}

export default RoadMapCard;
