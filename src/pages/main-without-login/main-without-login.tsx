import { Link } from "react-router-dom";

export const MainWithoutLogin = () => {
  return (
    <div className="container-main-without-login">
      <div className=""><h2 className="h2">Сервис для будущих мам, предназначен для удобного отслеживания срока беременности и развития малыша. </h2>
      <h2 className="h2">Для начала необходимо пройти регистрацию, затем заполнить поле на выбор, либо ввести дату зачатия, либо первый день последних месячных. Дополнительно вы можете указать имя и пол ребенка.</h2>
      </div>
      <Link
        className="link"
        to='register'
      >
        Зарегистрироваться
      </Link>
      <Link
        className="link"
        to='login'
      >
        Войти
      </Link>
    </div>
  )
};
