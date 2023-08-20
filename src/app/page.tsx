import Link from "next/link";
import Image from "next/image";
import {
  BrainIcon,
  CameraIcon,
  ClassromIcon,
  CleanerIcon,
  ComputerMouseIcon,
  DesignIcon,
  GroupArrowDownIcon,
  PeopleIcon,
  PhotoshopIcon,
  SpringIcon,
} from "@/utils/svg";
import UserImg from "../../public/user.png";
import RoadMapCard from "@/components/RoadMapCard";
import SectionTitle from "@/components/SectionTitle";
import Experience from "@/components/ExperienceCard";
import VideoPlayer from "@/components/VideoPlayer";
import Slider from "@/components/Slider";
import Header from "@/components/Header";
import StickyButton from "@/components/StickyButton";

export default function Home() {
  return (
    <main>
      <div className="bg-header">
        <div className="max-w-[1086px] mx-auto">
          <Header />
          <div className="lg:mt-10 mt-2.5 flex max-lg:flex-col-reverse items-center justify-center lg:gap-28 animate-fade-slow">
            <div className="lg:pt-14 pt-1.5 font-light max-lg:text-center">
              <h1 className="lg:text-[27px] tracking-[-0.27px]">
                حرفه ای ترین دوره طراحی پست و استوری اینستاگرام
              </h1>
              <h1 className="lg:text-[33px] text-xl mt-2 tracking-[-0.165px]">
                پک آبجکت‌های متحرک + دوره طراحی تیزر
              </h1>
              <div className="my-4 mt-5 pt-5 border-2 border-[#5D00D0] lg:text-[75px] text-[45px] relative [&>span]:bg-color-primary [&>span]:absolute lg:[&>span]:h-4 lg:[&>span]:w-3 [&>span]:h-2 [&>span]:w-2">
                <span className="top-[-7%] right-[-1%] " />
                <span className="top-[-7%] left-1/2 " />
                <span className="top-[-7%] left-[-1%] " />
                <h1 className="text-center font-black drop-shadow-[0_0_20px_rgba(255,255,255,0.62)]">
                  اینستــــــاگراف
                </h1>
                <span className="bottom-[-7%] right-[-1%] " />
                <span className="bottom-[-7%] left-1/2 " />
                <span className="bottom-[-7%] left-[-1%] " />
              </div>
              <div className="flex items-center justify-between lg:gap-4 gap-1">
                <span className="text-color-primary lg:text-[45px] text-[29px] font-black drop-shadow-[0_0_15px_rgba(253,52,110,0.55)]">
                  60% تخفیف ویژه
                </span>
                <div>
                  <div className="lg:text-3xl font-semibold">
                    <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.62)]">
                      980,000{" "}
                    </span>
                    <span>تومان</span>
                  </div>
                  <span className="opacity-30 block line-through lg:text-2xl">
                    3,200,000 تومان
                  </span>
                </div>
              </div>
              <Link
                href="/"
                className="mt-4 inline-block lg:text-2xl lg:rounded-[10px] rounded-[15px] lg:py-6 lg:px-12 py-4 relative font-black bg-color-secondary shadow-[0_0_40px_0_#5d00d0] max-lg:w-full"
              >
                شرکت در دوره
                <div className="absolute lg:left-[-10%] left-[10%] top-2/3">
                  <ComputerMouseIcon />
                </div>
              </Link>
            </div>
            <div className="relative after:absolute after:w-full after:h-1/2 after:bg-gradient-to-b after:from-[rgba(255,0,0,0)] after:to-[rgba(23,23,33,1)]  after:bottom-0 after:left-0">
              <Image priority src={UserImg} width={440} height={530} alt="" />
              <div className="absolute top-16 w-full h-[55%] -z-10 flex lg:gap-8 gap-4 px-[7%] ">
                <div className="flex-1 bg-color-primary rounded-[50px] drop-shadow-[0_0_30px_#FD346E]" />
                <div className="flex-[8] bg-color-secondary rounded-[30px] drop-shadow-[0_0_30px_#5D00D0]" />
                <div className="flex-1 bg-color-primary rounded-[50px] drop-shadow-[0_0_30px_#FD346E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <StickyButton />
      </div>
      <div className="max-w-[1086px] mx-auto">
        <div className="lg:hidden mt-14 flex justify-center animate-bounce">
          <GroupArrowDownIcon />
        </div>
        <div className="max-lg:flex max-lg:flex-col-reverse lg:relative lg:background-blur lg:after:top-1/2 lg:after:right-[-20%] after:bg-color-primary lg:before:top-0 lg:before:left-[-20%] lg:before:bg-color-secondary">
          <div className="mt-20 flex gap-5 max-lg:flex-wrap animate-fade-slow">
            <Experience
              string={"8# سال سابقه کار"}
              englishTitle={"8 years of work experience"}
            >
              <BrainIcon />
            </Experience>
            <Experience
              string={"طراحی #متحرک بافتوشاپ"}
              englishTitle={"Moving Design with Photoshop"}
            >
              <SpringIcon />
            </Experience>
            <Experience
              string={" 1300# هنرجو موفق"}
              englishTitle={"1300 successful students"}
            >
              <PeopleIcon />
            </Experience>
            <Experience
              string={"برگذاری 10# دوره آموزشی"}
              englishTitle={"10 training courses"}
            >
              <ClassromIcon />
            </Experience>
          </div>
          <div className="mt-16">
            <SectionTitle
              title={"نمونه پروژه های انجام شده در دوره"}
              englishTitle={"Sample projects carried out in the course"}
            />
            <p className="text-center mt-7">
              آموزش های دوره اینستاگراف به دو دسته ثابت و متحرک تقسیم میشود ,
              نمونه ثابت همون عکس نوشته هایی هستش که قطعا تو خیلی از پیج ها
              دیدید، ولی ما برای اولین تو ایران طراحی متحرک بدون نیاز به
              افترافکت یا بلندر بهتون آموزش دادیم که میتونید نمونه جلسات دوره را
              پایین همین صفحه ببینید
            </p>
            <div className="mt-12">
              <Slider />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <SectionTitle
            title={"مسیر یادگیری دوره"}
            englishTitle={"The course of learning the course"}
          />
          <div className="flex max-lg:flex-wrap justify-center gap-5 mt-14 animate-fade-slow">
            <RoadMapCard
              title={"سیر تا پیاز فتوشاپ"}
              desc={
                "قرار تو این فصل از نصب فتوشاپ شروع میکنیم و به صورت کامل با تمامی بخش های فتوشاپ آشنا می‌شید."
              }
            >
              <PhotoshopIcon />
            </RoadMapCard>
            <RoadMapCard
              title={"آموزش تئوری طراحی"}
              desc={
                "تو این فصل با فرمول FOTC آشنا میشید که فقط با رعایت نکات این فرمول سطح طراحی تون از این رو به اون رو میشه."
              }
            >
              <CleanerIcon />
            </RoadMapCard>
            <RoadMapCard
              title={"آموزش پروژه محور"}
              desc={
                "در این فصل به صورت پروژه محور بیش از 30 پروژه طراحی ثابت و متحرک باهم یاد میگیریم."
              }
            >
              <DesignIcon />
            </RoadMapCard>
            <RoadMapCard
              title={"چالش درآمد زایی"}
              desc={
                "قرار خودم بدون سایت یا پیج از صفر و با فتوشاپ به درآمد برسم و قدم به قدم باهم پیش بریم تا شمام به درآمد برسید."
              }
            >
              <CameraIcon />
            </RoadMapCard>
          </div>
        </div>
        <div className="mt-14">
          <SectionTitle
            title={"جزئیات دوره اینستاگراف"}
            englishTitle={"Details of the Instagram period"}
          />
          <div className="mt-12 mb-20 lg:relative lg:background-blur lg:after:top-0 lg:after:right-[-20%] lg:after:bg-color-secondary lg:before:top-0 lg:before:left-[-20%] lg:before:bg-color-primary">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </main>
  );
}
