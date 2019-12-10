import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My posts/MyPosts';
import Profile_info from './Profile_info/Profile_info';



let Profile = (props) => {
  debugger;
    return (<div className={classes.content}>
        <Profile_info/>
        <MyPosts posts={props.state.posts}/>
      </div>
      )
}
export default Profile;