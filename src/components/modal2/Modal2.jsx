import { Link } from "react-router-dom";

import { ArrayIcons7 } from "../../assets/icons/Icons";
import arImg from "../../assets/images/Fill11.svg";
import arImg1 from "../../assets/images/aa.png";

import "./Modal2.scss";

const Modal2 = ({ type, close, visible }) => {
  if (!visible) {
    return <div></div>;
  }

  const renderByType = (type) => {
    switch (type) {
      case "computer":
        return (
          <div className="main2-modal2-inner">
            <div className="main2-modal2-inner-top">
              <Link to="#" onClick={close}>
                <img src={arImg} alt="" />
              </Link>
              <h2>
                <img src={arImg1} alt="" />
                <span>Посмотреть всю категорию компютеры</span>
              </h2>
            </div>
            <div className="main2-modal2-inner-bottom">
              <div className="main2-modal2-inner-bottom-block">
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Настольные
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Ноутбуки
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Планшетные
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> компьютеры
                </Link>
              </div>
              <div className="main2-modal2-inner-bottom-block">
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Серверы
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Аксессуары
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Комплектующие
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Периферийные устройства
                </Link>
              </div>
              <div className="main2-modal2-inner-bottom-block">
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Мониторы
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Внешние накопители
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Расходные материалы
                </Link>
                <Link className="main2-modal2-inner-bottom-block-link" to="#">
                  {" "}
                  <ArrayIcons7 /> Другое
                </Link>
              </div>
            </div>
          </div>
        );
      case "nimadir":
        return (
          <div>
            <div className="main2-modal2-inner-top">
              <Link to="#" onClick={close}>
                <img src={arImg} alt="" />
              </Link>
              <h2>
                <img src={arImg1} alt="" /> <span>nimadir</span>
              </h2>
            </div>
          </div>
        );
      default:
        return <div></div>;
    }
  };
  return (
    <div className="main2" id="modal2">
      <div className="main2-modal2 container">{renderByType(type)}</div>
    </div>
  );
};

export default Modal2;
