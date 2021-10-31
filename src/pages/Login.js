import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//Icons
import { EyeIcon } from "@heroicons/react/outline";
import { EyeOffIcon } from "@heroicons/react/outline";
//utility
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
  let email = formValue.email;
  let pass = values.password;
  console.log("formvalue", formValue);
  console.log("values", values);
  //backend connect
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, pass });
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
            {error && <span>Something went wrong</span>}
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
