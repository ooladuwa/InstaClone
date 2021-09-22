import React  from 'react'
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
                src="https://i.ibb.co/WDZZhLJ/242400804-578875073472578-8505318888658746889-n.jpg" 
           
               
            />
            <h3>Potato</h3>
            </div>
           
            <img className="postImage" src="https://i.ibb.co/f0TJ5Bt/242495317-560563565143980-5452216555075341724-n.jpg" alt="avatar"/>
            {/* image */}
            
            <LikeBar />
           
            {/* username and caption  */}
            <h4 className="postText"><strong>Potato:</strong>#chillen</h4>
            
            
        </div> 


        <div className="post">
            <div className="postHeader">

            <Avatar 
                className="postAvatar"
                alt="insta"
                src="https://i.ibb.co/dGVbb4X/242587308-3026400714250096-718507365673806097-n.jpg" 
           
              
              
            />
            <h3>Peekaboo</h3>
            </div>
           
            <img className="postImage" src="https://i.ibb.co/2cx2bVK/242512816-1196419044191365-1132124415687614574-n.jpg"  alt="avatar"/>
            {/* image */}
            
            <LikeBar />
           
            {/* username and caption  */}
            <h4 className="postText"><strong>Peekaboo:</strong>Rose Garden</h4>
           
        </div> 

        <div className="post">
            <div className="postHeader">

            <Avatar 
                className="postAvatar"
                alt="insta"
                src="https://i.ibb.co/WDZZhLJ/242400804-578875073472578-8505318888658746889-n.jpg" 
           
               
            />
            <h3>Potato</h3>
            </div>
           
            <img className="postImage" src="https://i.ibb.co/9rsPhmg/242187943-1431728860562211-8680703525784977876-n.jpg" alt="avatar"/>
            {/* image */}
            
            <LikeBar />
           
            {/* username and caption  */}
            <h4 className="postText"><strong>Potato:</strong>Summer vibes</h4>
           
        </div> 

        
        <div className="post">
            <div className="postHeader">

            <Avatar 
                className="postAvatar"
                alt="insta"
                src="https://i.ibb.co/dGVbb4X/242587308-3026400714250096-718507365673806097-n.jpg" 
           
               
              
            />
            <h3>Peekaboo</h3>
            </div>
           
            <img className="postImage" src="https://i.ibb.co/t8vN94L/242507210-979199842929639-8547573952188674212-n.jpg"  alt="avatar"/>
            {/* image */}
            
            <LikeBar />
           
            {/* username and caption  */}
            <h4 className="postText"><strong>Peekaboo:</strong>Whirlpool falls</h4>
           
        </div> 
         </div>
    )
}

    

export default Post






