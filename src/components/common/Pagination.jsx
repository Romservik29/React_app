import React from "react";
import css from "./Pagination.module.css"


const Pagination = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalNovelsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i < 10; i++) pages = [...pages, i];
    pages = [...pages,pagesCount];
    return <div>
        {pages.map(p => { 
            return (
                (props.currentPage===p)
                ?<span className={css.active}
                onClick={(e) => { props.onPageChanged(p); }}>{p}  </span>
                :<span onClick={(e) => { props.onPageChanged(p); }}>{p}  </span>)
        })}
    </div>
}


export default Pagination;