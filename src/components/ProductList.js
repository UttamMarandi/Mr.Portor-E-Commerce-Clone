import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

const ProductList = ({ cat, filters, sort }) => {
  console.log("cat", cat);
  //get the url
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("products", products);
  console.log("filteredProducts", filteredProducts);
  console.log("filters", filters);

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
          Object.entries(filters).every(([key, value]) => {
            console.log("item", item);
            console.log("key", item[key], item[value]);
            return item[key].includes(value);
          })
        )
      );

    //products contain our fetched data. filter() iterate over element in array , in this case each object in array and it returns a boolean variable.If true the element is stored in the new array , if false... element is discarded
    //filters is the array containing object with size and color keys. //Object.entries gives an iterable arrays of array for both the keys and values
    //.every() iterates over each element in array and tests whether all elements in the array pass the test implemented by the provided function.
    //so we are checking if each item in prodcuts for that particular [key] contains any value or not. if it conatians the value than it is true
  }, [products, cat, filters]);

  //for sorting
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Price Low to High") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="product_container grid grid-cols-3">
      {products.map((product) => (
        <div className="single_product p-2 pt-8 cursor-pointer ">
          <Link to={`/product/${product._id}`}>
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
          </Link>
          <h3 className="pt-2">{product.desc}</h3>
          <p className="pt-5">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
