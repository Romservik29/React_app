import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state';


const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost =() =>{  
       props.dispatch(addPostActionCreator());   
    }

    let onPostChange =()=>{   
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));        
    }

    return (
    <div className={'classes.post'}>
        <div>
            <textarea onChange={onPostChange} 
                      ref={newPostElement}
                      value={props.newPostText} />
        </div>
        <div>
            <button onClick={ addPost }>Send</button>
        </div>
    </div>)
}



export default NewPost;