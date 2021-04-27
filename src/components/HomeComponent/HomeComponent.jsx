import { Link } from 'react-router-dom';
import imghome from '../../assets/images/Group.png'

import DataBaza from '../../dataBaza/DataBaza';

import './HomeComponent.scss'

const HomeComponent = (img, title, data, price) => {
    return (
        <div className="homcomponent">
            {
                DataBaza.map((item) => {
                    return(
                        <div className="">
                            <img src={item.img} alt=""/>
                            <p>{item.title}</p>
                            <span>{item.data}</span>
                            <h5>{item.price}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomeComponent;
