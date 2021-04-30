import { Link } from "react-router-dom";

import AuthContext from "../../context/Auth/context";

import Logo from "../../assets/images/Group 3.svg";
import HeaderBottom from "../../components/HeaderBottom";
import "./Header.scss";
import { useContext } from "react";

const Header = () => {
  const { value, methods } = useContext(AuthContext);
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
            <Link to="/olti">Для бизнеса</Link>
            <Link to="/besh">Помощь</Link>
          </div>
          <div className="header-top-right">
            <p className="header-top-right-text1">
              {" "}
              <span>Рус </span> | <span>O’z</span>
            </p>
            {value.token ? (
              <div
                title="logout"
                style={{ marginLeft: 16, cursor: "pointer", padding: 6 }}
                onClick={() => methods.setToken("")}
              >
                Sherzod
              </div>
            ) : (
              <p className="header-top-right-text2">
                <span>
                  <Link to="/auth/form4">Вход</Link>
                </span>
                |
                <span className="header-top-right-text2-registr">
                  <Link to="/auth/form1">Регистрация</Link>
                </span>
              </p>
            )}
          </div>
        </div>
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
