import {Link } from 'react-router-dom'

import G3 from "../../assets/images/G3.png";
import ArrowBottom from '../../assets/images/icons/arrowBottom.svg';
import Xarita from '../../assets/images/xarita.png';
import G21 from "../../assets/images/Grou21.png";

import './Arenda.scss';

const Arenda = () => {
    return (
        <div className="arenda container">
            <div className="arenda-inner container">
                <h2 className=''><span>Вы выбрали: </span>   Недвижимость   »   Дома   »   Аренда долгосрочная</h2>
                <h3 className=''><span><img src={G3} alt=""/></span> Изменить</h3>
            </div>
            <div className="arenda-checkbox">
            <div className="izmeniya-top2">
                <div className="izmeniya-top2-left">
                    <span>Цена</span>
                    <h5>400 000</h5>
                </div>
                <div className="izmeniya-top2-main">
                    <h6>Сум</h6>
                    <img src={ArrowBottom} alt=""/>
                </div>
                <div className="izmeniya-top2-right">
                    <input type="checkbox"/>
                    <span>Договорная</span>
                </div>
            </div>
            <div className="izmeniya-top2">
                <div className="izmeniya-top2-left">
                    <span>Количество комнат*</span>
                    <h5>4</h5>
                </div>
                <div className="izmeniya-top2-main top3-main">
                    <h6>900</h6>
                </div>
                <div className="izmeniya-top2-right top3-right">
                    <span>90</span>
                </div>
            </div>
            <h4 className="top4-text">Расположение*</h4>
            <div className="izmeniya-top4">
                <div className="izmeniya-top4-left">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В городе</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В пригороде</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В сельской местности</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Вдоль трассы</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Возле водоема, реки</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В предгорьях</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>В дачном массиве</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>На закрытой территории</span>
                    </div>
                </div>
            </div>
            <div className="izmeniya-top2">
                <div className="izmeniya-top2-left">
                    <span>Этажность дома*</span>
                    <h5>4</h5>
                </div>
                <div className="izmeniya-top2-left top5_block">
                    <span>Высота потолков</span>
                    <h5>2m</h5>
                </div>
                <div className="izmeniya-top2-left top5_block">
                    <span>Площадь участка*</span>
                    <h5>342</h5>
                </div>
            </div>
            <h4 className="top4-text">Отопление</h4>
            <div className="izmeniya-top4">
                <div className="izmeniya-top4-left">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Авторский проект</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Средний ремонт</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Евроремонт</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Требует ремонта</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Предчистовая отделка</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Не достроен</span>
                    </div>
                </div>
                <div className="izmeniya-top4-left top4_check">
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Черновая отделка</span>
                    </div>
                    <div className="izmeniya-top4-left-item">
                        <input type="checkbox"/>
                        <span>Под снос</span>
                    </div>
                </div>
            </div>
            <div className="izmeniya-top6">
                <h6>Электричество</h6>
                <h5>Есть возможность подключения</h5>
            </div>
            <div className="izmeniya-bottom1">
                <h3>9000 знаков осталос</h3>
                <div className="izmeniya-bottom1-top">
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                </div>
                <div className="izmeniya-bottom1-top">
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                    <img src={G21} alt=""/>
                </div>
                <h1>Местоположение объекта</h1>
            </div>
            <div className="izmeniya-bottom2">
                <div className="izmeniya-bottom2-left">
                    <h5>Регион</h5>
                    <h3>
                        <span>Ташкент</span>
                        <img src={ArrowBottom} alt=""/>
                    </h3>
                </div>
                <div className="izmeniya-bottom2-left">
                    <h5>Город / Район</h5>
                    <h3>
                        <span>Мирза Улугбекский район</span>
                        <img src={ArrowBottom} alt=""/>
                    </h3>
                </div>
            </div>
            <div className="xx container">
            <img className="xx-xarita" src={Xarita} alt=""/>
            </div>
            <div className="izmeniya-bottom3">
                <label htmlFor="nomer">Телефонный номер</label>
                <input type="text" id="nomer" placeholder="+99894 888 74452"/>
            </div>
            <div className="izmeniya-bottom3">
                <label htmlFor="email">Email-адрес</label>
                <input type="text" id="email" placeholder="+99894 888 74452"/>
            </div>
            <div className="izmeniya-bottom3">
                <label htmlFor="liso">Контактный лицо</label>
                <input type="text" id="liso" placeholder="Зухриддин"/>
            </div>
            <div className="izmeniya-bottom4">
                <Link className="link1-bottom4">Добавить обьявления бесплатно</Link>
                <Link className="link2-bottom4">Предпросмотр</Link>
            </div>
            </div>
        </div>
    )
}

export default Arenda;