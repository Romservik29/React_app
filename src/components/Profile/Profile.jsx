import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './MyPosts/Posts/NewPost';

let Profile = (props) => {
    return (<div className={classes.content}>
       
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
        
      </div>
      )
}
export default Profile;