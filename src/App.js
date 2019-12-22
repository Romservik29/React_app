import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import BackgroundImg from './components/BackgroundImg';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <BackgroundImg />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={()=><Profile   
              store={props.store}
              dispatch={props.dispatch}
                                 /> }/>
                                   
          <Route path="/dialogs" render={()=><DialogsContainer
              store={props.store} 
              dispatch={props.dispatch}
              />} />      
        </div>
      </div>
  );
}


export default App;
