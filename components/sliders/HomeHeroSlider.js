"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import hero from "@/public/assets/png/banner.png"

const HomeHeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: hero,
      alt: "Big Sale 70%",
    },
    {
      id: 2,
      img: hero,
      alt: "New Arrivals",
    },
    {
      id: 3,
      img: hero,
      alt: "Discount Week",
    },
  ];

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full custom-pagination"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[400px]">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSlider;
