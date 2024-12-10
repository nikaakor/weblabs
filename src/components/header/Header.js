import React from 'react';
import { NavLink } from 'react-router-dom';
import shoping from '../../assets/img/shopping-cart.png';
import catalog from '../../assets/img/catalog.png';
import home from '../../assets/img/home (1).png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"> 
          <img src={home} alt="" className={'home'}/>
        </NavLink>
        <NavLink to="/catalog"> 
          <img src={catalog} alt="" className={'catalog'}/>
        </NavLink>
        <img src={shoping} alt="" className={'logo'}/>
      </nav>
    </header>
  );
};

export default Header;

