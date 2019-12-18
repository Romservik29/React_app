import React from 'react';


const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost =() =>{  
       let text = newPostElement.current.value;
       props.addPost(text);   
    }

    let onPostChange =()=>{   
        let text = newPostElement.current.value;
        props.updateNewPostText(text);        
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