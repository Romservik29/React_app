import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Background_img from './components/BackgroundImg';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Background_img />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={()=><Profile   
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
                                 /> }/>  
          <Route path="/dialogs" render={()=><Dialogs
              messagesPage={props.state.messagesPage} 
              dispatch={props.dispatch}
              />} />      
        </div>
      </div>
  );
}


export default App;
