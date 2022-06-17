import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/women/slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import { Pagination, Navigation } from "swiper";

export const Brand = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={125}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper container "
      >
        <SwiperSlide>
          <div className="brand-col ">
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="brand-col">
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
