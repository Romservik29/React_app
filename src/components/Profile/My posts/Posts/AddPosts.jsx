import React from 'react';
import { rerenderEntireTree } from '../../../../render';



const AddPost = (props) => {
    let newPostElement = React.createRef();

    let addPost =() =>{
       let text = newPostElement.current.value;
       props.addPost(text);
       newPostElement.current.value="";
       rerenderEntireTree();
    }
    return (
    <div className={'classes.post'}>
        <div>
            <textarea ref={newPostElement} cols="30" rows="5"></textarea>
        </div>
        <div>
            <button onClick={ addPost }>Send</button>
        </div>
    </div>)
}



export default AddPost;