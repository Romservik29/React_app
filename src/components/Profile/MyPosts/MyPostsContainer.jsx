import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'


let mapStateToProps = (state)=>{
    return{
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    name: state.profilePage.posts.name,
    message: state.profilePage.posts.message
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateText: (text)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(MyPosts) ;