import { Link, useHistory } from "react-router-dom";

import "./RegistrForm1.scss";

const RegistrForm1 = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/auth/form2");
  };
  return (
    <div className="form1">
      <form action="" onSubmit={handleSubmit}>
        <h2>Бесплатная регистрация</h2>
        <input type="text" name="" id="" placeholder="ism kiriting" />
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

export default RegistrForm1;
