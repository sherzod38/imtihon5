import { useState } from "react";
import { Link } from "react-router-dom";

import "./Obnavleniya.scss";

import imgs1 from "../../assets/images/icons/Group1.svg";
import imgs2 from "../../assets/images/icons/Group9.svg";
import imgs3 from "../../assets/images/icons/Group2.svg";
import imgs4 from "../../assets/images/icons/Group4.svg";
import imgs5 from "../../assets/images/icons/Group5.svg";
import imgs6 from "../../assets/images/icons/Group6.svg";
import imgs7 from "../../assets/images/icons/Group7.svg";
import imgs8 from "../../assets/images/icons/Group8.svg";
import imgs9 from "../../assets/images/icons/Group3.svg";
import i from "../../assets/images/icons/Fill1.svg";

// import Arenda from "../arenda";

const Obnavleniya = () => {
  const [ active, setActive ] = useState('');
  const [ active2, setActive2 ] = useState('');
  const [ activePage, setActivePage ] = useState('');
  return (
    <div className="obnav container">
      <h2>Добавить обьявления бесплатно</h2>
      <h3>Для добавления вашего обьявлении вы должны выбрать категорию</h3>
      <div className="obnav-imgs">
        <img src={imgs1} alt="" />
        <img onClick={() => setActivePage('page')} src={imgs2} alt="" />
        <img  src={imgs3} alt="" />
        <img src={imgs4} alt="" />
        <img src={imgs5} alt="" />
        <img src={imgs6} alt="" />
        <img src={imgs7} alt="" />
        <img src={imgs8} alt="" />
        <img src={imgs9} alt="" />
      </div>
      <div className={`obnav-madal ${activePage === "page" ? "opened" : ""}`}>
        <div className="obnav-madal-row1">
          <h4>Рубрика</h4>

          <Link className="obnav-madal-row1-link">Детский мир <img src={i} alt=""/></Link>
          <Link onClick={() => setActive('rubrika')} className="obnav-madal-row1-link">Недвижимость <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Транспорт <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Работа <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Животные <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Дом и сад <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Электроника <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Бизнес и услуги <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Мода и стиль <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Хобби, отдых и спорт <img src={i} alt=""/></Link>
        </div>
        <div className={`obnav-madal-row2 ${active === "rubrika" ? 'opened' : ''}`}>
          <h4>Недвижимость</h4>

          <Link className="obnav-madal-row1-link">Квартиры <img src={i} alt=""/></Link>
          <Link onClick={() => setActive2('doma')} className="obnav-madal-row1-link">Дома <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Земля <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Гаражи / стоянки <img src={i} alt=""/></Link>
          <Link className="obnav-madal-row1-link">Коммерческие помещения <img src={i} alt=""/></Link>
        </div>
        <div className={`obnav-madal-row3 ${active2 === "doma" ? 'opened' : ''}`}>
          <h4>Дома</h4>

          <Link to="/arenda" className="obnav-madal-row1-link">Аренда долгосрочная <img src={i} alt=""/></Link>
          <Link to="/arenda" className="obnav-madal-row1-link">Аренда посуточно <img src={i} alt=""/></Link>
          <Link to="/arenda" className="obnav-madal-row1-link">Продажа <img src={i} alt=""/></Link>
          <Link to="/arenda" className="obnav-madal-row1-link">Обмен <img src={i} alt=""/></Link>
        </div>
      </div>
      {/* <Arenda/> */}
    </div>
  );
};

export default Obnavleniya;
