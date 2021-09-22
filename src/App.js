import React from "react";
import "./App.css";
// import LoginForm from "./components/landingPage/LoginForm";
// import SignupForm from "./components/landingPage/SignupForm";
// import Stores from "./components/landingPage/Stores";
// import Footer from "./components/landingPage/Footer";
// import Phones from "./components/landingPage/Phones";
import {Switch, Route} from "react-router-dom"

import Home from "./Home"
import NewsFeed from "./components/posts/NewsFeed"
import Navbar from "./components/Navbar";
import Register from "./components/landingPage/Register";
import Profile from "./components/Profile";




const App = () => {
  return (
    <div >

    <div className="app">
    
        <Switch>
          <Route path ="/Profile">
            <Profile/>
            </Route>
          <Route path ="/Register">
            <Register/>
          </Route>
        <Route path='/NewsFeed'>
          <Navbar/>
          <NewsFeed />          
        </Route>
        <Route path="/">
            <Home/>
        </Route>
      </Switch>
      

    </div>  
     </div>
  );

  // BUILD A SWITCH WITH A ROUTE FOR EACH COMPONENT PATH
};

export default App;
