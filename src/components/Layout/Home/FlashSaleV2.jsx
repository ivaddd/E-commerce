import React from "react";
import Card from "./Card";
import Button from "../../UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import ProductAPi from "../API/ProductAPi";

const FlashSale = () => {
  const swiperRef = useRef();
  const sliderSettings = {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <div className=" pt-10 lg:pt-32 w-full h-full ">
      <div className="flex items-center w-full gap-3">
        <div className="h-10 w-5 bg-red-600 rounded-md "></div>
        <p className=" text-sm lg:text-lg font-semibold  text-[#DB4444] ">
          {" "}
          Today's
        </p>
      </div>
      <div className="w-full h-full">
        <div className="pt-10 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between ">
          <div className="flex items-center gap-10 lg:gap-36">
            <h2 className="pl-2 lg:pl-0 text-sm lg:text-4xl  font-semibold">
              Flash Sales
            </h2>
            <div>
              <div className="grid grid-flow-col gap-1 lg:gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-semibold">
                  Days
                  <span className="countdown font-bold text-sm lg:text-4xl">
                    <span>03</span>
                  </span>
                </div>
                <div className="flex items-center text-3xl pt-2 text-[#E07575]">
                  :
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-semibold">
                  Hours
                  <span className="countdown font-bold text-sm lg:text-4xl">
                    <span>23</span>
                  </span>
                </div>
                <div className="flex items-center text-3xl pt-2 text-[#E07575]">
                  :
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-semibold">
                  Minutes
                  <span className="countdown font-bold text-sm lg:text-4xl">
                    <span>19</span>
                  </span>
                </div>
                <div className="flex items-center text-3xl pt-2 text-[#E07575]">
                  :
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content font-semibold">
                  Second
                  <span className="countdown font-bold text-sm lg:text-4xl">
                    <span>56</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden gap-4   md:flex ">
            <button
              className="h-10 w-10 rounded-full   bg-[#F5F5F5] "
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
            </button>
            <button
              className="h-10 w-10 rounded-full  bg-[#F5F5F5]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="gap-4 pt-5 flex justify-center pb-4 md:hidden ">
        <button
          className="h-10 w-10 rounded-full  bg-[#F5F5F5]  "
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
        </button>
        <button
          className="h-10 w-10 rounded-full bg-[#F5F5F5]  "
          onClick={() => swiperRef.current?.slideNext()}
        >
          <span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5  justify-center pt-5 lg:pt-10">
        <div>
          {/* {/* <Swiper
            breakpoints={sliderSettings}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
         
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
          </Swiper> */}
          <ProductAPi></ProductAPi>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 justify-center lg:pt-5 lg:gap-10 gap-4">
        <Card price="$200"></Card>
        <Card price="$300"></Card>
        <Card price="$200"></Card>
        <Card price="$100"></Card>
      </div> */}
      <div className="pt-10 flex justify-center">
        <Button>View all product</Button>
      </div>
    </div>
  );
};

export default FlashSale;
