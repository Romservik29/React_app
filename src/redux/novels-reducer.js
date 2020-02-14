const ADD_BOOKMARK = 'ADD-BOOKMARK'
const DEL_BOOKMARK = 'DEL-BOOKMARK'
const SET_NOVELS = 'SET-NOVELS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_NOVELS_COUNT = 'SET-TOTAL-NOVELS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    novels: [],
    totalNovelsCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true
};

const novelsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_BOOKMARK:
            return {
                ...state,
                novels: state.novels.map(novel => {
                    if (novel.novelId === action.novelId)
                        return { ...novel, bookmarked: false }
                    return novel
                }
                )
            }
        case DEL_BOOKMARK:
            return {
                ...state,
                novels: state.novels.map(novel => {
                    if (novel.novelId === action.novelId)
                        return { ...novel, bookmarked: true }
                    return novel
                }
                )
            }
        case SET_NOVELS: {
            return { ...state, novels: [...action.novels] }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.count }
        }
        case SET_TOTAL_NOVELS_COUNT: {
            return { ...state, totalNovelsCount: action.count }
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
        }
        default:
            return state;
    }

}

export const addBookmark            = (novelId) => ({ type: ADD_BOOKMARK, novelId });
export const delBookmark            = (novelId) => ({ type: DEL_BOOKMARK, novelId });
export const setNovels              = (novels) => ({ type: SET_NOVELS, novels });
export const setCurrentPage         = (PageNumber) => ({ type: SET_CURRENT_PAGE, PageNumber });
export const setTotalNovelsCount    = (totalNovelCount) => ({ type: SET_TOTAL_NOVELS_COUNT, count: totalNovelCount });
export const toggleIsFetching       = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching});

export default novelsReducer;