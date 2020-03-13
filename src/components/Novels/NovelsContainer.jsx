
import React from 'react';
import { connect } from 'react-redux';
import {
    addBookmark,
    delBookmark,
    setCurrentPage,
    setNovels,
    setTotalNovelsCount,
    toggleIsFetching,
    toggleBookmarking,
    getNovels
} from '../../redux/novels-reducer';
import Preloader from '../common/Preloader';
import Novels from './Novels';


class NovelsContainer extends React.Component {
    componentDidMount() {
        this.props.getNovels();
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getNovels(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Novels onPageChanged={this.onPageChanged}
                {...this.props}
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
    toggleBookmarking,
    getNovels
})(NovelsContainer);