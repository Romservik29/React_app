import React from 'react';
import Posts from './Posts/Posts';

let posts = [
    { id: 1, name: 'Kolya',  message: "HI" },
    { id: 2, name: 'Nikita',  message: "How are you?" },
    { id: 3, name: 'Kostya',  message: "Do you cut my grass" }
]

let postElements = posts
    .map(p => <Posts name={p.name} message={p.message}/>);

const MyPosts = () => {
    return (
    <div>
        {postElements}
    </div >
    )
}



export default MyPosts;