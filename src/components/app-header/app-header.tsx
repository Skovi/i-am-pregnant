import styles from "./app-header.module.css";
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to='/'
          exact
          className={styles.main_link}
        >
          Главная
        </NavLink>
        <NavLink
          to='/profile'
          exact
          className={styles.profile_link}
        >
          Личный кабинет
        </NavLink>
      </nav>
    </header>
  )
};
