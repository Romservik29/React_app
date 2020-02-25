import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo'
import {setNovel} from '../../../redux/novels-reducer'
import { withRouter } from 'react-router-dom';
import NovelAPI  from '../../../api/api';


class ProfileInfoContainer extends React.Component {

    componentDidMount(){
        let novelId = this.props.match.params.userId;
        if (!novelId) {
            novelId = 2;
        }
        NovelAPI.getNovel(novelId)
            .then(data => {
                this.props.setNovel(data);
            });
    }

    render() {
        return <ProfileInfo {...this.props}/>
    }
}

   let mapStateToProps =(state)=>({
        novelInfo: state.novelsPage.novel
    })

    let WithUrlNovelContainerComponent = withRouter(ProfileInfoContainer)

export default connect(mapStateToProps,{
    setNovel
})(WithUrlNovelContainerComponent);