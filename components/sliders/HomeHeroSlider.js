"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import hero from "@/public/assets/png/banner.png"
import hero2 from "@/public/assets/png/banner-2.jpg"
import hero3 from "@/public/assets/png/banner-3.jpg"

 const slides = [
    {
      id: 1,
      img: hero,
      alt: "Big Sale 70%",
    },
    {
      id: 2,
      img: hero2,
      alt: "New Arrivals",
    },
    {
      id: 3,
      img: hero3,
      alt: "Discount Week",
    },
  ];

const HomeHeroSlider = () => {

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full custom-pagination"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSlider;
