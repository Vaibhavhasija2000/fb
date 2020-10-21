import React from 'react';
import classes from './Header.css';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreFrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../StateProvider';
function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img 
                src="http://www.pngplay.com/wp-content/uploads/3/Facebook-Logo-PNG-Clipart-Background.png"></img>

                <div className={classes.header__input}>
                    <SearchIcon />
                    <input placeholder= 'Search Facebook'type="text" />
                </div>
            </div>
  
            <div className={classes.header__center}>
                <div className={classes.header__option} >
                    <HomeIcon fontSize="large" />
                </div>
                <div className={classes.header__option}>
                    <FlagIcon fontSize="large" />
                </div>
                <div className={classes.header__option}>
                    <SubscriptionOutlinedIcon fontSize="large"/>
                </div>
                <div className={classes.header__option}>
                    <StoreFrontOutlinedIcon fontSize="large" />
                </div>
                <div className={classes.header__option}>
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>

            </div>
            <div className={classes.header__right}>
                <div className={classes.header__info}>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>

        </div>
    )
}

export default Header;
