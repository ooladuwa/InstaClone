import React from "react";

const Footer = () => {
  return (
   <div className="extLinks">
      {/* THIS IS THE CONTAINER FOR THE FOOTER LINKS */}
     <div className="topNav">
        <nav>About</nav>
        <nav>Blog</nav>
        <nav>Jobs</nav>
        <nav>Help</nav>
        <nav>API</nav>
        <nav>Privacy</nav>
        <nav>Terms</nav>
        <nav>Top Accounts</nav>
        <nav>Hashtags</nav>
        <nav>Locations</nav>
     </div>
     <div className="bottomNav">
        <nav>Beauty</nav>
        <nav>Dance & Performance</nav>
        <nav>Fitness</nav>
        <nav>Food & Drink</nav>
        <nav>Home & Garden</nav>
        <nav>Music</nav>
        <nav>Visual Arts</nav>
    </div>
    <div className="copyBox">
    <div className="copyright">
        {/* English drop down */}
        {/* <p>English ^</p> */}
        <p>English ⌵</p>
       </div>
      <div className="copy"> <p>©2021 Instagram from Facebook</p>
     
      </div>
      </div>
    </div> 
  ); 
};

export default Footer;
