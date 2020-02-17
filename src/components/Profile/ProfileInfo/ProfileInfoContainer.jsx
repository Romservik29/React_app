import React from 'react';
import * as axios from 'axios'
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo'
import {setNovel} from '../../../redux/novels-reducer'
import { withRouter } from 'react-router-dom';


class ProfileInfoContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                debugger
                this.props.setNovel(response.data);
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