import React from 'react';
import Posts from './Posts/Posts';




const MyPosts = (props) => {
    
    let postElements = props.posts
    .map(p => <Posts name={p.name} message={p.message}/>);

    return (
    <div>
        {postElements}
    </div >
    )
}



export default MyPosts;