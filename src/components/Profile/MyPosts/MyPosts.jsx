import React from 'react';
import Posts from './Posts/Post';
import NewPost from './Posts/NewPost';
import css from './MyPost.module.css'



const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Posts name={p.name} key={p.id} message={p.message}/>);
    
    return (
    <div className={css.wrapper}>
        <NewPost addPost={props.addPost}/>
        {postElements}
    </div >
    )
}



export default MyPosts;