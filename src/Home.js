import React from 'react'

import "./App.css";
import LoginForm from "./components/landingPage/LoginForm";
import SignupForm from "./components/landingPage/SignupForm";
import Stores from "./components/landingPage/Stores";
import Footer from "./components/landingPage/Footer";
import Phones from "./components/landingPage/Phones";
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
                  <div className="box1">
        <div className="phones">
          <Phones />
        </div>
        <div className="formBox">
          <div className="signUps">
              <Link to="/Home">
            <img
              className="logo"
              src="https://i.ibb.co/ZVDVW7p/insta-Logo.png"
              alt="logo"
            /></Link>
            <LoginForm />
          </div>
          <SignupForm />
          <Stores />
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default Home
