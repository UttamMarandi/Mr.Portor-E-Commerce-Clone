import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Section3Img1 from "../Images/mr_porter_section_3.jpg";
import { products } from "../data";
import { useLocation } from "react-router";
import axios from "axios";
import { publicRequest } from "../requestMethods";

const Product = () => {
  let [value, setValue] = useState("");
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const sizeData = product.size?.map((item) => ({
    id: `input_${item}`,
    value: item,
  }));
  console.log("sizeData", sizeData);

  //for border styling
  const [clicked, setClicked] = useState(false);
  const radioClick = useRef(null);

  return (
    <div className="product">
      <Header />
      <div className="main max-w-6xl mx-auto pt-10">
        <div className="top_part grid grid-flow-col grid-cols-2 gap-20 ">
          <div className="left_container ">
            <div className="img_container relative ">
              <img src={product.img} alt="" className=" object-cover" />
            </div>
          </div>
          <div className="right_container ">
            <h2 className="text-2xl font-light">{product.title}</h2>
            <h3 className="pt-4 font-light">{product.desc}</h3>
            <p className="pt-2 text-2xl">${product.price}</p>
            <div className="flex justify-between pt-8">
              <h3 className="capitalize text-gray-400">
                Color :{" "}
                <div className="text-pitch-black capitalize">
                  {product.color &&
                    product.color.map((c) => (
                      <span className="mr-3" key={c}>
                        {c}
                      </span>
                    ))}
                </div>
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
                {sizeData?.map(({ id, value }) => (
                  <div>
                    <input
                      id={id}
                      className="invisible radio_custom"
                      type="radio"
                      value={value}
                      checked={value === { value }}
                      onChange={(e) => {
                        const nodes =
                          e.target.parentElement.parentElement.childNodes;
                        for (let i = 0; i < nodes.length; i++) {
                          nodes[i].lastChild.firstChild.classList.remove(
                            "show_border"
                          );
                        }
                        e.target.nextSibling.firstChild.classList.toggle(
                          "show_border"
                        );
                        return setValue(e.target.value);
                      }}
                    />
                    <label for={id} className="radio_custom_label">
                      <div
                        ref={radioClick}
                        className={`border border-gray-300 py-3 text-center cursor-pointer ${
                          clicked && "show_border"
                        }`}
                      >
                        {value}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
