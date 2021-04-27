import footerImg from "../../assets/images/G.svg";
import Android from "../../assets/images/ButtonAndroid.svg";
import Apple from "../../assets/images/ButtonApple.svg";

import "./FooterTop.scss";

const FooterTop = () => {
  return (
    <div className="footertop">
      <div className="footertop-inner container">
        <div className="footertop-inner-left">
          <img src={footerImg} alt="" />
          <p>Продай, найди, купи все что ты пожелаешь</p>
        </div>
        <div className="footertop-inner-midl">
          <h4>
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </h4>
        </div>
        <div className="footertop-inner-right">
          <img src={Apple} alt="" />
          <img src={Android} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
