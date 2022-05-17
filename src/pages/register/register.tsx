import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './register.module.css';

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
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={styles.form}>
        <h2>Регистрация</h2>
        <input
          type='text'
          name='name'
          placeholder='Имя'
          value={user.name}
          onChange={onChangeInput}
        />
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
          to='/login'
          className={styles.link}
        >
          Войти
        </Link>
      </div>
    </div>
  )
};
