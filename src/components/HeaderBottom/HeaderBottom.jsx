import { Link } from 'react-router-dom'


import "./HeaderBottom.scss";

const HeaderBottom = () => {
  return (
    <div className="inner">
      <div className="bottom container">
        <select className="bottom-select1" name="" id="">
          <option value="">Любая категория</option>
          <option value="">Любая категория1</option>
          <option value="">Любая категория2</option>
        </select>
        <input
          className="bottom-inp1"
          type="text"
          placeholder="Что будем искать ?"
        />
        <select className="bottom-select2" name="" id="">
          <option value="">По всей Узбекистану</option>
          <option value="">Tashkent</option>
          <option value="">Samarqand</option>
        </select>
        <button className="bottom-btn1"><Link  className="bottom-btn1-link" to='/tort'>Найти</Link></button>
        <button className="bottom-btn2">
          <span>+</span> Добавить обьявления
        </button>
      </div>
      
    </div>
  );
};

export default HeaderBottom;
