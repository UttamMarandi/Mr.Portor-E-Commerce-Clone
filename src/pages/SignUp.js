import React, { useState, useRef } from "react";
import Header from "../components/Header";

import { EyeIcon } from "@heroicons/react/outline";
import { EyeOffIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

const SignUp = () => {
  //variables
  const [caretColor, setCaretColor] = useState("black");
  const inputEl = useRef(null);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [formValue, setFormValue] = useState({
    email: "",
    name: "",
    day: "",
    month: "",
    year: "",
  });
  //functions
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
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return (
    <div className="signup_page">
      <Header />
      <main className="signup_main max-w-lg mx-auto">
        <div className="signup_form pt-16">
          <h2 className="text-3xl">Register</h2>
          <form action="">
            <div className="email pt-8 block ">
              <label htmlFor="" className="label ">
                Email Address
              </label>
              <input
                className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                type="text"
                value={formValue.email}
                onChange={handleFormChange}
                name="email"
              />
            </div>
            {/* <div className="password pt-8 block">
              <label htmlFor="" className="label ">
                Password
              </label>
              <input
                className="input block border border-gray-400 py-3 px-3 w-full focus:outline-none "
                type="password"
              />
            </div> */}
            <div className="password_2 block pt-6 relative">
              <label>Password</label>
              <div className="eye_div">
                <input
                  className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                  href={inputEl}
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
            </div>
            <p className="text-sm">
              Your password must be eight characters or more and contain an
              uppercase letter and number
            </p>
            <div className="pt-5">
              <label htmlFor="">Name</label>
              <input
                className="input block border border-gray-300 focus:border-pitch-black py-3 px-3 w-full focus:outline-none "
                type="text"
                value={formValue.name}
                onChange={handleFormChange}
                name="name"
              />
            </div>
            <div className="date_pick pt-6">
              <label htmlFor="">Date of birt (Optional)</label>
              <div className="input_date_group flex">
                <input
                  type="number"
                  name="day"
                  className="day_input p-3 w-24 border border-gray-300 hover:border-pitch-black active:border-pitch-black focus:border-pitch-black focus:outline-none"
                  maxLength="2"
                  placeholder="DD"
                  value={formValue.day}
                  onChange={handleFormChange}
                />
                <input
                  type="number"
                  name="month"
                  className="day_input p-3 w-24 border-b border-t border-gray-300 hover:border-pitch-black active:border-pitch-black focus:border-pitch-black focus:outline-none "
                  maxLength="2"
                  placeholder="MM"
                  value={formValue.month}
                  onChange={handleFormChange}
                />
                <input
                  type="number"
                  name="year"
                  className="day_input p-3 w-24 border border-gray-300 hover:border-pitch-black active:border-pitch-black focus:border-pitch-black focus:outline-none "
                  maxLength="4"
                  placeholder="YYYY"
                  value={formValue.year}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <p className="text-sm pt-7">
              By registering, your account will be subject to the Terms and
              Conditions & Privacy Policy
            </p>
            <button className="mt-5 p-3 bg-pitch-black hover:bg-opacity-80 text-white w-full text-sm">
              Create Account
            </button>
            <div className="w-full h-px bg-gray-300 mt-12"></div>
            <h3 className="text-center pt-7 text-lg">
              Already have an account
            </h3>
            <button className="mt-8 p-3 mb-16 bg-white hover:bg-opacity-80 border border-pitch-black w-full text-sm">
              Sign In
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
