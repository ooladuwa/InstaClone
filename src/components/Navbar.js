import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { AiOutlineSearch } from "react-icons/ai"
import {AiFillHome} from 'react-icons/ai'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {RiCompassDiscoverLine} from 'react-icons/ri'
import {FiHeart} from 'react-icons/fi'
import {IoPersonCircleSharp} from 'react-icons/io5'

const Navbar = () => { 
  const [showSearch, setShowSearch] = useState(false)
  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }
  return (
        <header className='main-nav'>
          <div className="navbox2">
          <div className='g-logo'>
            <Link to='/'><img className='gram-logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt='gram'/></Link>
          </div>

          <div className='search-input'>
            <input 
                className='input'
                type='text'
                name='query'
                placeholder='Search'
                >
            </input> <AiOutlineSearch className='search-icon'/>
          </div>

          <div className='media-search'>
            <button className='search-button' onClick={toggleSearch}><AiOutlineSearch className='media-icon'/></button>
            {showSearch ? <div className='search-bar'><input className='media-input'
                type='text'
                name='query'
                placeholder='Search'/></div> : null}
             </div>   
          
          <div className='navbar-icons'>
            
            <Link to="/Profile"><AiFillHome className='icon' /></Link>
            <Link to="/Profile" ><IoPaperPlaneOutline className='icon' /></Link>
            <Link to="/Profile" ><RiCompassDiscoverLine className='icon' /></Link>
            <Link to="/Profile" ><FiHeart className='icon' /></Link>
            <Link to="/Profile" ><IoPersonCircleSharp className='avatar'/></Link>
            {/* <Avatar style={{ height: '20px', width: '20px' }}></Avatar> */}
            
            </div>
            
          </div>

            
        </header>
    )
}




export default Navbar
