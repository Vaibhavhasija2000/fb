import React from 'react';
import classes from  './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({src, Icon, title}) {
    return (
        <div className={classes.sidebarRow}>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
           <h4 style={{color:'black'}}> {title}</h4>
        </div>
    )
}

export default SidebarRow;
