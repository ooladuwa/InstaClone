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
      <div className="box1">
    
          <div className="phones">
          <Phones/>
       
            </div> 
           

        <div className="formBox">
    
         <div className="signUps"> 
   
        <img className="logo" src="https://i.ibb.co/gPdP4X9/instagram.png" alt="logo" />
        

          <LoginForm />
        </div>
     
          <SignupForm />
          <Stores />
         </div>
      
      </div>
           
         <Footer />
  </div>
    
  );
};

export default App;
