import React from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { products } from "../data";
import Footer from "../components/Footer";
const AllProducts = () => {
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <div className="products_page">
      <Header />
      <div className="main max-w-7xl mx-auto pt-10">
        <div className="top_filter_bar flex text-right justify-end">
          <Dropdown
            sortby="Sort By"
            value1="Newest"
            value2="Price Low to High"
            value3="Price High to Low"
          />
        </div>
        <div className="main grid grid-flow-col pt-10 z-10">
          <aside className="left_sidebar col-span-4 w-52">
            <h2>ALl Filters</h2>
          </aside>
          <div className="right_main_content col-span-8">
            <h1 className="text-3xl p-2">Products</h1>
            <div className="product_container grid grid-cols-3">
              {products.map((product) => (
                <div className="single_product p-2 pt-8 cursor-pointer ">
                  <div className="img_container relative h-80 transition duration-75 ease-out">
                    <img
                      src={`${url}${product.main_img}`}
                      alt=""
                      className="w-full h-full object-cover"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = `${url}${product.img_gallery[0]}`)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src = `${url}${product.main_img}`)
                      }
                    />
                  </div>
                  <h3 className="pt-6">{product.title}</h3>
                  <h3 className="pt-2">{product.desc}</h3>
                  <p className="pt-5">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
