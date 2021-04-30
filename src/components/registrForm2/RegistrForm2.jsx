import { Link, useHistory } from "react-router-dom";

import F1 from "../../assets/images/F1.png";

import "./RegistrForm2.scss";

const RegistrForm2 = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/auth/form3");
  };

  return (
    <div className="form2">
      <form className="form2-form" action="" onSubmit={handleSubmit}>
        <h2>Бесплатная регистрация</h2>

        <label className="form2-label1" htmlFor="">
          Введите ваш email
        </label>
        <input
          className="form2-form-label1-inp0"
          type="email"
          name=""
          placeholder="emailni kiriting"
          id=""
        />
        <label htmlFor="">Введите ваш номер телефона</label>
        <div className="form2-form-label2" htmlFor="">
          <input className="form2-form-label2-inp1" type="tel" name="" id="" />
          <input className="form2-form-label2-inp2" type="tel" name="" id="" />
        </div>
        <h3>
          Нажимая на кнопку «Получить доступ», я даю согласие на обработку
          персональных данных и соглашаюсь c условиями{" "}
          <span>договора-оферты и политикой конфиденциальности</span>
        </h3>

        <button type="submit">
          <span>
            <img src={F1} alt="" />
          </span>{" "}
          Получить доступ
        </button>
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

export default RegistrForm2;
