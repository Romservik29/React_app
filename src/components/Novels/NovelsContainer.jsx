
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
        {this.props.isFetching ? <Preloader /> : <Pagination totalNovelsCount={this.props.totalNovelsCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
    />}

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

export default compose(
    connect(mapStateToProps, {
        setNovels,
        setCurrentPage,
        setTotalNovelsCount,
        toggleIsFetching,
        getNovels,
        unsubNovel,
        subNovel}),
    withAuthRedirect


)(NovelsContainer);