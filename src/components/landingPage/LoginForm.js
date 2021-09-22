import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div >
      <div >
        <form>
          <div className="login">
            <input type="text" placeholder="Phone number, username, or email" />
          </div>
          <div className="login">
            <input type="text" placeholder="Password" />
          </div>
          <div className="login2">
          <Link to="/NewsFeed"> <button className="loginBtn">Log In</button></Link>
          </div>
          {/* ../posts/Post.js */}
          {/* <div className='line'>OR</div>  */}

          <div className="lineBox">
            <div className="line1"></div>
            <div className="or">OR</div>
            <div className="line2"></div>
          </div>
          <p className="facebook">
            <FaFacebookSquare className="fb" />
            Log in with Facebook
          </p>
          <p className="pass">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
