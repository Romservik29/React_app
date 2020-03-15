import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader'
import img from '../../../img/YinYan.jpg'

let ProfileInfo = (props) => {
    if (!props.novelInfo) {
        return <Preloader />
    }
    return (<div className={classes.content}>
        <div className={classes.user_image}>
            <img src={props.novelInfo.photos.large != null
                ? props.novelInfo.photos.large
                : img} alt="" />
        </div>
        <div className={classes.user_info}>
            <div className={classes.user_info_name}>{props.novelInfo.fullName}</div>
            <div>29.10.2012</div>
            <div>{props.novelInfo.status != null
                ? props.novelInfo.status
                : 'status'}</div>
            <div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita eligendi
                libero deserunt ab aliquam optio labore, officia rerum reprehenderit
                similique recusandae fuga, sunt, excepturi vel blanditiis officiis nihil harum.
             </p>
            </div>
        </div>


    </div>
    )
}
export default ProfileInfo;