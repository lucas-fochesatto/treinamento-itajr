import img0 from '../db/images/0.png';

import '../styles/Product.css';
import Icon from './Icon';

export default function Product(){
    return(
        <div className="product-container">
            <div className="image">
                <img src={img0} alt=""/>
            </div>

            <div className="category">
                <span>TRADICIONAL</span>
            </div>

            <div className="text">
                <span className='name'>Expresso Tradicional</span>
                <span className='description'>O tradicional café feito com água quente e grãos moídos</span>
            </div>

            <div className="buy">
                <div className="price">
                    R$ <span>9,90</span>
                </div>
                <div className="actions">
                    <div className="counter">
                        <Icon icon='minus' color='purple' size={14}  />
                        <span>1</span>
                        <Icon icon='plus' color='purple' size={14}  />
                    </div>
                    <div className="cart-button">
                        <Icon icon='cart' color='white' background='dark-purple' size={22}  />
                    </div>
                </div>
            </div>
        </div>
    )
}