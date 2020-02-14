import React from 'react';
import preloader from "../../img/oval.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'red' } }>
        <img src={preloader } alt="" />
    </div>
}

export default Preloader;