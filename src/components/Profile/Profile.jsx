import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './MyPosts/Posts/NewPost';

let Profile = (props) => {
    return (<div className={classes.content}>
        <ProfileInfo/>
        <NewPost newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch} />
        <MyPosts posts={props.profilePage.posts}/>
        
      </div>
      )
}
export default Profile;