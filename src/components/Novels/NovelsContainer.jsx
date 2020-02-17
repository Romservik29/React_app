
import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {
    addBookmark,
    delBookmark,
    setCurrentPage,
    setNovels,
    setTotalNovelsCount,
    toggleIsFetching
} from '../../redux/novels-reducer';

import Preloader from '../common/Preloader';
import Novels from './Novels';


class NovelsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setNovels(res.data.items)
                this.props.setTotalNovelsCount(res.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setNovels(res.data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader style={ {position: 'absolute'}}/> : null}
            <Novels onPageChanged={this.onPageChanged}
                totalNovelsCount={this.props.totalNovelsCount}
                pageSize={this.props.pageSize}
                addBookmark={this.props.addBookmark}
                delBookmark={this.props.delBookmark}
                novels={this.props.novels}
                currentPage={this.props.currentPage}
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
    
    }
}

export default connect(mapStateToProps, {
    addBookmark,
    delBookmark,
    setNovels,
    setCurrentPage,
    setTotalNovelsCount,
    toggleIsFetching
})(NovelsContainer);