import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

export const Register = () => {
  const [user, setUser] = useState({
    name: '',
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
    console.log('Спасибо за регистрацию!');
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmitForm} className='form'>
        <h2>Регистрация</h2>
        <input
          className='input btn-size'
          type='text'
          name='name'
          placeholder='Имя'
          value={user.name}
          onChange={onChangeInput}
        />
        <input
          className='input'
          type='text'
          name='email'
          placeholder='Электронная почта'
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          className='input'
          type='text'
          name='password'
          placeholder='Пароль'
          value={user.password}
          onChange={onChangeInput}
        />
        <button
          onClick={onClick}
          className='input btn-size'
        >Сохранить</button>
      </form>
      <div className='links'>
        <Link
          to='/login'
          className='link'
        >
          Войти
        </Link>
      </div>
    </div>
  )
};
