import {BrowserRouter as Router} from 'react-router-dom'

import { Link } from 'react-router-dom'


import HomeComponent from "../../components/HomeComponent/HomeComponent";
import LastComponent from "../../components/LastComponent/LastComponent";

import ImgLink1 from "../../assets/images/icons/Group1.svg";
import ImgLink2 from "../../assets/images/icons/Group2.svg";
import ImgLink3 from "../../assets/images/icons/Group3.svg";
import ImgLink4 from "../../assets/images/icons/Group4.svg";
import ImgLink5 from "../../assets/images/icons/Group5.svg";
import ImgLink6 from "../../assets/images/icons/Group6.svg";
import ImgLink7 from "../../assets/images/icons/Group7.svg";
import ImgLink8 from "../../assets/images/icons/Group8.svg";
import ImgLink9 from "../../assets/images/icons/Group9.svg";

import scrolImg1 from "../../assets/images/Gro1.png";
import scrolImg2 from "../../assets/images/Gro2.png";
import scrolImg3 from "../../assets/images/Gro3.png";
import scrolImg4 from "../../assets/images/Gro3.png";

import "./HomePages.scss";

const HomePages = () => {
  return (
    <div className="home">
   
      <div className="home-inner  container">
        <div className="home-inner-top">
          <Link to="#">
            <img src={ImgLink1} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink2} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink3} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink4} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink5} alt="" />
          </Link>
          <Link href="#">
            <img src={ImgLink6} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink7} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink8} alt="" />
          </Link>
          <Link to="#">
            <img src={ImgLink9} alt="" />
          </Link>
        </div>
        <div className="home-inner-midl">
          <div className="home-inner-midl-top">
            <p>Новые объявления</p>
            <span>Лучщие предложение</span>
          </div>
          <div className="home-inner-midl-text">
            <HomeComponent />

            <h6>Покозать еще</h6>
          </div>
        </div>
      </div>
      <div className="home-scrol">
        <div className="home-scrol-inner container">
          <img src={scrolImg1} alt="" />
          <img src={scrolImg2} alt="" />
          <img src={scrolImg3} alt="" />
          <img src={scrolImg4} alt="" />
        </div>
      </div>

      <div className="home-last container">
        <div className="home-last-top">
          <Link to="#">Просмотренные</Link>
          <Link to="#">Выбор редакции</Link>
          <Link to="#">Сниженные цены</Link>
        </div>
        <div className="home-last-midl">
          <LastComponent />
        </div>
        <div className="home-last-bottom">
          <h5>Покозать еще</h5>
        </div>
      </div>
      
    </div>
  );
};

export default HomePages;
