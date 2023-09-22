import React, { Fragment } from "react";
import Heroimg from "../iph.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../App.css";

// import required modules
import { Pagination } from "swiper/modules";
import Nav from "../../UI/Nav";
const Hero = () => {
  return (
    <div className="mt-28 lg:mt-30 h-1/2 w-full   lg:pt-10 ">
      {/* <div className="h-full w-full  flex  justify-center ">
      <img className="bg-cover w-full lg:w-[100%] " src={Heroimg} alt="" />
    </div> */}

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img className="bg-cover w-full lg:w-[100%]  " src={Heroimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg-cover w-full lg:w-[100%] " src={Heroimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg-cover w-full lg:w-[100%] " src={Heroimg} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
