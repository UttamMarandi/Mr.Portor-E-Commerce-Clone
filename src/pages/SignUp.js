import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { EyeIcon } from "@heroicons/react/outline";
import { EyeOffIcon } from "@heroicons/react/outline";

const SignUp = () => {
  const [caretColor, setCaretColor] = useState("black");
  const inputEl = useRef(null);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
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
    <div className="signup_page">
      <Header />
      <main className="signup_main max-w-lg mx-auto">
        <div className="signup_form pt-16">
          <h2 className="text-3xl">Register</h2>
          <form action="">
            <div className="name pt-8 block focus:bg-red-300">
              <label htmlFor="" className="label ">
                Email Address
              </label>
              <input
                className="input block border border-gray-400 py-3 px-3 w-full focus:outline-none "
                type="text"
              />
            </div>
            <div className="password pt-8 block">
              <label htmlFor="" className="label ">
                Password
              </label>
              <input
                className="input block border border-gray-400 py-3 px-3 w-full focus:outline-none "
                type="password"
              />
            </div>
            <div className="password_2 block">
              <label>Enter your password</label>
              <div className="eye_div">
                <input
                  className="input block border border-gray-400 py-3 px-3 w-full focus:outline-none "
                  href={inputEl}
                  style={{ caretColor: caretColor }}
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                />
                <div
                  className="icon_button"
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
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
