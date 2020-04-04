import React from 'react';
import img from '../../img/YinYan.jpg';
import { NavLink } from 'react-router-dom';
import css from './Novels.module.css'

let Novels = (props) => {
    
    return <div className={css.wrapper}> 
        {props.novels.map(n => <div key={n.id}>
            <h2>{n.name}</h2>
            <NavLink to={`/profile/${n.id}`}>
                <img className={css.novelImg} src={n.photos.large != null
                    ? n.photos.small
                    : img} alt={n.name} />
            </NavLink>
            <p> {n.status != null
                ? n.status
                : 'status'} </p>
            {n.followed
                ? <button disabled={props.bookmarking.some(id => id === n.id)} onClick={() => {
                    props.unsubNovel(n.id)
                }}>
                    Из закладок</button>
                : <button disabled={props.bookmarking.some(id => id === n.id)} onClick={() => {
                    props.subNovel(n.id)
                }}>
                    В закладки</button>}
        </div>
        )
        }
    </div>
}
export default Novels;