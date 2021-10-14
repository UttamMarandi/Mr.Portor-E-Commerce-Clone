import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { products } from "../data";
import Section3Img1 from "../Images/mr_porter_section_3.jpg";
// Import Swiper styles

SwiperCore.use([Navigation]);

const ProductSwiper = ({ sliceX, sliceY }) => {
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <div className="product_swiper">
      <Swiper
        spaceBetween={20}
        slidesPerView={window.innerWidth < 768 ? 1 : 4}
        navigation={true}
        slidesPerGroup={3}
        speed={2000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {products
          .slice(Number(sliceX), Number(sliceY))
          .map(({ main_img, title }) => (
            <SwiperSlide className="cursor-pointer">
              <div className="img_container relative h-60">
                <img
                  src={`${url}${main_img}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center">{title}</h3>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
