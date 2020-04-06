export const getUsers =(state)=>{
    return state.novelsPage.novels
}

export const getTotalUsersCount =(state)=>{
    return state.novelsPage.totalNovelsCount
}
export const getPageSize =(state)=>{
    return state.novelsPage.pageSize
}
export const getCurrentPage =(state)=>{
    return state.novelsPage.currentPage
}

export const getIsFetching =(state)=>{
    return state.novelsPage.isFetching
}

export const getBookmarking =(state)=>{
    return state.novelsPage.bookmarking
}