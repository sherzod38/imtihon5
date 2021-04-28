
import DataBaza3 from '../../dataBaza3/DataBaza3'

import './SectionLast.scss';


const SectionLast = (img, title, data, price) => {
    return (
        <div className="last">
            {
                DataBaza3.map((item) => {
                    return (
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

export default SectionLast;