import React from 'react';
import img from '../../../img/YinYan.jpg';


const Novel = (props) => {
    
    return (
        <div>
            <h2>{props.novelName}</h2>
            <img src={img} alt={props.novelName} />
            <p>Description </p>  
            {props.bookmarked ? <button onClick={()=>props.inBookmark(props.novelId)}>В закладки</button>: <button>Из закладок</button>}
        </div>

    )
}
export default Novel;