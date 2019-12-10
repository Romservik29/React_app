
let state = {
    profilePage: {
        posts: [
            { id: 1, name: 'Kolya', message: "HI" },
            { id: 2, name: 'Nikita', message: "How are you?" },
            { id: 3, name: 'Kostya', message: "Do you cut my grass" }
        ],
 
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
        ]
    }
}

export default state;