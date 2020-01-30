
import {connect} from 'react-redux'
import { delBookmarkAC, addBookmarkAC, setNovelsAC } from '../../redux/novels-reducer';
import Novels from './Novels'

let mapStateToProps = (state)=>{
    return{
    novels: state.novelsPage.novels
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        inBookmark: (novelId)=>{
            dispatch(addBookmarkAC(novelId))
        },
        delBookmark: (novelId)=>{
            dispatch(delBookmarkAC(novelId))
        },
        setNovels:(novels)=>{
            dispatch(setNovelsAC(novels))
        }
    }
}

const NovelsContainer = connect(mapStateToProps,mapDispatchToProps)(Novels) 


export default NovelsContainer;