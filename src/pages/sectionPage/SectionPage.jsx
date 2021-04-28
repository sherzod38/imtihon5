import { Link } from 'react-router-dom'

import SectionLast from '../../components/SectionLast'

import rentagle1 from "../../assets/images/Rectangle1.png";
import rentagle2 from "../../assets/images/Rectangle2.png";
import rentagle3 from "../../assets/images/Rectangle3.png";
import rentagle4 from "../../assets/images/Rectangle4.png";
import rentagle5 from "../../assets/images/Rectangle5.png";
import rentagle6 from "../../assets/images/Rectangle11.png";

import "./SectionPage.scss";

const SectionPage = () => {
  return (
    <div className="section container">
      <div className="section-header">
        <p>
          Объявления / Ташкент Недвижимость / Ташкент Квартиры / Ташкент Продажа
          / Новостройки Ташкент
        </p>
      </div>
      <div className="section-title">
        <h1>
          Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5
        </h1>
      </div>
      <div className="section-main">
        <div className="section-main-left">
          <div className="section-main-left-imgs">
            <img src={rentagle1} alt="" />
            <img src={rentagle2} alt="" />
            <img src={rentagle3} alt="" />
            <img src={rentagle4} alt="" />
            <img src={rentagle5} alt="" />
          </div>
          <div className="section-main-left-img">
            <img src={rentagle6} alt="" />
          </div>
        </div>
        <div className="section-main-right">
          <div className="section-main-right-text">
            <p>Артикул: 4418970</p>
            <p>обновлено: 28.04.17 добавлено: 28.04.17</p>
          </div>
          <p className="section-main-right-price">70 000 у.е.</p>
          <p className="section-main-right-city">
            Ташкент, Ташкентская область, Юнусабадский район{" "}
          </p>
          <p className="section-main-right-number">
            99891 166{" "}
            <span className="section-main-right-number-star">****</span>{" "}
            <span className="section-main-right-number-btn">
              Покозать польностю
            </span>
          </p>
          <p className="section-main-right-number">
            99891 166{" "}
            <span className="section-main-right-number-star">****</span>{" "}
            <span className="section-main-right-number-btn">
              Покозать польностю
            </span>
          </p>
          <p className="section-main-right-author">
            Автор обьявлении:{" "}
            <span className="section-main-right-author-name">
              Зухриддин Темиров
            </span>
          </p>
          <div className="section-main-right-btn">
            <button className="section-main-right-btn-button1">
              Написать автору
            </button>
            <button className="section-main-right-btn-button2">
              Предложить свою цену
            </button>
          </div>
          <div className="section-main-right-block">
            <p>
              Количество комнат:<h4>6</h4>
            </p>
            <p>
              Общая площадь:<h4>40 м2</h4>
            </p>
            <p>
              Этаж: <h4>32</h4>
            </p>
          </div>
          <div className="section-main-right-block">
            <p>
              Этажность дома:<h4>6</h4>
            </p>
            <p>
              Состояние квартиры:<h4>Первая сдача </h4>
            </p>
            <p>
              Этаж: <h4>32</h4>
            </p>
          </div>
          <div className="section-main-right-block">
            <p>
              Планировка<span>Раздельная</span>
            </p>
            <p>
              Год постройки/сдачи<span>Сдача в 2017</span>
            </p>
            <p>
              Ремонт<h4>Авторский проект</h4>
            </p>
          </div>
          <div className="section-main-right-block">
            <p>
              Санузел<span>2 санузла и более</span>
            </p>
            <p>
              Меблирована<span>Да</span>
            </p>
            <p>
              Высота потолков<h4>32</h4>
            </p>
          </div>
          <h3>
            Рядом есть
            <span>
              Больница, поликлиника, Детская, площадка, Детский сад, Остановки,
              Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе{" "}
            </span>
          </h3>

          <h6>
            Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме.
            Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный
            и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для
            лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый.
            <br />
            <br />
            Ремонт делолся из очень дорогова материяла. Дорогая класическая
            кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие
            люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё
            предусмотренно для детей деские площядки качели итд. Торг наместе.
            Торопитесь продаю нужны денги. Первый золотой этаж и паследний в
            этом коплексе. Торопитесь.
          </h6>
          <h2>
            Просмотры:10958 <span>Пожаловатся</span>
          </h2>
        </div>
      </div>
        <div className="section-content">
            <div className="section-content-link">
                <Link className='section-content-link-link1'>Похожие объявления</Link>
                <Link className='section-content-link-link1'>Обьявление автора</Link>
            </div>
            <div className="section-content-block">
                <SectionLast/>
            </div>
        </div>
    </div>
  );
};

export default SectionPage;
