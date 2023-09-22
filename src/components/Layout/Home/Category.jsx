import React from "react";
import { useRef } from "react";
import Card from "./Card";
import Button from "../../UI/Button";
import CardCategory from "./CardCategory";
import { Swiper, SwiperSlide } from "swiper/react";

const Category = (props) => {
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
          {" "}
          Categories
        </p>
      </div>
      <div className="w-full h-full">
        <div className=" flex  flex-row items-start lg:items-center justify-between lg:pb-5">
          <div className="flex items-center gap-36">
            <h2 className="  lg:pl-0 text-sm lg:text-3xl  pt-4 lg:pt-0 font-semibold   tracking-wider">
              Browser by category
            </h2>
          </div>

          <div className="  lg:flex gap-4  ">
            <button
              className="h-10 w-10 rounded-full  bg-[#F5F5F5]  "
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
            </button>
            <button
              className="h-10 w-10 rounded-full  bg-[#F5F5F5] "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="lg:hidden flex justify-center pt-5 pb-3  ">
        <button className="h-10 w-10 rounded-full  shadow-lg " onClick={() => swiperRef.current?.slidePrev()}>
          <span>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
        </button>
        <button className="h-10 w-10 rounded-full  shadow-lg" onClick={() => swiperRef.current?.slideNext()}>
          <span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
      </div> */}
      <div className="grid grid-cols-1 gap-5  justify-center pt-5 lg:pt-10">
        <div>
          <Swiper
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="phone-portrait-outline"
                text="Electronics"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="diamond-outline"
                text="Jewerly"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="shirt-outline"
                text="Man clothing"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="shirt-outline"
                text="Women Clothing"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="shirt-outline"
                text="Women Clothing"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="shirt-outline"
                text="Women Clothing"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="shirt-outline"
                text="Women Clothing"
              ></CardCategory>
            </SwiperSlide>
            <SwiperSlide>
              <CardCategory
                warna="text-black"
                name="shirt-outline"
                text="Women Clothing"
              ></CardCategory>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <CardCategory warna="text-black" name="phone-portrait-outline" text="Phone"></CardCategory>

        <CardCategory warna="text-black" name="watch-outline" text="Smart watch"></CardCategory>
        <CardCategory warna="text-white" name="camera-outline" text="camera"></CardCategory>
        <CardCategory warna="text-black" name="headset-outline" text="Head phone "></CardCategory>
        <CardCategory warna="text-black" name="game-controller-outline" text="Gaming"></CardCategory>
        <CardCategory warna="text-black" name="game-controller-outline" text="Gaming"></CardCategory>
        <CardCategory warna="text-black" name="game-controller-outline" text="Gaming"></CardCategory> */}
      </div>
    </div>
  );
};

export default Category;
