import React from 'react';
import classes from './Story.css';
import { Avatar } from '@material-ui/core';

function Story({image, profileSrc, title}) {
    return (
        <div style={{ backgroundImage: `url(${image})`}}className={classes.story}>
            <Avatar className={classes.story__avtar}
             src={profileSrc}/>
            <h4>{title}</h4>
            
        </div>
    )
}

export default Story;
