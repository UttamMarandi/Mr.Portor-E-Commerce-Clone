import React from "react";
import { products } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

const SwiperContent = ({ sliceX, sliceY }) => {
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <div>
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
    </div>
  );
};

export default SwiperContent;
