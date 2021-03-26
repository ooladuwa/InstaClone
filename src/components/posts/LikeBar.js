import React from 'react'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {FiHeart} from 'react-icons/fi'
import {IoChatbubbleOutline} from 'react-icons/io5'
import {FaRegBookmark} from 'react-icons/fa'
import {FaBookmark} from 'react-icons/fa'
import { Link } from "react-router-dom"
import "./LikeBar.css"

export default function LikeBar() {
  
  return (
      <div className='likebar-icons'>
        <div className="left active">
            <Link to="/" ><FiHeart className='icon' /></Link>
            <Link to="/" ><IoChatbubbleOutline className='icon' /></Link>
            <Link to="/" ><IoPaperPlaneOutline className='icon' /></Link>
        </div>
        <div className='right active'>
            <Link to="/" ><{...active ? FaRegBookmark : FaBookmark} className='icon' /></Link>
        </div>
    </div>
  )
}

