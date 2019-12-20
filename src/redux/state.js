const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, name: 'Kolya', message: "HI" },
                { id: 2, name: 'Nikita', message: "How are you?" },
                { id: 3, name: 'Kostya', message: "Do you cut my grass" }
            ],
            newPostText: ''

        },
        messagesPage: {
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
    },

    getState(){
        return this._state;
    },   
     subscribe(observer){
        this._callSubscriber = observer;
    },

    _callSubscriber() {
    },

    addPost() {
  
    },
    updateNewPostText(newText){

    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === SEND_MESSAGE){
            let newMessage ={
                id:1,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
}

export const updateNewPostTextActionCreator=(text)=>{
    return{
        type: UPDATE_NEW_POST_TEXT , 
        newText: text
    }    
}

export const addPostActionCreator =()=>({type: ADD_POST})

export const updateNewMessageTextActionCreator=(text)=>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT , 
        newText: text
    }    
}

export const sendMessageActionCreator =()=>({type: SEND_MESSAGE})


window.store = store;






export default store;
