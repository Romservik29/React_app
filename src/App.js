import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import BackgroundImg from './components/BackgroundImg';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NovelsContainer from './components/Novels/NovelsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <BackgroundImg />
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
        <Footer/>
      </div>
  );
}


export default App;
