import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My posts/MyPosts';
import Profile_info from './Profile_info/Profile_info';
import AddPost from './My posts/Posts/AddPosts';



let Profile = (props) => {
  debugger;
    return (<div className={classes.content}>
        <Profile_info/>
        <AddPost addPost={props.addPost}/>
        <MyPosts posts={props.state.posts}/>
      </div>
      )
}
export default Profile;