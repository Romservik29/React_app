import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer'
import NovelAPI from '../../api/api';


class HeaderContainer extends React.Component {

    componentDidMount() {
        NovelAPI.authMe()
            .then(data => {
                if (data.data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)