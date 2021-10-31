<ul className="grid grid-cols-4">
  <li>
    <input type="radio" name="sm" value="sm" className="" />
    <label htmlFor="sm" className="p-5 bg-gray-500">
      SM
    </label>
  </li>
  <li>
    <input type="radio" name="md" value="md" className="" />
    <label htmlFor="md" className="p-5 bg-gray-500">
      MD
    </label>
  </li>
  <li>
    <input type="radio" name="xl" value="xl" className="" />
    <label htmlFor="xl" className="p-5 bg-gray-500">
      XL
    </label>
  </li>
</ul>;

import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

//
// backend connect
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();

const handleClick = (e) => {
  e.preventDefault();
  login(dispatch, { formValue, values });
};


//login.js
import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//Icons
import { EyeIcon } from "@heroicons/react/outline";
import { EyeOffIcon } from "@heroicons/react/outline";
//utility
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
  });
  const [caretColor, setCaretColor] = useState("black");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  console.log("user values", values);
  //functions
  const handleFormValue = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleClickShowPassword = () => {
    setCaretColor("transparent");
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  

  return (
    <div className="login_page">
      <Header />
      <main className="login_main max-w-lg mx-auto ">
        <div className="login_form pt-16">
          <h2 className="text-3xl">Sign in</h2>
          <form action="">
            <div className="email pt-8 block ">
              <label htmlFor="" className="label ">
                Email Address
              </label>
              <input
                className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                type="text"
                name="email"
                value={formValue.email}
                onChange={handleFormValue}
              />
            </div>
            <div className="password_2 block pt-6 relative">
              <label>Password</label>
              <div className="eye_div">
                <input
                  className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                  onClick={() => setCaretColor("black")}
                  style={{ caretColor: caretColor }}
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                />
                <div
                  className="icon_button absolute right-4 top-14"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <EyeIcon className="h-6 font-extralight" />
                  ) : (
                    <EyeOffIcon className="h-6 font-extralight" />
                  )}
                </div>
              </div>
              <p className="pt-4">Forgot your password?</p>
            </div>
            <button
              onClick={handleClick}
              className="mt-9 p-3 bg-pitch-black hover:bg-opacity-80 text-white w-full text-sm"
            >
              Sign In
            </button>
            <div className="w-full h-px bg-gray-300 mt-12"></div>
            <h3 className="text-center pt-7 text-lg">Don't have an account?</h3>
            <button className="mt-8 p-3 mb-16 bg-white hover:bg-opacity-80 border border-pitch-black w-full text-sm">
              Create Account
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
