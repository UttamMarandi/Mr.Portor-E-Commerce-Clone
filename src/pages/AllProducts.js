import React, { useState } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { products } from "../data";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import Dropdown2 from "../components/Dropdown2";

const sizeOptions = [
  { value: "S" },
  { value: "M" },
  { value: "L" },
  { value: "XL" },
  { value: "XXL" },
];
const AllProducts = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]; //get the category

  //get the url
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  //handleFilters
  const [filter, setFilter] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter, //to persist previous selected option
      [e.target.name]: value,
    });
  };
  console.log("filters", filter);

  //Dropdown
  const [dropdownValue, setDropdownValue] = useState(null);

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
            <h2>Filter Products</h2>
            <div className="w-full h-px bg-gray-300 mt-12"></div>
            <select name="color" onChange={handleFilters}>
              <option disabled>Color</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Purple">Purple</option>
              <option value="Yellow">Yellow</option>
              <option value="Orange">Orange</option>
            </select>
            <select name="size" onChange={handleFilters}>
              <option>Size</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <Dropdown2
              sizeOptions={sizeOptions}
              clickText={"Select Size"}
              value={dropdownValue}
              onChange={(val) => setDropdownValue(val)}
            />
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
