"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const sliderUrl = [
  { url: "/video/slider/1.mp4" },
  { url: "/video/slider/2.mp4" },
  { url: "/video/slider/3.mp4" },
  { url: "/video/slider/4.mp4" },
  { url: "/video/slider/5.mp4" },
];

function Slider() {
  const [swiperActiveSlide, setSwiperActiveSlide] = useState(0);

  const slideRef = useRef<HTMLVideoElement[]>([]);

  const togglePlay = () => {
    if (slideRef.current[swiperActiveSlide - 1]) {
      slideRef.current[swiperActiveSlide - 1]?.pause();
    }
    if (slideRef.current[swiperActiveSlide + 1]) {
      slideRef.current[swiperActiveSlide + 1]?.pause();
    }
    if (slideRef.current[swiperActiveSlide]?.paused) {
      slideRef.current[swiperActiveSlide]?.play();
    }
  };

  useEffect(() => {
    togglePlay();
  }, [swiperActiveSlide]);

  return (
    <Swiper
      slidesPerView={"auto"}
      className="mySwiper"
      onSlideChange={({ activeIndex }) => {
        setSwiperActiveSlide(activeIndex);
      }}
      modules={[Pagination, Navigation, Autoplay]}
      pagination={true}
      spaceBetween={23}
      // style={{
      //   "--swiper-pagination-color": "#FD346E",
      //   "--swiper-pagination-bullet-inactive-color": "#351b2b",
      //   "--swiper-pagination-bullet-inactive-opacity": "1",
      //   "--swiper-pagination-bullet-width": "11px",
      //   "--swiper-pagination-bullet-height": "10px",
      //   "--swiper-pagination-bullet-horizontal-gap": "2px",
      // }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          centeredSlides: false,
        },
        360: {
          centeredSlides: true,
        },
      }}
    >
      {sliderUrl.map((e, index) => (
        <SwiperSlide key={index}>
          <video
            ref={(el) => {
              slideRef.current[index] = el!;
            }}
            loop
            muted
            className="rounded-[10px]"
            suppressHydrationWarning
          >
            <source src={e.url} type="video/mp4" />
          </video>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
