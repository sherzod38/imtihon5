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

            <a href="#">Легковые авто</a>
            <a href="#">Мото</a>
            <a href="#">Автобусы</a>
            <a href="#">Грузовые авто</a>
            <a href="#">Сельхозтехника</a>
            <a href="#">Запчасти и Аксессуары</a>
            <a href="#">Прицепы и Спецтехника</a>
            <a href="#">Водный и Другой транспортa</a>

            <h3>
              <ArrayIcons3 />
              <span>Дом и Сад</span>
            </h3>

            <a href="#">Товары для интерьера</a>
            <a href="#">Товары для сада</a>
            <a href="#">Растения</a>
            <a href="#">Продукты питания</a>
            <a href="#">Посуда и Кухонная утварь</a>
            <a href="#"> Хоз.инвентарь и Бытовая химия</a>
            <a href="#">Канцтовары и Расходные</a>
            <a href="#">Прочие товары для дома</a>
          </div>
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons1 />
              <span>Недвижимость</span>
            </h3>

            <a href="#">Аренда квартир</a>
            <a href="#">Аренда домов</a>
            <a href="#">Аренда гаражей и Стоянок</a>
            <a href="#">Продажа квартир</a>
            <a href="#">Продажа домов</a>
            <a href="#">Продажа земли</a>
            <a href="#">Продажа гаражей/Стоянок</a>
            <a href="#">Аренда помещений</a>
            <a href="#">Продажа помещений</a>
            <a href="#">Прочая недвижимость</a>
            <a href="#">Обмен недвижимости</a>
            <a href="#">Коммерческая недвижимость</a>

            <h3>
              <ArrayIcons5 />
              <span>Товары стройки и ремонта</span>
            </h3>

            <a href="#">Двери и окна</a>
            <a href="#">Сантехника</a>
            <a href="#">Стройматериалы</a>
            <a href="#">Инструменты</a>
          </div>
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons2 />
              <span>Электроника</span>
            </h3>

            <a href="#">Телефоны</a>
            <a href="#">Компьютеры</a>
            <a href="#">Ноутбуки, планшеты</a>
            <a href="#">Оргтехника и расходники</a>
            <a href="#">ТВ,Фото,Видео и Аудио</a>
            <a href="#">Игры и Приставки</a>
            <a href="#">Техника для дома и Для себя</a>
            <a href="#">Климатическое оборудование</a>
            <a href="#">Аксессуары и Комплектующие</a>
            <a href="#">Техника для наблюдения</a>
            <a href="#"> Прочая электроника</a>

            <h3>
              <ArrayIcons3 />
              <span>Хобби, Отдых и Спорт</span>
            </h3>

            <a href="#">Антиквариат и Коллекции</a>
            <a href="#">Музыкальные инструменты</a>
            <a href="#">Велосипеды</a>
            <a href="#">Товары для спорта и отдыха</a>
            <a href="#">Книги/Журналы</a>
            <a href="#">CD/DVD/Пластинки/Кассеты</a>
            <a href="#">Билеты и путешествия</a>
            <a href="#">Охота и рыбалка</a>
          </div>
          <div className="footerbottom-inner-block">
            <h3>
              <ArrayIcons1 />
              <span>Личные вещи</span>
            </h3>

            <a href="#">Одежда, обувь, аксессуары</a>
            <a href="#">Детская одежда и обувь</a>
            <a href="#">Детские товары и Игрушки</a>
            <a href="#">Школьникам</a>
            <a href="#">Часы и украшения</a>
            <a href="#">Товары для красоты и здоровья</a>
            <a href="#">Разные вещи</a>

            <h3>
              <ArrayIcons4 /> <span>Бизнес и услуги</span>
            </h3>

            <a href="#">Оборудование и аренда</a>
            <a href="#">Производство и обработка</a>
            <a href="#">Продажа бизнеса и партнерство</a>
            <a href="#"> Финансовые услуги/Бухгалтерия</a>
            <a href="#">Услуги для красоты и здоровья</a>
            <a href="#">Услуги курьера и доставки</a>
            <a href="#">Реклама, Полиграфия и Маркетинг</a>
            <a href="#">Няни, Сиделки и Домработницы</a>
            <a href="#">Обучение, курсы и репетиторы</a>
            <a href="#">Фото, видео, искусство и дизайн</a>
          </div>
        </div>
        <h4 className="footerbottom-text">
          Покозать еще <ArrayIcons6 className="footerbottom-text-text1" />
        </h4>
        <div className="footerbottom-last">
                                                                                                                 

            <a href="#" className="footerbottom-last-link1">Подать объявление</a>
            <a href="#" className="footerbottom-last-link">Объявления</a>
            <a href="#" className="footerbottom-last-link">Магазины </a>
            <a href="#" className="footerbottom-last-link">Помощь</a>
            <a href="#" className="footerbottom-last-link">Безопасность </a>
            <a href="#" className="footerbottom-last-link">Реклама на сайте </a>
            <a href="#" className="footerbottom-last-link">О компании</a>
        </div>
      </div>

    </div>
  );
};

export default FooterBottom;
