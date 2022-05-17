import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './forgot-password.module.css';

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
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={styles.form}>
        <h2>Восстановление пароля</h2>
        
        <input
          type='text'
          name='email'
          placeholder='Электронная почта'
          value={email}
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
