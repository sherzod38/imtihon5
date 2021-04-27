import { Link } from "react-router-dom";

import Logo from "../../assets/images/Group 3.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="main">
      <div className="header container">
        <div className="header-top ">
          <div className="header-top-left">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
            <p>Продай, найди, купи все что пожелаешь…</p>
          </div>
          <div className="header-top-midl">
            <a href="#">Объявления</a>
            <a href="#">Магазины</a>
            <a href="#">Для бизнеса</a>
            <a href="#">Помощь</a>
          </div>
          <div className="header-top-right">
            <p className="header-top-right-text1">
              {" "}
              <span>Рус </span> | <span>O’z</span>
            </p>
            <p className="header-top-right-text2">
              <span>Вход</span> | <span className='header-top-right-text2-registr'>Регистрация</span>
            </p>
          </div>
        </div>
        <div className="header-bottom">
          <select className="header-bottom-select1" name="" id="">
            <option value="">Любая категория</option>
            <option value="">Любая категория1</option>
            <option value="">Любая категория2</option>
          </select>
          <input
            className="header-bottom-inp1"
            type="text"
            placeholder="Что будем искать ?"
          />
          <select className="header-bottom-select2" name="" id="">
            <option value="">По всей Узбекистану</option>
            <option value="">Tashkent</option>
            <option value="">Samarqand</option>
          </select>
          <button className="header-bottom-btn1">Найти</button>
          <button className="header-bottom-btn2">
            <span>+</span> Добавить обьявления
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
