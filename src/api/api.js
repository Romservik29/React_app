import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "939f0134-49c1-40fd-85c2-271dfc5790ea"
    }
})

const NovelAPI = {
    getNovels() {
        return instance.get("users")
            .then(res => {
                return res.data;
            })
    },
    getPagesNovels(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(res => {
                return res.data;
            })
    },

    subptionNovel(novelId) {
        return instance.post(`follow/${novelId}`)
            .then(res => {
                return res.status
            })
    },
    unsubptionNovel(novelId) {
        return instance.delete(`follow/${novelId}`)
            .then(res => {
                return res.status
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => {
                return res.data;
            })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put("profile/status", {status: status})
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email,password, rememberMe = false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}



export default NovelAPI;




