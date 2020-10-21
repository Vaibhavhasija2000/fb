import React,{useEffect} from 'react';
import classes from './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from'@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({profilePic,image, username, timestamp,
message}) {
    // var s = null;
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         s = 
          
    //     }, 1000);
    //     return () => clearTimeout(timer);
    //   }, []);
    
    return (<div className={classes.post}>
        <div className={classes.post__top}>
            <Avatar src={profilePic}
            className={classes.post__avatar} />
            <div className={classes.post__topInfo}>
                <h3>{username}</h3>
                {/* <p> {new Date(timestamp.toDate()).toUTCString()}</p> */}
                <p>20-10-2020</p>
            </div>
            </div>

            <div className={classes.post__bottom}>
                <p>{message}</p>
                
            </div>
            <div className={classes.post__image}>
                <img src={image} alt="" />
            </div>
            <div className={classes.post__options}>
                <div className={classes.post__option}>
                    <ThumbUpIcon />
                    <p>Like</p>

                </div>
                <div className={classes.post__option}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>

                </div>
                <div className={classes.post__option}>
                    <NearMeIcon/>
                    <p>Share</p>

                </div>
                <div className={classes.post__option}>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                    

                </div>
            

        </div>
    </div>
    );
}
    

export default Post;