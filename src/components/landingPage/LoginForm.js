import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <form>
        <div className="login">
          <input type="text" placeholder="Phone number, username, or email" />
        </div>
        <div className="login">
          <input type="text" placeholder="Password" />
        </div>
        <div className="login2">
          <button className="loginBtn">Log In</button>

          <p>
            <FaFacebookSquare />
            Log in with Facebook
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
