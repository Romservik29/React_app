import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const NewPostContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let posts = store.getState().profileReducer.posts;
                const addPost = () => { store.dispatch(addPostActionCreator()) };
                const onPostChange = (text) => { store.dispatch(updateNewPostTextActionCreator(text)) };
                let newPostText = store.getState().profileReducer.newPostText;

                return (
                    <MyPosts newPostText={newPostText} updateText={onPostChange} addPost={addPost} posts={posts} />)
            }
        }</StoreContext.Consumer>)
}



export default NewPostContainer;