import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/dialogs">Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/feed">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}> 
                <NavLink activeClassName={classes.active} to="/setting">Setting</NavLink>
            </div>
            <div className={classes.item}> 
                <NavLink activeClassName={classes.active} to="/friends">Friends</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
