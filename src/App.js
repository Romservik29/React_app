import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import BackgroundImg from './components/BackgroundImg';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NovelsContainer from './components/Novels/NovelsContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <BackgroundImg />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/novel/:userId?" render={()=><Profile   
              store={props.store}
              dispatch={props.dispatch}
                                 /> }/>
                                   
          <Route path="/dialogs" render={()=><DialogsContainer
              store={props.store} 
              dispatch={props.dispatch}
              />} />      
              <Route path="/novels" render={()=><NovelsContainer/>} />    
        </div>
      </div>
  );
}


export default App;
