import React from "react";
import Header from "../components/Header";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import Section3Img1 from "../Images/mr_porter_section_3.jpg";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  return (
    <div className="cart_page">
      <Header />
      <main className="cart_main max-w-6xl mx-auto">
        <div className="wrapper p-6">
          <title className="font-light text-center">YOUR BAG</title>
          <div className="top flex items-center justify-between p-6">
            <button className="top_button p-3 cursor-pointer border border-gray-300">
              CONTINUE SHOPPING
            </button>
            <div className="top_texts hidden md:block">
              <h2 className="underline cursor-pointer my-3">Shopping Bag(2)</h2>
              <h2 className="underline cursor-pointer my-3">
                Your Wishlist(0)
              </h2>
            </div>
            <button
              className=" top_button p-3 cursor-pointer border border-gray-300 "
              type="filled"
            >
              CHECKOUT NOW
            </button>
          </div>
          <div className="bottom flex justify-between flex-col md:flex-row ">
            <div className="info flex-3">
              {/* map */}
              {cart.products.map((product) => (
                <div className="product flex justify-between flex-col md:flex-row">
                  <div className="product_detail flex-2 flex">
                    <img
                      src={product.product.img}
                      alt=""
                      className="w-52 h-40 object-cover"
                    />
                    <div className="details p-6 flex flex-col justify-around">
                      <h2 className="product_name">
                        Product : <span>{product.title}</span>
                      </h2>
                      <h3 className="product_id">
                        ID : <span>{product.id}</span>
                      </h3>
                      <h3 className="product_color w-5 h-5 rounded-full">
                        Color : <span>{product.color}</span>
                      </h3>
                      <h3 className="product_size">
                        Size : <span>{product.size}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="price_detail flex flex-1 flex-col items-center justify-center">
                    <div className="product_amount_container flex items-center mb-5">
                      <PlusIcon className="h-6 text-gray-400 stroke-1" />
                      <h2 className="mx-1.5 my-4 md:m-2">{product.quantity}</h2>
                      <MinusIcon className="h-6 text-gray-400 stroke-1" />
                    </div>
                    <div className="product_pricew text-xl font-light">
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="bg-gray-300 h-0.5" />
            <div className="summary">
              <h2 className="summary_title text-lg font-light">
                Order Summary
              </h2>
              <div className="summary_item mx-5 flex justify-between">
                <span className="summary_item_text">Subtotal</span>
                <span className="summary_item_price">$ Cart Total</span>
              </div>
              <div className="summary_item">
                <span className="summary_item_text">Shipping Discount</span>
                <span>$ -5.90</span>
              </div>
              <div className="summary_item" type="total">
                <span className="summary_item_text">Total</span>
                <span className="summary_item_price">$ Cart Total</span>
              </div>
              {/* Stripe Checkout */}
              {/* <StripeCheckout/> */}
              <button className="w-full bg-pitch-black text-white p-2 mt-4 hover:opacity-80">
                CHECOUT NOW
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
