const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let InitialState ={
        posts: [
            { id: 1, name: 'Kolya', message: "HI" },
            { id: 2, name: 'Nikita', message: "How are you?" },
            { id: 3, name: 'Kostya', message: "Do you cut my grass" }
        ],
        newPostText: ''
}

const profileReducer = (state =InitialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                name: 'Bite'
            };
            return{
            ...state,
            posts: [...state.posts,newPost],
            newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            };


        default:
            return state
    }
}


export const updateNewPostTextActionCreator=(text)=>{
    return{
        type: UPDATE_NEW_POST_TEXT , 
        newText: text
    }    
}

export const addPostActionCreator =()=>({type: ADD_POST})

export default profileReducer;