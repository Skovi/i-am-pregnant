import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './reset-password.module.css';

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
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={styles.form}>
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
        <button onClick={onClick}>Восстановить</button>
      </form>
      <div className={styles.links}>
        <Link
          to='/login'
          className={styles.link}
        >
          Войти
        </Link>
        <Link
          to='/register'
          className={styles.link}
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  )
};
