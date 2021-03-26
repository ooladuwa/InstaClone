import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import "./posts.css";
import LikeBar from "./LikeBar"

const Post = () => {
    return (
        <div className="postBox">
    

        <div className="post">
            <div className="postHeader">

            <Avatar 
                className="postAvatar"
                alt="insta"
                src="/public/photos/instaClone.png"
            />
            <h3>Username</h3>
            </div>
           
            <img className="postImage" src="https://i.ibb.co/1fxLG9j/Pollock.png" alt="avatar"/>
            {/* image */}
            
            <LikeBar />
            
            {/* username and caption  */}
            <h4 className="postText"><strong>JPollock:</strong>The Old Homestead</h4>
            
            
        </div> 
         </div>
    )
}

    

export default Post






