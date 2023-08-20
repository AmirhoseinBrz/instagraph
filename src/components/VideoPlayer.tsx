import {
  AlertIcon,
  CompletedIcon,
  CornometrIcon,
  PersonIcon,
  StatusIcon,
  StrokelineIcon,
} from "@/utils/svg";
import ChapterMenu from "./ChapterMenu";
import { CourseMap } from "@/constants/CourseMap";

function VideoPlayer() {
  return (
    <div>
      <div className="flex max-lg:flex-col justify-between gap-5 [&>div]:rounded-[30px] [&>div]:bg-color-black-03">
        <div className="p-5 flex-1 rounded-[30px]">
          <video width="100%" height="100%" controls suppressHydrationWarning>
            <source src="https://instagraph--video.storage.iran.liara.space/IMG_6645.mov" />
          </video>
        </div>
        <div className="[&>div]:border-b-2 [&>div]:border-dashed [&>div:last-child]:border-b-0  [&>div]:border-[rgba(255,255,255,0.20)] flex-1 px-6 py-1">
          <VideoTitle title={"مدرس دوره :"} desc={"حسین ملک زاده"}>
            <PersonIcon />
          </VideoTitle>
          <VideoTitle title={"مدت زمان دوره :"} desc={"20 ساعت"}>
            <CornometrIcon />
          </VideoTitle>
          <VideoTitle title={"سطح آموزش :"} desc={"مقدماتی تا پیشرفته"}>
            <AlertIcon />
          </VideoTitle>
          <VideoTitle title={"نحوه برگذاری:"} desc={"ویدئوی ضبط شده"}>
            <StatusIcon />
          </VideoTitle>
          <VideoTitle title={"درصد پیشرفت :"} desc={"100%"}>
            <CompletedIcon />
          </VideoTitle>
        </div>
      </div>
      <div className="mt-5">
        {CourseMap.map((param, index) => (
          <ChapterMenu {...param} key={index} />
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;

interface VideoTitleProp {
  title: string;
  desc: string;
  children: React.ReactNode;
}

const VideoTitle = ({ title, desc, children }: VideoTitleProp) => {
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
};
