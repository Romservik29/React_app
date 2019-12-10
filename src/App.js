import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Background_img from './components/Background_img';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Background_img />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={()=><Profile state={props.state.profilePage}/>}/>  
          <Route path="/dialogs" render={()=><Dialogs state={props.state.messagesPage}/>} />      
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
