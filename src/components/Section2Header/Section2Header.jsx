import { Link } from "react-router-dom";
import InputRange from "./Range";

import search from "../../assets/images/search.svg";
import pin from "../../assets/images/pin.svg";
import Fi from "../../assets/images/Fi.svg";

import "./Section2Header.scss";
// import { useState } from "react";

const Section2Header = () => {
//   const [value, setValue] = useState({ min: 2, max: 20 });
  return (
    <div className="header1 container">
      <div className="header1-top">
        <img src={search} alt="" />
        <h3>
          Введите название обявления или<span> выберите из списка</span>
        </h3>
      </div>
      <div className="header1-btns">
        <Link className="header1-btns-btn1">Интерсное</Link>
        <Link className="header1-btns-btn2">Топ</Link>
        <Link className="header1-btns-btn3">Отличные предложение</Link>
        <Link className="header1-btns-btn4">Супер цена</Link>
        <Link className="header1-btns-btn5">
          г.Ташкент <img src={pin} alt="" />
        </Link>
        <Link className="header1-btns-btn6">
          г.Термез <img src={pin} alt="" />
        </Link>
        <Link className="header1-btns-btn7">
          г.Самарканд <img src={pin} alt="" />
        </Link>
      </div>
      <div className="header1-rubrik">
        <h2>Вы сейчас в рубрике</h2>
        <div className="header1-rubrik-links">
          <Link className="header1-rubrik-links-link1" to="#">
            Электроника
            <span>
              <img src={Fi} alt="" />
            </span>
          </Link>
          <Link className="header1-rubrik-links-link2" to="#">
            Мониторы
            <span>
              <img src={Fi} alt="" />
            </span>
          </Link>
        </div>
      </div>
      <div className="header1-price">
        <h2 className="header1-price-h2">Выберите цену от и до</h2>

        <InputRange  className="header1-price-input"  />
      </div>

      <div className="header1-bottom">
        <div className="header1-bottom-selects">
          <select name="" id="">
            <option value="">Состояние</option>
            <option value="">111</option>
            <option value="">222</option>
          </select>
          <select name="" id="">
            <option value="">Тип объявщика</option>
            <option value="">111</option>
            <option value="">222</option>
          </select>
          <select name="" id="">
            <option value="">Ташкент Мирза улугбекский район</option>
            <option value="">111</option>
            <option value="">222</option>
          </select>
        </div>
        <button>Применить</button>
      </div>
    </div>
  );
};

export default Section2Header;
