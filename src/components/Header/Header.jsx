import React from 'react';
import classes from './Header.module.css';
import img from '../../img/YinYan.jpg'
import svg from '../../img/oval.svg'
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import logo from '../../img/logo.png'


const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <NavLink to="/novel"> <img src={logo} alt="Logo"/>

        </NavLink>
      </div>
      <Navbar />
      <div className={classes.userLogin}>
        <NavLink to="/login">
          <img
            src={props.isAuth
              ? img
              : svg}
            alt="" />
        </NavLink>
      </div>
    </header>
  )
}

export default Header;