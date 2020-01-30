import React from 'react';
import Novel from './Novel/Novel';


const Novels = (props) => {
    debugger
    let NovelsElement = props.novels.map(n => <Novel key={n.novelId} novelName={n.novelName} bookmarked={n.bookmarked}/> )
    return (
        <div>
            {NovelsElement}
        </div>

    )
}
export default Novels;