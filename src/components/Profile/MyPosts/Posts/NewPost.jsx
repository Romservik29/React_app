import React from 'react';



const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onPostChange =()=>{   
        let text = newPostElement.current.value;
        props.updateText(text);        
    }
    
    return (
    <div className={'classes.post'}>
        <div>
            <textarea onChange={onPostChange} 
                      ref={newPostElement}
                      value={props.newPostText} />
        </div>
        <div>
            <button onClick={ props.addPost }>Send</button>
        </div>
    </div>)
}



export default NewPost;