import React, { useState } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { products } from "../data";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import Dropdown2 from "../components/Dropdown2";
import ProductList from "../components/ProductList";

const sizeOptions = ["S", "M", "L", "Xl", "XXL"];
const colorOptions = ["Red", "Green", "Yellow", "Purple"];
const filterOptions = ["Newest", "Price Low to High", "Price High to Low"];
const AllProducts = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]; //get the category

  //get the url
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  //Dropdown
  const [dropdownSize, setDropdownSize] = useState("");
  const [dropdownColor, setDropdownColor] = useState("");
  const [dropdownSort, setDropdownSort] = useState("");
  //handleFilter
  const filters = {
    size: dropdownSize,
    color: dropdownColor,
  };
  // console.log("filters", filters);
  // console.log("dropdownSort", dropdownSort);

  return (
    <div className="products_page">
      <Header />
      <div className="main max-w-7xl mx-auto pt-10">
        <div className=" top_filter_bar flex text-right justify-end ">
          <div className="dropdown_sort w-52">
            <Dropdown2
              sizeOptions={filterOptions}
              clickText={"Sort By"}
              value={dropdownSort}
              onChange={(val) => setDropdownSort(val)}
            />
          </div>
        </div>
        <div className="main grid grid-flow-col pt-10 z-10">
          <aside className="left_sidebar col-span-4 w-52">
            <h2>Filter Products</h2>
            <div className="w-full  bg-gray-300 mt-12"></div>
            <Dropdown2
              sizeOptions={sizeOptions}
              clickText={"Select Size"}
              value={dropdownColor}
              onChange={(val) => setDropdownColor(val)}
            />
            <Dropdown2
              sizeOptions={colorOptions}
              clickText={"Select Color"}
              value={dropdownSize}
              onChange={(val) => setDropdownSize(val)}
            />
          </aside>
          <div className="right_main_content col-span-8">
            <h1 className="text-3xl p-2">Products</h1>
            <ProductList cat={cat} filters={filters} sort={dropdownSort} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
