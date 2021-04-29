import { Link } from 'react-router-dom'


import Section2Header from "../../components/Section2Header/Section2Header";
import HomeComponent from "../../components/HomeComponent/HomeComponent";



import search from "../../assets/images/search.svg";

import img1 from '../../assets/images/Group4.png'
import img2 from '../../assets/images/Group7.png'
import img3 from '../../assets/images/Group8.png'
import img4 from '../../assets/images/icons/Fill1.svg'

import "./Section2.scss";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-inner">
        <Section2Header className="container" />
      </div>
      <div className="section2-block container">
        <HomeComponent className="" />
      </div>
      <h6 className="section2-ttt">Покозать еще (20) <img src={img4} alt=""/></h6>
      <h4 className="section2-h4 container">
        <img src={search} alt="" /> СЕЙЧАС ИЩУТ
      </h4>
      <div className="section2-text container">
        <p>
          купить Мясная продукция
          <span>
            <img src={search} alt="" /> 2 часа назад
          </span>
        </p>
        <p>
          купить Мясная продукция
          <span>
            <img src={search} alt="" />2 часа назад
          </span>
        </p>
        <p>
          купить Мясная продукция
          <span>
            <img src={search} alt="" />2 часа назад
          </span>
        </p>
        <p>
          купить Мясная продукция
          <span>
            <img src={search} alt="" />2 часа назад
          </span>
        </p>
        <p>
          купить Мясная продукция
          <span>
            <img src={search} alt="" />2 часа назад
          </span>
        </p>
      </div>
      <div className="section2-last">
        <div className="section2-last-block container">
          <h3 className="section2-last-block-title">САМОЕ ИНТЕРЕСНОЕ</h3>
          <div className="section2-last-block-imgs">
            <Link className="section2-last-block-imgs-img">
                <img src={img1} alt=""/>
                <p>Коньки раздвижные Galaxy р-р 36-39</p>
                <span>Вчера 22:55</span>
                <h4>39 000 000 сум</h4>
            </Link>
            <Link className="section2-last-block-imgs-img">
                <img src={img2}  alt=""/>
                <p>Коньки раздвижные Galaxy р-р 36-39</p>
                <span>Вчера 22:55</span>
                <h4>39 000 000 сум</h4>
            </Link>
            <Link className="section2-last-block-imgs-img">
                <img src={img3}  alt=""/>
                <p>Коньки раздвижные Galaxy р-р 36-39</p>
                <span>Вчера 22:55</span>
                <h4>39 000 000 сум</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
