import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {Link} from "react-router-dom"


const SignUp = () => {
  return (
    <div>
      {/* logo goes here */}
      <div className="formBox">
        <form>
          
          <p className="facebook">
            <FaFacebookSquare className="fb" />
            Log in with Facebook
          </p>
          <div className="signUpForm">
            <div className="lineBox">
              <div className="line1"></div>
              <div className="or">OR</div>
              <div className="line2"></div>
            </div>
            <h2>Sign up to see photos and videos from your friends.</h2>
            <input type="text" placeholder="Mobile Number, or Email" />

            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />

            <Link to="/NewsFeed"><button  className="loginBtn">Sign Up</button></Link>
            <p>
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
          </div>
        </form>
      </div>

      {/* have an account... and google/app buttons stuff */}
    </div>
  );
};

export default SignUp;
