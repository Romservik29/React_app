import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const NewPostContainer = (props) => {

    const addPost =() => {props.store.dispatch(addPostActionCreator())};   
    const onPostChange =(text)=>{props.store.dispatch(updateNewPostTextActionCreator(text))};           
    const newPostText = props.store.getState().profileReducer.newPostText;
    let posts =props.store.getState().profileReducer.posts;

    return (<div><MyPosts newPostText={newPostText} updateText={onPostChange} addPost={addPost} posts={posts}/></div>)
    
}



export default NewPostContainer;