import { useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/Auth/context";

import "./RegForm4.scss";

const RegForm4 = () => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  const { methods } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginRef.current &&
      loginRef.current.value &&
      passwordRef.current &&
      passwordRef.current.value
    ) {
      axios
        .post("https://reqres.in/api/login", {
          email: loginRef.current.value,
          password: passwordRef.current.value,
        })
        .then(function ({ data }) {
          methods.setToken(data.token);
          history.push("/besh");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="form4">
      <form action="" onSubmit={handleSubmit}>
        <h2>Ваша регистрация завершена!</h2>
        <h3>
          Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в
          виде смс на ваше телефонный номер
        </h3>
        <label htmlFor="">Введите email или номер телефона</label>
        <input
          ref={loginRef}
          type="text"
          name="login"
          id=""
          placeholder="99891 167 27 23"
        />
        <label htmlFor="">Пароль</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="**********"
        />
        <button type="submit">Войти</button>
        <p>или</p>
        <span>
          <Link>Восстоновить ваше пароль</Link>
        </span>
      </form>
    </div>
  );
};

export default RegForm4;
