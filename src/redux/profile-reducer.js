import {profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let InitialState = {
    posts: [{
            id: 1,
            name: 'Kolya',
            message: "HI"
        },
        {
            id: 2,
            name: 'Nikita',
            message: "How are you?"
        },
        {
            id: 3,
            name: 'Kostya',
            message: "Do you cut my grass"
        }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: action.text,
                name: 'Bite'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                    newPostText: ''
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                }
            }

            default:
                return state
    }
}


export const addPost = (text) => ({
    type: ADD_POST,
    text: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res));
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0)
                dispatch(setStatus(status));
        })
}

export default profileReducer;