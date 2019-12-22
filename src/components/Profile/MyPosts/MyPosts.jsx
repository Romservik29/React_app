import React from 'react';
import Posts from './Posts/Posts';




const MyPosts = (props) => {
    debugger;
    let posts =props.store.getState().profileReducer.posts;
    let postElements = posts.map(p => <Posts name={p.name} message={p.message}/>);

    return (
    <div>
        {postElements}
    </div >
    )
}



export default MyPosts;