import React from 'react';
import classes from './Header.module.css';
import img from '../../img/YinYan.jpg'
import svg from '../../img/oval.svg'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://dynamic.brandcrowd.com/asset/logo/62fdfa68-3a48-46da-9959-be64842d7c47/logo?v=4" alt="" />
      <div  className={classes.userLogin}>
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