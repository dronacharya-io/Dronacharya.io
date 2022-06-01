import "./loginSignUpPage.css";
import React, { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";

export const Loginpage = () => {
  const [toggle, setToggle] = useState(true);
  const Switch = () => {
    setToggle(!toggle);
    if (toggle) {
      document.getElementById("heading").innerHTML = "Hi There!";
      document.getElementById("para").innerHTML =
        "Create your account and get onboard.";
      document.getElementById("switch").innerHTML = "Sign In";
    } else {
      document.getElementById("heading").innerHTML = "Welcome Back!";
      document.getElementById("para").innerHTML =
        "Great to have you back. Sign in with your credenntials.";
      document.getElementById("switch").innerHTML = "Sign Up";
    }
  };

  return (
    <>
      <div id="outerCover">
        <div id="mainFrame">
          <div id="content">
            <h1 id="heading">Welcome Back!</h1>
            <p id="para">
              Great to have you back. Sign in with your credenntials.
            </p>
            <div id="switchmode">
              <p>New to community? Click the button below</p>
              <button id="switch" onClick={() => Switch()}>
                Sign Up
              </button>
            </div>
          </div>
          {toggle && <Login />}
          {!toggle && <Register />}
        </div>
      </div>
    </>
  );
};