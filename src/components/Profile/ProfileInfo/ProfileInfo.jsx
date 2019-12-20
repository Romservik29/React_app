import React from 'react';
import classes from './ProfileInfo.module.css';

let Profile_info = () => {
    return (<div className={classes.content}>
        <div className={classes.user_image}>
        <img src="https://sun9-7.userapi.com/c855436/v855436900/a239f/VivQETh5kbo.jpg" />
        </div>
        <div className={classes.user_info}>
            <div className={classes.user_info_name}>Roman Brovka</div>
            <div>29.10.2012</div>
            <div>about</div>
        </div>
    </div>
    )
}
export default Profile_info;