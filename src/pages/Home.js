import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSwiper from "../components/ProductSwiper";
import ProductCategory from "../components/ProductCategory";
import { productCategories } from "../data";
import { products } from "../data";
import axios from "axios";
import PorterBanner from "../Images/porter_banner.jpg";
import PorterBanner2 from "../Images/porter_banner_2.jpg";
import Section3Img1 from "../Images/mr_porter_section_3.jpg";
import { useEffect } from "react/cjs/react.development";

const Home = () => {
  const [products, setProducts] = useState([]);
  //fetch products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  });

  return (
    <div className="home_page">
      <Header />
      <div className="main max-w-6xl mx-auto px-2 md:px-6">
        <div className="top_banner_text pt-6 pb-6 border-b border-gray-400">
          <h2 className="text-center">THE MEN'S STYLE DESTINATION</h2>
        </div>
        <div className="top_banner_img pt-7 pb-7 border-b border-gray-400 ">
          <img src={PorterBanner} alt="Banner" />
        </div>
        <div className="top_banner_2_img pt-7 pb-7">
          <img src={PorterBanner2} alt=" Banner 2" />
        </div>
        {/* section 2 */}
        <div className="section_2 grid grid-flow-col pb-10">
          <div className="left_container col-span-4 p-7 pl-0">
            <h3 className="text-sm">THE JOURNAL</h3>
            <h2 className="text-4xl leading-10 pt-5">
              Go Out: An Urban Hike Through The Streets Of Tokyo
            </h2>
          </div>
          <div className="right_container col-span-8 p-7">
            <p className="pt-11">
              For while Tokyo is certainly a lot to take in, the Japanese
              capital is also a playground ripe for outdoor adventure and
              exploration and a brilliant place to go walking.
            </p>
            <button className="pt-4 underline">Show More</button>
          </div>
        </div>
        {/* Section 3 */}
        <div className="section_3 pt-7 pb-7 border-b border-t border-gray-400">
          <img src={Section3Img1} alt="" className="w-full" />
          <h3 className="text-sm pt-5">
            GIVENCHY : THE LATEST FW21 COLLECTION
          </h3>
          <button className="pt-1 underline">Shop Now</button>
        </div>
        {/* Section 4 */}
        <div className="section_4 grid grid-flow-col pt-6 pb-16">
          <div className="left_container col-span-4">
            <h3 className="text-sm pt-5">WHAT'S NEW TODAY</h3>
            <h1 className="text-8xl font-semibold pt-8">113</h1>
            <p className="pt-5">
              Hundreds of the latest arrivals all in one place
            </p>
            <button className="mt-8 bg-gray-700 text-white px-10 py-2 hover:opacity-80 transition duration-75">
              Shop Now
            </button>
          </div>
          <div className="right_container col-span-8">
            <ProductSwiper sliceX="0" sliceY="8" products={products} />
          </div>
        </div>
        {/* Section 5 */}
        <div className="section_5 pt-10 border-t border-gray-400 pb-14">
          <div className="top_container grid grid-cols-2 divide-x divide-gray-400 divide-dotted">
            {productCategories.slice(0, 2).map((product) => (
              <ProductCategory
                id={product.id}
                title={product.title}
                img={product.main_img}
                button_txt={product.button_txt}
                cat={product.cat}
              />
            ))}
          </div>
          <div className="bottom_container grid grid-cols-3 pt-10 divide-x divide-gray-400 divide-dotted ">
            {productCategories.slice(2, 5).map((product) => (
              <ProductCategory
                id={product.id}
                title={product.title}
                img={product.main_img}
                button_txt={product.button_txt}
                cat={product.cat}
              />
            ))}
          </div>
        </div>
        {/* Section 6 */}
        <div className="section_6 grid grid-flow-col pt-14 pb-16 border-t border-gray-400 border-b">
          <div className="left_container col-span-4">
            <h3 className="text-sm pt-5">WHAT'S NEW TODAY</h3>
            <h1 className="text-8xl font-semibold pt-8">113</h1>
            <p className="pt-5">
              Hundreds of the latest arrivals all in one place
            </p>
            <button className="mt-8 bg-gray-700 text-white px-10 py-2 hover:opacity-80 transition duration-75">
              Shop Now
            </button>
          </div>
          <div className="right_container col-span-8">
            <ProductSwiper sliceX="3" sliceY="7" products={products} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
