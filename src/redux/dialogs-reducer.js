const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        messages: [
            { id: 1, message: "HI" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Do you cut my grass" }
        ],
        dialogs: [
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Denis' },
            { id: 3, name: 'Peter' }
        ],
        newMessageText: ''    
}


const dialogsReducer = (state =initialState, action) => {   
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
                newMessageText: action.newText
            };

        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messages:[...state.messages,{id: 1, message: newMessage}]
            }

        default:
            return state;
    }    
}

export const sendMessageActionCreator =()=>({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator=(text)=>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT , 
        newText: text
    }    
}


export default dialogsReducer;