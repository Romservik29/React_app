import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import BackgroundImg from './components/BackgroundImg';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NovelsContainer from './components/Novels/NovelsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializingApp} from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializingApp();
}
  render(){
    if(!this.props.initialized) return <Preloader className='preloader'/>
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <BackgroundImg />
        <div className='app-wrapper-content'>
          <Route path="/profile/:userId?" render={()=><Profile   
              store={this.props.store}
              dispatch={this.props.dispatch}
          />}/>
                                   
          <Route path="/dialogs" render={()=><DialogsContainer
              store={this.props.store} 
              dispatch={this.props.dispatch}
          />}/>      
          <Route path="/novels" render={()=><NovelsContainer/>} 
          />
          <Route path="/login" render={()=><Login />}
          />
        </div>
        <Footer/>
      </div>
  );
}
}

const mapStateToProps= (state)=>({
      initialized: state.app.initialized
})

export default compose( 
  withRouter,
  connect(mapStateToProps,{initializingApp}))(App);
