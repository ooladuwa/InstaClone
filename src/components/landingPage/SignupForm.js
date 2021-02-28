import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  // const signUp = (event)=>{

  // }
// (grab snippet from material ui)
  return (
    <div className="signUp">
      <p>Don't have an account?<Link className="sup" to="https://www.instagram.com/accounts/emailsignup/">Sign up</Link></p>
    </div>
  );
}

export default SignupForm;
