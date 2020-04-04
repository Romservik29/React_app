import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZE= 'SET_INITIALIZE'

let initialState = {
    initialized: false
}


const appReducer = (state =initialState, action) => {   
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }    
}

export const initializedSuccess =()=>({type: SET_INITIALIZE})

export const initializingApp =()=> (dispatch)=>{
    dispatch(getAuthUserData())
    .then(()=>{
        dispatch(initializedSuccess())
    })
}



export default appReducer;