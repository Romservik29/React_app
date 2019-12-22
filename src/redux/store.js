import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

        profileReducer(this._state.profilePage,action);
        dialogsReducer(this._state.messagesPage,action);
        this._callSubscriber(this._state)     
    }
}








window.store = store;






export default store;
