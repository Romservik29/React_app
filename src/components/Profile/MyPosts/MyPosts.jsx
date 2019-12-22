import React from 'react';
import Posts from './Posts/Post';
import NewPost from './Posts/NewPost';




const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Posts name={p.name} message={p.message}/>);

    return (
    <div> 
        <NewPost newPostText={props.newPostText} updateText={props.updateText} addPost={props.addPost}/>
        {postElements}
    </div >
    )
}



export default MyPosts;