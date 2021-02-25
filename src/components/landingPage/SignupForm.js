import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="signUp">
      <p>Don't have an account?</p>
      <Link to="https://www.instagram.com/accounts/emailsignup/">Sign up</Link>
    </div>
  );
}

export default SignupForm;
