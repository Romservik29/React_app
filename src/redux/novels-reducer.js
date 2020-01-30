import img from '../img/YinYan.jpg'

const ADD_BOOKMARK = 'ADD-BOOKMARK'
const DEL_BOOKMARK = 'DEL-BOOKMARK'
const SET_NOVELS = 'SET-NOVELS'

let initialState = {
    novels: [
        { novelId:1, bookmarked: false, novelName:'YinYan', description: 'desc', image: img },
        { novelId:2, bookmarked: false,novelName:'', description: 'desc', image: img },
        { novelId:3, bookmarked: true,novelName:'', description: 'desc', image: img },
        { novelId:4, bookmarked: false,novelName:'', description: 'desc', image: img }
    ]
}

const novelsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                novels: state.novels.map({
                    callback: novel => {
                        if (novel.novelId === action.novelId)
                            return { ...novel, bookmarked: true }
                    }
                })
            }
        case DEL_BOOKMARK:
            return {
                ...state,
                novels: state.novels.map({
                    callback: novel => {
                        if (novel.novelId === action.novelId)
                            return { ...novel, bookmarked: false }
                    }
                })
            };
            case SET_NOVELS:
                return{...state, novels:[...state.novels, ...action.novels]}
        default:
            return state;
    }

}

export const addBookmarkAC = (novelId) => ({ type: ADD_BOOKMARK, novelId });
export const delBookmarkAC = (novelId) => ({ type: DEL_BOOKMARK, novelId });
export const setNovelsAC = (novels) => ({ type: SET_NOVELS, novels });


export default novelsReducer;