import React from 'react';
import css from './Post.module.css'



const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onPostChange =()=>{   
        let text = newPostElement.current.value;
        props.updateText(text);        
    }
    
    return (
    <div className={css.newPost}>
        <div>
            <textarea onChange={onPostChange} 
                      ref={newPostElement}
                      value={props.newPostText}
                    />
        </div>
        <div>
            <button onClick={ props.addPost }>Send</button>
        </div>
    </div>)
}



export default NewPost;