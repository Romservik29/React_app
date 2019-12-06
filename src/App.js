import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Backgound_img from './components/Background_img';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Backgound_img />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile" component={Profile} />  
          <Route path="/dialogs" component={Dialogs} />      
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
