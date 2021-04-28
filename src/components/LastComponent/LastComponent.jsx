

import Databaza2 from '../../dataBaza2/DataBaza2'

import './LastComponent.scss';

const LastComponent = (img, title, data, price, key) => {
    return (
        <div className="last">
           {
               Databaza2.map((item) => {
                   return (
                       <div className="">
                           <img src={item.img} alt=""/>
                           <p>{item.title}</p>
                           <h4>{item.data}</h4>
                           <h5>{item.price}</h5>
                       </div>
                   )
               })
           }
        </div>
    )
}

export default LastComponent;