import { Link } from "react-router-dom";
import {
  ArrayIcons1,
  ArrayIcons2,
  ArrayIcons3,
  ArrayIcons4,
  ArrayIcons5,
  ArrayIcons6,
} from "../../assets/icons/Icons";

import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="main1">
      <div className="footerbottom container">
        <div className="footerbottom-inner">
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons2 />
              <span>Автомобили</span>
            </h3>

            <Link to="#">Легковые авто</Link>
            <Link to="#">Мото</Link>
            <Link to="#">Автобусы</Link>
            <Link to="#">Грузовые авто</Link>
            <Link to="#">Сельхозтехника</Link>
            <Link to="#">Запчасти и Аксессуары</Link>
            <Link to="#">Прицепы и Спецтехника</Link>
            <Link to="#">Водный и Другой транспортa</Link>

            <h3>
              <ArrayIcons3 />
              <span>Дом и Сад</span>
            </h3>

            <Link to="#">Товары для интерьера</Link>
            <Link to="#">Товары для сада</Link>
            <Link to="#">Растения</Link>
            <Link to="#">Продукты питания</Link>
            <Link to="#">Посуда и Кухонная утварь</Link>
            <Link to="#"> Хоз.инвентарь и Бытовая химия</Link>
            <Link to="#">Канцтовары и Расходные</Link>
            <Link to="#">Прочие товары для дома</Link>
          </div>
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons1 />
              <span>Недвижимость</span>
            </h3>

            <Link to="#">Аренда квартир</Link>
            <Link to="#">Аренда домов</Link>
            <Link to="#">Аренда гаражей и Стоянок</Link>
            <Link to="#">Продажа квартир</Link>
            <Link to="#">Продажа домов</Link>
            <Link to="#">Продажа земли</Link>
            <Link to="#">Продажа гаражей/Стоянок</Link>
            <Link to="#">Аренда помещений</Link>
            <Link to="#">Продажа помещений</Link>
            <Link to="#">Прочая недвижимость</Link>
            <Link to="#">Обмен недвижимости</Link>
            <Link to="#">Коммерческая недвижимость</Link>

            <h3>
              <ArrayIcons5 />
              <span>Товары стройки и ремонта</span>
            </h3>

            <Link to="#">Двери и окна</Link>
            <Link to="#">Сантехника</Link>
            <Link to="#">Стройматериалы</Link>
            <Link to="#">Инструменты</Link>
          </div>
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons2 />
              <span>Электроника</span>
            </h3>

            <Link to="#">Телефоны</Link>
            <Link to="#">Компьютеры</Link>
            <Link to="#">Ноутбуки, планшеты</Link>
            <Link to="#">Оргтехника и расходники</Link>
            <Link to="#">ТВ,Фото,Видео и Аудио</Link>
            <Link to="#">Игры и Приставки</Link>
            <Link to="#">Техника для дома и Для себя</Link>
            <Link to="#">Климатическое оборудование</Link>
            <Link to="#">Аксессуары и Комплектующие</Link>
            <Link to="#">Техника для наблюдения</Link>
            <Link to="#"> Прочая электроника</Link>

            <h3>
              <ArrayIcons3 />
              <span>Хобби, Отдых и Спорт</span>
            </h3>

            <Link to="#">Антиквариат и Коллекции</Link>
            <Link to="#">Музыкальные инструменты</Link>
            <Link to="#">Велосипеды</Link>
            <Link to="#">Товары для спорта и отдыха</Link>
            <Link to="#">Книги/Журналы</Link>
            <Link to="#">CD/DVD/Пластинки/Кассеты</Link>
            <Link to="#">Билеты и путешествия</Link>
            <Link to="#">Охота и рыбалка</Link>
          </div>
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons1 />
              <span>Личные вещи</span>
            </h3>

            <Link to="#">Одежда, обувь, аксессуары</Link>
            <Link to="#">Детская одежда и обувь</Link>
            <Link to="#">Детские товары и Игрушки</Link>
            <Link to="#">Школьникам</Link>
            <Link to="#">Часы и украшения</Link>
            <Link to="#">Товары для красоты и здоровья</Link>
            <Link to="#">Разные вещи</Link>

            <h3>
              <ArrayIcons4 /> <span>Бизнес и услуги</span>
            </h3>

            <Link to="#">Оборудование и аренда</Link>
            <Link to="#">Производство и обработка</Link>
            <Link to="#">Продажа бизнеса и партнерство</Link>
            <Link to="#"> Финансовые услуги/Бухгалтерия</Link>
            <Link to="#">Услуги для красоты и здоровья</Link>
            <Link to="#">Услуги курьера и доставки</Link>
            <Link to="#">Реклама, Полиграфия и Маркетинг</Link>
            <Link to="#">Няни, Сиделки и Домработницы</Link>
            <Link to="#">Обучение, курсы и репетиторы</Link>
            <Link to="#">Фото, видео, искусство и дизайн</Link>
          </div>
        </div>
        <h4 className="footerbottom-text">
          Покозать еще <ArrayIcons6 className="footerbottom-text-text1" />
        </h4>
        <div className="footerbottom-last">
                                                                                                                 

            <Link to="#" className="footerbottom-last-link1">Подать объявление</Link>
            <Link to="#" className="footerbottom-last-link">Объявления</Link>
            <Link to="#" className="footerbottom-last-link">Магазины </Link>
            <Link to="#" className="footerbottom-last-link">Помощь</Link>
            <Link to="#" className="footerbottom-last-link">Безопасность </Link>
            <Link to="#" className="footerbottom-last-link">Реклама на сайте </Link>
            <Link to="#" className="footerbottom-last-link">О компании</Link>
        </div>
      </div>

    </div>
  );
};

export default FooterBottom;
