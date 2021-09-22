import React, {useState} from 'react'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {TiHeartFullOutline} from 'react-icons/ti'
import {IoChatbubbleOutline} from 'react-icons/io5'
import {FaRegBookmark} from 'react-icons/fa'

import { Link } from "react-router-dom"
import "./LikeBar.css"

export default function LikeBar() {
  const [likes, setLikes]=useState(0) 
  
  
  
  // toggleIcon = ({}) => {
  //   return 
    
  // };
  


  return (
      <div className='likebar-icons'>
        <div className="left active">
          <button 
            onClick={()=> setLikes(likes + 1)}
              className={ likes ? "likes" : "icon-heart2" }>
          <TiHeartFullOutline className='icon-heart' />
          </button>
            <Link to="/" ><IoChatbubbleOutline className='icon' /></Link>
            <Link to="/" ><IoPaperPlaneOutline className='icon' /></Link> 
            <p className="likedBy">Liked by dellirious and {likes} others</p>
        </div>
        <div className='right active'>
            <Link to="/" ><FaRegBookmark className='icon' /></Link>
        </div>
    </div>
  )
}

