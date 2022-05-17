import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

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
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={styles.form}>
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
        <button onClick={onClick}>Сохранить</button>
      </form>
      <div className={styles.links}>
        <Link
          to='/register'
          className={styles.link}
        >
          Зарегистрироваться
        </Link>
        <Link
          to='forgot-password'
          className={styles.link}
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  )
};
