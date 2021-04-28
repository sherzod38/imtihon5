import { useState } from "react";
import { Link } from "react-router-dom";

import { ArrayIcons7 } from "../../assets/icons/Icons";

import Modal2 from "../../components/modal2/Modal2";

import "./Modal1.scss";

const Modal1 = ({ visible, category, close }) => {
  const [type, setType] = useState();
  const [isVisible, setIsVisible] = useState(false);

  if (!visible) {
    return <div></div>;
  }
  
  const open = (type) => {
    // close();
    setType(type);
    setIsVisible(true);
  };

  return (
    <div className={`modal1  container ${visible && "open"}`} id="modal1">
      <Modal2
        visible={isVisible}
        close={() => {
          setIsVisible(false);
          setType("");
        }}
        type={type}
      />
      <div className="modal1-inner">
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Телефоны
        </Link>
        <Link
          className="modal1-inner-link"
          to="#"
          onClick={() => open("computer")}
        >
          <ArrayIcons7 className="modal1-inner-link-aval" /> Компьютеры
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Фото / видео
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Тв / видеотехника
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Аудиотехника
        </Link>
      </div>
      <div className="modal1-inner">
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Игры и игровые
          приставки
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Техника для дома
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Техника для кухни
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Климатическое
          оборудование
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Индивидуальный уход
        </Link>
      </div>
      <div className="modal1-inner">
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Аксессуары и
          комплектующие
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Прочая электроника
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Телефоны
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Компьютеры
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Фото / видео
        </Link>
      </div>
      <div className="modal1-inner">
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Телефоны
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Компьютеры
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Фото / видео
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Тв / видеотехника
        </Link>
        <Link className="modal1-inner-link" to="#">
          <ArrayIcons7 className="modal1-inner-link-aval" /> Аудиотехника
        </Link>
      </div>
    </div>
  );
};

export default Modal1;
