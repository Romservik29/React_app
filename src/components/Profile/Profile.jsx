import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My posts/MyPosts';
import Profile_info from './ProfileInfo/Profile_info';
import NewPost from './My posts/Posts/NewPost';
import { updateNewPostTextActionCreator } from '../../redux/state';



let Profile = (props) => {
    return (<div className={classes.content}>
        <Profile_info/>
        <NewPost newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch} />
        <MyPosts posts={props.profilePage.posts}/>
        
      </div>
      )
}
export default Profile;