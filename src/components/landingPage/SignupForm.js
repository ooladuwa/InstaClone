import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="signUp">
      <p>Don't have an account?<Link className="sup" to="https://www.instagram.com/accounts/emailsignup/">Sign up</Link></p>
    </div>
  );
}

export default SignupForm;
