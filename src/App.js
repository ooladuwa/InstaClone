import React from "react";
import "./App.css";
import LoginForm from "./components/landingPage/LoginForm";
import SignupForm from "./components/landingPage/SignupForm";
import Stores from "./components/landingPage/Stores";
import Footer from "./components/landingPage/Footer";

const App = () => {
  return (
    <div className="app">
      {/* THIS IS THE CONTAINER FOR THE PHONES IMAGE AND FORM BOX  */}
      <div className="box1">
        <div className="phones"></div>
        <div className="formBox">
          <img className="logo" src="https://i.ibb.co/gPdP4X9/instagram.png" />
          <LoginForm />
        </div>
        <div className="signUp">
          <SignupForm />
          <Stores />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
