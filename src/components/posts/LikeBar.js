import React, {useState} from 'react'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {FiHeart} from 'react-icons/fi'
import {IoChatbubbleOutline} from 'react-icons/io5'
import {FaRegBookmark} from 'react-icons/fa'
import {FaBookmark} from 'react-icons/fa'
import { Link } from "react-router-dom"
import "./LikeBar.css"

export default function LikeBar() {
  const [likes, setLikes]=useState(0) 
  const [bookmark, setBookmark]=useState(false)
  
  
  toggleIcon = ({}) => {
    return 
    
  };
  


  return (
      <div className='likebar-icons'>
        <div className="left active">
          <button 
            className="likes" 
            onClick={()=> setLikes(likes + 1) }>
          <FiHeart className='icon' />
          </button>
            <Link to="/" ><IoChatbubbleOutline className='icon' /></Link>
            <Link to="/" ><IoPaperPlaneOutline className='icon' /></Link> 
            <p>Liked by dellirious and {likes} others</p>
        </div>
        <div className='right active'>
            <Link to="/" ><FaRegBookmark className='icon' /></Link>
        </div>
    </div>
  )
}

