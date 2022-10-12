import React from 'react';
import "./app-header.scss";
import { NavLink } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';

export const AppHeader = () => {
  const { name } = useSelector((store) => store.mother.mother);
  return (
    <header className='header'>
      <nav className='nav-header'>
        <NavLink
          to='/'
          exact
          className='main_link'
        >
          Главная
        </NavLink>
        <NavLink
          to='/child'
          exact
          className='profile_link'
        >
          Ребенок
        </NavLink>
        <NavLink
          to='/mother'
          exact
          className='profile_link'
        >
          {name ? name : 'Личный кабинет'}
        </NavLink>
      </nav>
    </header>
  )
};
