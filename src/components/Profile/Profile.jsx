import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './My posts/MyPosts';

let Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src="https://avatars.mds.yandex.net/get-pdb/2058301/f69c6a82-d15d-4fb0-9e3c-cb6a1469bfdb/s800"></img>
        </div>
        <div>
            ava + descr
  </div>
        <MyPosts/>
      </div>
      )
}
export default Profile;