
import React from 'react';
import { connect } from 'react-redux';
import {
    addBookmark,
    delBookmark,
    setCurrentPage,
    setNovels,
    setTotalNovelsCount,
    toggleIsFetching,
    toggleBookmarking
} from '../../redux/novels-reducer';
import NovelAPI from '../../api/api'

import Preloader from '../common/Preloader';
import Novels from './Novels';


class NovelsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
       NovelAPI.getNovels()
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setNovels(data.items)
                this.props.setTotalNovelsCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        NovelAPI.getPagesNovels(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setNovels(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Novels onPageChanged={this.onPageChanged}
                totalNovelsCount={this.props.totalNovelsCount}
                pageSize={this.props.pageSize}
                addBookmark={this.props.addBookmark}
                delBookmark={this.props.delBookmark}
                novels={this.props.novels}
                currentPage={this.props.currentPage}
                toggleBookmarking={this.props.toggleBookmarking}
                bookmarking={this.props.bookmarking}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        novels: state.novelsPage.novels,
        pageSize: state.novelsPage.pageSize,
        totalNovelsCount: state.novelsPage.totalNovelsCount,
        currentPage: state.novelsPage.currentPage,
        isFetching: state.novelsPage.isFetching,
        bookmarking: state.novelsPage.bookmarking
    
    }
}

export default connect(mapStateToProps, {
    addBookmark,
    delBookmark,
    setNovels,
    setCurrentPage,
    setTotalNovelsCount,
    toggleIsFetching,
    toggleBookmarking
})(NovelsContainer);