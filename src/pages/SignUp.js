import React from "react";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <div className="signup_page">
      <Header />
      <main className="signup_main max-w-lg mx-auto">
        <div className="signup_form pt-16">
          <h2 className="text-3xl">Register</h2>
          <form action="">
            <div className="name pt-8 block">
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
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
