import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss';

export const Profile = () => {
  return (
    <div className='container'>
      <div className='links'>
        <Link
        to='/profile/mother'
        className='link'
        >Профиль мамы
        </Link>
        <Link
        to='/profile/child'
        className='link'
        >Профиль ребенка
        </Link>
      </div>
    </div>
  )
};
