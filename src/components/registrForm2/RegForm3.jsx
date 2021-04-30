import { Link, useHistory } from "react-router-dom";

import "./RegForm3.scss";

const RegForm3 = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/auth/form4");
  };

  return (
    <div className="form3">
      <form className="form3-form" action="" onSubmit={handleSubmit}>
        <h2>Бесплатная регистрация</h2>
        <h3>Код отправлен в виде смс на указанный номер телефона</h3>
        <label htmlFor="">Введите ваш номер телефона</label>
        <div className="form3-form-h4">
          <input
            className="form3-form-h4-inp1"
            type="text"
            name=""
            id=""
            placeholder="998 97 772 13 44"
          />
          <input
            className="form3-form-h4-inp2"
            type="text"
            name=""
            id=""
            placeholder="90s"
          />
        </div>
        <input
          className="form3-form-inp3"
          type="text"
          name=""
          id=""
          placeholder="Введите код подтверждения"
        />
        <button type="submit">Далее</button>
        <p>или</p>
        <span>
          <Link to="/auth/form4">
            Войдите в систему, если у вас уже есть аккаунт kivi.uz
          </Link>
        </span>
      </form>
    </div>
  );
};

export default RegForm3;
