
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
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: 7,
            message: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}


window.store = store;






export default store;

/*export const updateNewMessageText= (newText)=>{
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}


export const addMessage = () => {
    let newMessage = {
        id: 7,
        name: 'Maks',
        message: state.profilePage.newMessageText
    };

    state.messagesPage.posts.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}
*/