import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";

import { useLocation } from "react-router";
import { publicRequest } from "../requestMethods";

import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
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

  //size

  const sizeData = product.size?.map((item) => ({
    id: `input_${item}`,
    value: item,
  }));
  console.log("product.size", product.size);
  //color

  const colorData = product.color?.map((item) => ({
    id: `input_${item}`,
    value: item,
  }));
  //set
  let [sizeValue, setSizeValue] = useState("");
  let [colorValue, setColorValue] = useState("");

  //

  const handleClick = () => {
    //update cart
    //this is better option //first quantity is not registering
    dispatch(
      addProduct({
        product: product,
        quantity: 1, //we don't have the option to add multiple single product, so quantity will be 1
        price: Number(product.price),
        // price: quantity === 0 ? product.price : product.price * (quantity + 1),
        // I have no idea why first click is not registering for quantity , so need to improvise for price
        colorValue: colorValue,
        sizeValue: sizeValue,
      })
    );
  };

  return (
    <div className="product">
      <Header />
      <div className="main max-w-6xl mx-auto pt-10">
        <div className="top_part grid grid-flow-col grid-cols-2 gap-20 ">
          {/* Image */}
          <div className="left_container ">
            <div className="img_container relative ">
              <img src={product.img} alt="" className=" object-cover" />
            </div>
          </div>
          {/* Content */}
          <div className="right_container ">
            <h2 className="text-2xl font-light">{product.title}</h2>
            <h3 className="pt-4 font-light">{product.desc}</h3>
            <p className="pt-2 text-2xl">${product.price}</p>
            <div className="flex justify-between pt-8">
              {/* <h3 className="capitalize text-gray-400">
                Color :{" "}
                <div className="text-pitch-black capitalize">
                  {product.color &&
                    product.color.map((c) => (
                      <span className="mr-3" key={c}>
                        {c}
                      </span>
                    ))}
                </div>
              </h3> */}
              <p className="underline cursor-pointer">View size guide</p>
            </div>
            {/* color select  */}
            <div className="size_choice_container pt-10">
              <h3 className="text-gray-400">
                Color:{" "}
                <span className="text-pitch-black">
                  {colorValue === "" ? `Select Size` : `${colorValue}`}
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-8 gap-y-4 cursor-pointer">
                {colorData?.map(({ id, value }) => (
                  <div className="cursor-pointer -mt-2">
                    <input
                      id={id}
                      className="invisible radio_custom"
                      type="radio"
                      value={value}
                      checked={colorValue === { colorValue }}
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
                        return setColorValue(e.target.value);
                      }}
                    />
                    <label
                      for={id}
                      className="radio_custom_label cursor-pointer"
                    >
                      <div
                        className={`border border-gray-300 py-3 text-center cursor-pointer"
                        }`}
                      >
                        {value}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <h3 className="text-gray-400 pt-12">
                Size:{" "}
                <span className="text-pitch-black">
                  {sizeValue === "" ? `Select Size` : `${sizeValue}`}
                </span>
              </h3>
              <div className="grid grid-cols-4 gap-8 gap-y-4">
                {sizeData?.map(({ id, value }) => (
                  <div className="-mt-2">
                    <input
                      id={id}
                      className="invisible radio_custom"
                      type="radio"
                      value={value}
                      checked={sizeValue === { sizeValue }}
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
                        return setSizeValue(e.target.value);
                      }}
                    />
                    <label for={id} className="radio_custom_label">
                      <div
                        className={`border border-gray-300 py-3 text-center cursor-pointer "
                        }`}
                      >
                        {value}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart_button pt-16 text-center">
              <button
                disabled={sizeValue === "" && colorValue === ""}
                onClick={() => {
                  handleClick();
                }}
                className={`text-center bg-pitch-black text-white w-full p-3 text-sm hover:bg-opacity-80 ${
                  sizeValue === "" &&
                  colorValue === "" &&
                  `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed`
                }`}
              >
                {sizeValue === "" && colorValue === "" ? (
                  <>Please Select Size and Color</>
                ) : (
                  <>Add to Bag</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
