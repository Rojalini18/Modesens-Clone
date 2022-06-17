import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/men/slidingnew.css";
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
                src="https://modesens.com/banner/12475/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>You Can Have Stunning New Arrivals</h1>
              <b>Use code MODESENS30 for 30% off</b>
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
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11844/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
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
                src="https://modesens.com/banner/12490/getimg/?img=%2Fbanner%2F20220616-modesens-SlamJam-1140x400-EN.jpg"
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
                src="https://modesens.com/banner/12457/getimg/?img=%2Fbanner%2F20220614-modesens-Monnalisa-1140x400-EN.jpg"
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
                src="https://modesens.com/banner/12463/getimg/?img=%2Fbanner%2F20220614-modesens-salesneakers-1140x400-M.jpg"
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
              <h1>Get Ready to Run</h1>
              <b>Don't let these sale sneakers slip away</b>
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
                src="https://modesens.com/banner/12451/getimg/?img=%2Fbanner%2F20220613-modesens-MSaintLaurent-1140x400-M.jpg"
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
