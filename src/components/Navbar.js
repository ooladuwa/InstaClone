import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { AiOutlineSearch } from "react-icons/ai"
import {AiFillHome} from 'react-icons/ai'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import {RiCompassDiscoverLine} from 'react-icons/ri'
import {FiHeart} from 'react-icons/fi'
import {IoPersonCircleSharp} from 'react-icons/io5'
import Avatar from '@material-ui/core/Avatar'

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

          <div className='navbar-icons'>
            <button onClick={toggleSearch}><AiOutlineSearch className='media-icon'/></button>
            {showSearch ? <input className='input'
                type='text'
                name='query'
                placeholder='Search'/> : null}
            <Link to="/"><AiFillHome className='icon' /></Link>
            <Link to="/" ><IoPaperPlaneOutline className='icon' /></Link>
            <Link to="/" ><RiCompassDiscoverLine className='icon' /></Link>
            <Link to="/" ><FiHeart className='icon' /></Link>
            <IoPersonCircleSharp className='avatar' />
            {/* <Avatar style={{ height: '20px', width: '20px' }}></Avatar> */}
            
            </div>
          </div>

            
        </header>
    )
}




export default Navbar
