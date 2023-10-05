import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-[5px] bg-opacity-80">
        <h1 className=" font-medium text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" p-3 my-2 w-full bg-[#333333] rounded-[3.5px]"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className=" p-3 my-2 w-full bg-[#333333] rounded-[3.5px]"
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-3 my-2 w-full bg-[#333333] rounded-[3.5px]"
        />

        <button className=" p-3 my-8 bg-[#E50914] w-full rounded-[3.5px] cursor-pointer">
          {isSignInForm ? "Login" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            <span className=" text-[#737373]">New to Netflix? </span>
            <span className=" cursor-pointer" onClick={toggleSignInForm}>
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="py-4">
            <span className=" text-[#737373]">Already have an account? </span>
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              Sign In.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
