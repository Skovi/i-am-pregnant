import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './reset-password.scss';

export const ResetPassword = () => {
  const [user, setUser] = useState({
    password: '',
    token: ''
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const onClick = () => {
    console.log('Пароль успешно восстановлен!');
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Пароль сохранен!');
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmitForm} className='form'>
        <h2>Восстановление пароля</h2>
        <input
          type='text'
          name='password'
          placeholder='Пароль'
          value={user.password}
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='token'
          placeholder='Код из письма'
          value={user.token}
          onChange={onChangeInput}
        />
        <button 
        onClick={onClick}
        className='button'
        >Восстановить</button>
      </form>
      <div className='links'>
        <Link
          to='/login'
          className='link'
        >
          Войти
        </Link>
        <Link
          to='/register'
          className='link'
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  )
};
