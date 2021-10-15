import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <div className="login_page">
      <Header />
      <main className="login_main max-w-2xl mx-auto ">
        <div className="login_form pt-16">
          <h2>Sign in</h2>
          <form action="">
            <div className="name">
              <label htmlFor=""></label>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
