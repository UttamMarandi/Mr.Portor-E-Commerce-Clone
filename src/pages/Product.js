import React, { useState } from "react";
import Header from "../components/Header";
import Section3Img1 from "../Images/mr_porter_section_3.jpg";
import { products } from "../data";

const Product = () => {
  let [value, setValue] = useState("");

  return (
    <div className="product">
      <Header />
      <div className="main max-w-6xl mx-auto pt-10">
        <div className="top_part grid grid-flow-col grid-cols-2 gap-20 ">
          <div className="left_container ">
            <div className="img_container relative ">
              <img
                src={products[0].main_img}
                alt=""
                className=" object-cover"
              />
            </div>
          </div>
          <div className="right_container ">
            <h2 className="text-2xl font-light">{products[0].title}</h2>
            <h3 className="pt-4 font-semibold">{products[0].desc}</h3>
            <p className="pt-2 text-2xl">${products[0].price}</p>
            <div className="flex justify-between pt-8">
              <h3 className="capitalize text-gray-400">
                Color :{" "}
                <span className="text-pitch-black capitalize">
                  {products[0].color}
                </span>
              </h3>
              <p className="underline cursor-pointer">View size guide</p>
            </div>
            <div className="size_choice_container pt-10">
              <h3 className="text-gray-400">
                Size:{" "}
                <span className="text-pitch-black">
                  {value === "" ? `Select Size` : `${value}`}
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-8 gap-y-4">
                <div>
                  <input
                    id="pickup_1"
                    className="invisible radio_custom"
                    type="radio"
                    value="XS"
                    checked={value === "XS"}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label for="pickup_1" className="radio_custom_label">
                    <div className="border border-gray-300 py-3 text-center cursor-pointer ">
                      XS
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    id="pickup_2"
                    className="radio_custom invisible"
                    type="radio"
                    value="SM"
                    checked={value === "SM"}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label for="pickup_2" className="radio_custom_label">
                    <div className="border border-gray-300 py-3 text-center cursor-pointer ">
                      SM
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    id="pickup_3"
                    className="radio_custom invisible"
                    type="radio"
                    value="M"
                    checked={value === "M"}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label for="pickup_3" className="radio_custom_label">
                    <div className="border border-gray-300 py-3 text-center cursor-pointer ">
                      M
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    id="pickup_4"
                    className="radio_custom invisible"
                    type="radio"
                    value="L"
                    checked={value === "L"}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label for="pickup_4" className="radio_custom_label">
                    <div className="border border-gray-300 py-3 text-center cursor-pointer ">
                      L
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    id="pickup_5"
                    className="radio_custom invisible"
                    type="radio"
                    value="XL"
                    checked={value === "XL"}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label for="pickup_5" className="radio_custom_label">
                    <div className="border border-gray-300 py-3 text-center cursor-pointer ">
                      XL
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    id="pickup_6"
                    className="radio_custom invisible"
                    type="radio"
                    value="XXL"
                    checked={value === "XXL"}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <label for="pickup_6" className="radio_custom_label">
                    <div className="border border-gray-300 py-3 text-center cursor-pointer ">
                      XXL
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
