import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/women/slidingnew.css";
import { Pagination, Navigation } from "swiper";

export const Slidingnew = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/12510/getimg/?img=%2Fbanner%2F20220616-modesens-Cettire-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", bottom: "0" }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11845/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts"
              style={{ position: "absolute", bottom: "0" }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/12476/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/12458/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/12024/getimg/?img=%2Fbanner%2F20220601kids-modesens-Sale-1140x400-K.jpg"
                alt=""
              />
            </div>
            <div
              className="texts"
              style={{
                position: "absolute",
                bottom: "0",
                top: "30%",
                left: "10%",
              }}
            >
              <h1>Kid Sale Start Now</h1>
              <b>Shop the Bestsellers</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%", margin: "auto" }}
                src="https://modesens.com/banner/12401/getimg/?img=%2Fbanner%2F20220608-modesens-Kids-1140x400-K.jpg"
                alt=""
              />
            </div>
            <div
              className="texts"
              style={{
                position: "absolute",
                bottom: "0",
                top: "30%",
                left: "10%",
              }}
            >
              <h1>The Latest Kid's Style</h1>
              <b>Shop For Your Little Angel</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
