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
                src="https://modesens.com/banner/12474/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", bottom: "0" }}
            >
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
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11843/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
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
          <div className=" col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/12512/getimg/?img=%2Fbanner%2F20220617-modesens-Chicos-1140x400-EN.jpg"
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
                src="https://modesens.com/banner/12480/getimg/?img=%2Fbanner%2F20220615-modesens-Vestiaire-1140x400-EN.jpg"
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
                src="https://modesens.com/banner/12481/getimg/?img=%2Fbanner%2F20220615-modesens-Renaisa-1140x400-US-EN.jpg"
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
                src="https://modesens.com/banner/12456/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg"
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
                style={{ height: "100%", width: "100%", margin: "auto" }}
                src="https://modesens.com/banner/12467/getimg/?img=%2Fbanner%2F20220614-modesens-lengjingblog-1140x400.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{
                position: "absolute",
                bottom: "0",
                top: "30%",
                left: "28%",
              }}
            >
              <h1>5 Must Have Summer Dresses</h1>
              <b>Mini, Midi, Maxi & More</b>
              <br />
              <a href="">Read Now</a>
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
                src="https://modesens.com/banner/12462/getimg/?img=%2Fbanner%2F20220614-modesens-saledresses-1140x400-F.jpg"
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
              <h1>Get Ready to Swoon</h1>
              <b>Fall in love with these sale dresses</b>
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
                src="https://modesens.com/banner/12450/getimg/?img=%2Fbanner%2F20220613-modesens-FSaintLaurent-1140x400-F.jpg"
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
              <h1>See You in Paris</h1>
              <b>Shop new arrivals from Saint Laurent</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
