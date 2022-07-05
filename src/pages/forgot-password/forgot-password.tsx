import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgot-password.scss';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  };

  const onClick = () => {
    console.log('Новый пароль отправлен на вашу почту!');
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Самое время придумать новый пароль!');
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmitForm} className='form'>
        <h2>Восстановление пароля</h2>
        
        <input
          type='text'
          name='email'
          placeholder='Электронная почта'
          value={email}
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
