import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Backgound_img from './components/Background_img';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Backgound_img/>
      <Navbar />
      <Profile/>

    </div>
  );
}


export default App;
