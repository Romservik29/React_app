
import React from 'react';
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


class NovelsContainer extends React.Component {
    componentDidMount() {
        this.props.setCurrentPage(1);
        this.props.getNovels();        
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getNovels(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
         <Pagination totalNovelsCount={this.props.totalNovelsCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
    />

          {this.props.isFetching ? <Preloader/> : <Novels onPageChanged={this.onPageChanged}
                {...this.props}
            />}
        </>
    }
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