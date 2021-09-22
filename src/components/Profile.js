import React from 'react'
import Footer from './landingPage/Footer'
import Navbar from './Navbar'
import { BsGearWide, BsGrid3X3 } from "react-icons/bs";


const Profile = () => {
    return (
        <>
        <Navbar/>
        <div className="profile">
            
            <div className="pro-header">
                <img className="profile-pic" src="https://i.ibb.co/J5zMpZV/154747564-1313332942372786-3451124044976842327-n.jpg" alt="buildings"/>
            <div className="first-line">
                <h1 className="pro-name">MenaDawg</h1>
                <h2 className="edit-pro">Edit Profile</h2>
                <BsGearWide className="gear"/>
                <div className="sec-line">

                <h2 className="following">5 posts</h2>
                </div>
                <h2 className="following">1,056 followers</h2>
                <h2 className="following">950 following</h2>
                <h3 className="following">Just a doggo</h3>
            
            </div>

                
            </div>
            <div>
                <h3 className="pro-posts"><BsGrid3X3 className="grid"/>Posts</h3>
                <div className="pic-grid">
                    <img className="ig-pics" src=" https://images.pexels.com/photos/7245371/pexels-photo-7245371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="buildings"/>
                    <img className="ig-pics" src=" https://images.pexels.com/photos/7240376/pexels-photo-7240376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="buildings"/>
                    <img className="ig-pics" src=" https://images.pexels.com/photos/4515802/pexels-photo-4515802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="buildings"/>
                    <img className="ig-pics" src="https://images.pexels.com/photos/7161190/pexels-photo-7161190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt="buildings"/>
                    <img className="ig-pics" src=" https://images.pexels.com/photos/7240356/pexels-photo-7240356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="buildings"/>


                </div>
            </div>
           
           
            <Footer/>
        </div>
        </>
    )
}

export default Profile
