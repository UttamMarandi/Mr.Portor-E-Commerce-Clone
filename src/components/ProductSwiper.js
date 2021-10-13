import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Section3Img1 from "../Images/mr_porter_section_3.jpg";

// Import Swiper styles

SwiperCore.use([Navigation]);

const ProductSwiper = () => {
  return (
    <div className="product_swiper">
      <Swiper
        spaceBetween={20}
        slidesPerView={window.innerWidth < 768 ? 1 : 4}
        navigation={true}
        slidesPerGroup={3}
        speed={1000}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="cursor-pointer">
          <div className="img_container relative h-60">
            <img
              src={Section3Img1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center">THE NORTH FACE</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container relative h-60">
            <img
              src={Section3Img1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center">THE NORTH FACE</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container relative h-60">
            <img
              src={Section3Img1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center">THE NORTH FACE</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container relative h-60">
            <img
              src={Section3Img1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center">THE NORTH FACE</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container relative h-60">
            <img
              src={Section3Img1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center">THE NORTH FACE</h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_container relative h-60">
            <img
              src={Section3Img1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center">THE NORTH FACE</h3>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
