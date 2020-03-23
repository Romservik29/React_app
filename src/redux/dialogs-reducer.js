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
}


const dialogsReducer = (state =initialState, action) => {   
    switch (action.type) {
        case SEND_MESSAGE:
            return{
                ...state,
                messages:[...state.messages,{id: 1, message: action.message}]
            }

        default:
            return state;
    }    
}

export const sendMessage =(newMessage)=>({type: SEND_MESSAGE, message: newMessage})



export default dialogsReducer;