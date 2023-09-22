import React from "react";
import { useRef } from "react";

import ProductAPi from "../API/ProductAPi";

const ProductCategory = (props) => {
  const swiperRef = useRef();

  // For Typescript!
  // const swiperRef = useRef<SwiperCore>();

  const sliderSettings = {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <div className="  w-full h-full pt-10  ">
      <div className="flex items-center w-full gap-3 lg:pb-10">
        <div className="h-10 w-5 bg-red-600 rounded-md "></div>
        <p className="text-sm lg:text-lg font-bold  text-[#DB4444]">
          Related item
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5  justify-center pt-5 lg:pt-0">
        {/* <div>
          <Swiper
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card price="$200"></Card>
            </SwiperSlide>
          </Swiper>
        </div> */}
        {/* <ProductAPi></ProductAPi> */}
        <ProductAPi></ProductAPi>
      </div>
    </div>
  );
};

export default ProductCategory;
