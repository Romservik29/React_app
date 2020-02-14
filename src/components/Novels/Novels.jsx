import React from 'react';
//import Novel from './Novel/Novel';
import img from '../../img/YinYan.jpg';


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
                <img src={img} alt={n.name} />
                <p>Description </p>
                {n.followed
                    ? <button onClick={() => props.addBookmark(n.id)}>В закладки</button>
                    : <button onClick={() => props.delBookmark(n.id)}>Из закладок</button>}
            </div>
            )
        }
    </div>
}








export default Novels;