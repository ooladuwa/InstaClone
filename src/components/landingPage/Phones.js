// import React, {useState, useEffect} from "react";
// import data from "../data"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const data=[
  {url:  "https://i.ibb.co/qFc0Y7v/154723023-907671823326636-1211577061545009351-n.png"},
  {url:"https://i.ibb.co/HYdBF3q/154908071-180609083565126-8169421138215144919-n.png"},
   {url:"https://i.ibb.co/m5ZxfFW/154955246-365125834456739-5208241392533073906-n.png"},
   {url:"https://i.ibb.co/XXqcTvC/image0.png"},
   {url:"https://i.ibb.co/8zsPyMz/155514503-1445296445801267-4618351323624038457-n.png"},
  {url:"https://i.ibb.co/RBz5qfH/IMG-0682.png"},
    ]

function Phones() {
return  <Carousel className="slides"
infiniteLoop={true}
autoPlay={true}
renderThumbs={()=>""}
renderArrowNext={()=>""}
renderArrowPrev={()=>""}
renderIndicator={false}
statusFormatter={()=>""}
transitionTime={450}

> 
 
{data.map(({url}, idx)=>{
  return <div className="imgBox">
  <div className="slides">
 
  <img className="slides" key={idx} src={url} alt ="images"/>
  </div>
  </div>
})}
</Carousel>






  
}

export default Phones;
