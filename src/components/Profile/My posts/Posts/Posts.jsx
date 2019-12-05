import React from 'react';
import classes from './Posts.module.css'

const Posts = (props) => {
    return (
    <div className={classes.post}>
        <img src="https://sun9-7.userapi.com/c855436/v855436900/a239f/VivQETh5kbo.jpg"/>
        <span className={classes.username}>{props.username}
        </span>
        <div className={classes.message}>{props.message}
        </div>
    </div>)
}



export default Posts;