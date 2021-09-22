import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import Stores from './Stores';
import {Link} from "react-router-dom"
import "./register.css";


const Register = () => {
    return (
        <div>
        <div className="form-reg-box">
       
            <div className="forms-box">

            <div className="register">
            <Link to='/'><img className='reg-logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt='gram'/></Link>
            <p className="photos-friends">Sign up to see photos and videos <br></br> from your friends. </p>
             <form>
               <Link to="/NewsFeed">
          <button className="reg-btn">
            <FaFacebookSquare className="fb" />
            Log in with Facebook
          </button>
          </Link>
          <div className="signUpForm">
            <div className="lineBox">
              <div className="line1"></div>
              <div className="or">OR</div>
              <div className="line2"></div>
            </div>
            <input className="reg-inputs" type="text" placeholder="Mobile Number or Email"
            />
        
            <input className="reg-inputs" type="text" placeholder="Full Name"/>

            <input className="reg-inputs" type="text" placeholder="Username"/>
            <input className="reg-inputs" type="text" placeholder="Password"/>
            </div>
            <Link to="/NewsFeed">
            <button className="reg-btn">
                Sign up
            </button>
            </Link>
            <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
            </form>
            </div>
         
        </div>
        </div>
        <div className="logs">
        <div className="signUp">
          <p>Have an account?<Link className="sup" to="/SignUp">Log in </Link></p>
          </div>
        </div>
    
           <Stores/>
      
       
        </div>
    )
}

export default Register
