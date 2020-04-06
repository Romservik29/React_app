
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    unsubNovel,
    subNovel,
    setCurrentPage,
    setNovels,
    setTotalNovelsCount,
    toggleIsFetching,
    getNovels
} from '../../redux/novels-reducer';
import Preloader from '../common/Preloader';
import Novels from './Novels';
import Pagination from '../common/Pagination';
import { compose } from 'redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getBookmarking } from '../../redux/users-reselect';


const NovelsContainer= (props)=> {
    debugger
    useEffect(()=>{
        props.setCurrentPage(1);
        props.getNovels();       
    },[])


    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getNovels(pageNumber, props.pageSize);
    }


        return <>
         <Pagination totalNovelsCount={props.totalNovelsCount}
        pageSize={props.pageSize}
        onPageChanged={onPageChanged}
        currentPage={props.currentPage}
    />

          {props.isFetching ? <Preloader/> : <Novels onPageChanged={onPageChanged}
                {...props}
            />}
        </>    
}

let mapStateToProps = (state) => {
    return {
        novels: getUsers(state),
        pageSize: getPageSize(state),
        totalNovelsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        bookmarking: getBookmarking(state)

    }
}

export default compose(    
    withAuthRedirect,
    connect(mapStateToProps, {
        setNovels,
        setCurrentPage,
        setTotalNovelsCount,
        toggleIsFetching,
        getNovels,
        unsubNovel,
        subNovel}),



)(NovelsContainer);