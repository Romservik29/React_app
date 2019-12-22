import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPost from './MyPosts/Posts/NewPost';

let Profile = (props) => {
    return (<div className={classes.content}>
        <ProfileInfo/>
        <NewPost store={props.store}
                 dispatch={props.dispatch} />
        <MyPosts store={props.store}/>
        
      </div>
      )
}
export default Profile;