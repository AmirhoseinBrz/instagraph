import { StrokelineIcon } from "@/utils/svg";

function VideoTitle({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center py-4 lg:text-base text-sm">
      <div className="flex gap-[9px] items-center">
        <div>{children}</div>
        <span>{title}</span>
      </div>
      <div className="flex gap-5 items-center">
        <span>{desc}</span>
        <StrokelineIcon />
      </div>
    </div>
  );
}

export default VideoTitle;
