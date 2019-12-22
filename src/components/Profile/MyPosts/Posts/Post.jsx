import React from 'react';
import classes from './Post.module.css'


const Posts = (props) => {
    return (
    <div className={classes.post}>
        <img src="https://sun9-7.userapi.com/c855436/v855436900/a239f/VivQETh5kbo.jpg" />
        <span className={classes.name}>{props.name}
        </span>
        <div className={classes.message}>{props.message}
        </div>
    </div>)
}



export default Posts;