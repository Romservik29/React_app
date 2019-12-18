import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My posts/MyPosts';
import Profile_info from './ProfileInfo/Profile_info';
import NewPost from './My posts/Posts/NewPost';



let Profile = (props) => {
    return (<div className={classes.content}>
        <Profile_info/>
        <NewPost newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText} />
        <MyPosts posts={props.profilePage.posts}/>
        
      </div>
      )
}
export default Profile;