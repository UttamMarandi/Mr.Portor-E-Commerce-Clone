import React from "react";

import { Link } from "react-router-dom";

const ProductCategory = ({ id, img, title, button_txt, cat }) => {
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <Link to={`/products/${cat}`}>
      <div className="prduct_category px-6">
        <div className="img_container  relative">
          <img src={`${url}${img}`} alt="" className=" cursor-pointer h-96" />
          <h2 className="pt-8 h-20">{title}</h2>
          <button className="mt-7 underline cursor-pointer ">
            {button_txt}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategory;
