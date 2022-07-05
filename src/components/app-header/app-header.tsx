import React from 'react';
import "./app-header.scss";
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink
          to='/'
          exact
          className='main_link'
        >
          Главная
        </NavLink>
        <NavLink
          to='/profile'
          exact
          className='profile_link'
        >
          Личный кабинет
        </NavLink>
      </nav>
    </header>
  )
};
