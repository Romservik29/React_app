import React from 'react';
import img from '../../img/YinYan.jpg';
import { NavLink } from 'react-router-dom';
import NovelAPI from '../../api/api';


let Novels = (props) => {
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
                    <img src={n.photos.large != null
                        ? n.photos.small
                        : img} alt={n.name} />
                </NavLink>
                <p> {n.status != null
                    ? n.status
                    : 'status'} </p>
                {n.followed
                    ? <button disabled={props.bookmarking.some(id=>id===n.id)} onClick={() => {
                        props.toggleBookmarking(true, n.id)
                        NovelAPI.unSubptionNovel(n.id)
                            .then(status => {
                                if (status === 200) props.delBookmark(n.id);
                                props.toggleBookmarking(false,n.id)
                            })
                    }}>
                        Из закладок</button>
                    : <button disabled={props.bookmarking.some(id=>id===n.id)} onClick={() => {
                        props.toggleBookmarking(true, n.id)
                        NovelAPI.subptionNovel(n.id)
                            .then(status => {
                                if (status === 200) props.addBookmark(n.id);
                                props.toggleBookmarking(false, n.id)
                            })
                    }}>
                        В закладки</button>}
            </div>
            )
        }
    </div>
}
export default Novels;