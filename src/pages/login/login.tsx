import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const onClick = () => {
    console.log('Регистрация прошла успешно!');
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Успешный вход!');
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmitForm} className='form'>
        <h2>Вход</h2>
        <input
          type='text'
          name='email'
          placeholder='Электронная почта'
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='password'
          placeholder='Пароль'
          value={user.password}
          onChange={onChangeInput}
        />
        <button
        onClick={onClick}
        className='button'
        >Сохранить</button>
      </form>
      <div className='links'>
        <Link
          to='/register'
          className='link'
        >
          Зарегистрироваться
        </Link>
        <Link
          to='forgot-password'
          className='link'
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  )
};
