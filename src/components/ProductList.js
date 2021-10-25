import axios from "axios";
import React, { useEffect, useState } from "react";
import { products } from "../data";

const ProductList = ({ cat, filters, sort }) => {
  //get the url
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("products", products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        ); //conditional fetch , if cat is availaible fetch the cat products , if not fetch the entire list
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    //products contain our fetched data. filter() iterate over element in array , in this case each object in array and it returns a boolean variable.If true the element is stored in the new array , if false... element is discarded
    //filters is the array containing object with size and color keys. //Object.entries gives an iterable arrays of array for both the keys and values
    //.every() iterates over each element in array and tests whether all elements in the array pass the test implemented by the provided function.
    //so we are checking if each item in prodcuts for that particular [key] contains any value or not. if it conatians the value than it is true
  }, [products, cat, filters]);

  return (
    <div className="product_container grid grid-cols-3">
      {products.map((product) => (
        <div className="single_product p-2 pt-8 cursor-pointer ">
          <div className="img_container relative h-80 transition duration-75 ease-out">
            <img
              src={product.img}
              alt=""
              className="w-full h-full object-cover"
              // onMouseOver={(e) =>
              //   (e.currentTarget.src = `${url}${product.img_gallery[0]}`)
              // }
              // onMouseOut={(e) =>
              //   (e.currentTarget.src = `${url}${product.main_img}`)
              // }
            />
          </div>
          <h3 className="pt-6">{product.title}</h3>
          <h3 className="pt-2">{product.desc}</h3>
          <p className="pt-5">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
