import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "391186b5-3d45-46a6-9d09-c0e4a652d59f"
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
    getNovel(novelId) {
        return instance.get(`profile/${novelId}`)
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
    unSubptionNovel(novelId) {
        return instance.delete(`follow/${novelId}`)
            .then(res => {
                return res.status
            })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}



export default NovelAPI;




