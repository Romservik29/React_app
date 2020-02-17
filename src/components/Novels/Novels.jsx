import React from 'react';
import img from '../../img/YinYan.jpg';
import { NavLink } from 'react-router-dom';


let Novels = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalNovelsCount / props.pageSize)
    let pages = [];
    let stringPageLength = () => (pagesCount <= 10 ? pagesCount : 10)

    for (let i = 1; i <= stringPageLength() - 1; i++) pages = [...pages, i];
    pages = [...pages, "..." + pagesCount];
    return <div>
        <div>
            {pages.map(p => {
                return <span
                    onClick={(e) => { props.onPageChanged(p); }}>{p}  </span>
            })}
        </div>
        {
            props.novels.map(n => <div key={n.id}>
                <h2>{n.name}</h2>
                <NavLink to={`/novel/${n.id}`}>
                <img src={n.photos.large!=null
                                        ?n.photos.small
                                        :img} alt={n.name} />
                                        </NavLink>
                <p> {n.status!=null 
                            ?n.status
                            :'status'} </p>
                {n.followed
                    ? <button onClick={() => props.addBookmark(n.id)}>В закладки</button>
                    : <button onClick={() => props.delBookmark(n.id)}>Из закладок</button>}
            </div>
            )
        }
    </div>
}
export default Novels;