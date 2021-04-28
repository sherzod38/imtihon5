import { Link } from "react-router-dom";

import Logo from "../../assets/images/Group 3.svg";
import HeaderBottom from '../../components/HeaderBottom'
import "./Header.scss";

const Header = () => {
  return (
    <div className="main">
      <div className="header container">
        <div className="header-top ">
          <div className="header-top-left">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <p>Продай, найди, купи все что пожелаешь…</p>
          </div>
          <div className="header-top-midl">
            <Link to="/bir">Объявления</Link>
            <Link to="#">Магазины</Link>
            <Link to="#">Для бизнеса</Link>
            <Link to="#">Помощь</Link>
          </div>
          <div className="header-top-right">
            <p className="header-top-right-text1">
              {" "}
              <span>Рус </span> | <span>O’z</span>
            </p>
            <p className="header-top-right-text2">
              <span>Вход</span> |{" "}
              <span className="header-top-right-text2-registr">
                Регистрация
              </span>
            </p>
          </div>
        </div>
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
