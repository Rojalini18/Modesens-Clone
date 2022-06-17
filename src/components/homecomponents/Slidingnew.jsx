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
                src="https://modesens.com/banner/12511/getimg/?img=%2Fbanner%2F20220616-modesens-Cettire-1140x400-EN.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", bottom: "0" }}
            >
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
                src="https://modesens.com/banner/11846/getimg/?img=%2Fbanner%2F20220516-modesens-SS22-SALE-1140x400-EN.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", bottom: "0" }}
            >
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
                src="https://modesens.com/banner/12477/getimg/?img=%2Fbanner%2F20220615-modesens-SSENSE-1140x400-EN.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/12406/getimg/?img=%2Fbanner%2F20220608-modesens-Home-1140x400-H.jpg"
                alt=""
              />
            </div>
            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>New Season New Home</h1>
              <b>The Latest Home Goods</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
