import React from "react";
import "./App.css";
import LoginForm from "./components/landingPage/LoginForm";
import SignupForm from "./components/landingPage/SignupForm";
import Stores from "./components/landingPage/Stores";
import Footer from "./components/landingPage/Footer";
import Phones from "./components/landingPage/Phones";

const App = () => {
  return (
    <div className="app">
      {/* THIS IS THE CONTAINER FOR THE PHONES IMAGE AND FORM BOX  */}
      {/* create links to navigate home and posts */}
      <div className="box1">
        <div className="phones">
          <Phones />
        </div>
        <div className="formBox">
          <div className="signUps">
            <img
              className="logo"
              src="https://i.ibb.co/NNSpHdL/instalogoo.png"
              alt="logo"
            />
            <LoginForm />
          </div>
          <SignupForm />
          <Stores />
        </div>
      </div>
      <Footer />
    </div>
  );

  // BUILD A SWITCH WITH A ROUTE FOR EACH COMPONENT PATH
};

export default App;
