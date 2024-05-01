import { useState } from 'react';

import '../styles/Product.css';
import Icon from './Icon';


export default function Product({img, categories, name, description, price, itemsAdded, setItemsAdded}){
    const [quantity, setQuantity] = useState(1);
    const [cartbg, setCartbg] = useState('purple');
    const [icon, setIcon] = useState('cart');

    const decrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const increase = () => {    
        setQuantity(quantity + 1);
    }

    const addToCart = () => {
        const item = {
            image: img,
            name,
            quantity,
            price
        }

        setItemsAdded([...itemsAdded, item]);
        setQuantity(1);

        setCartbg('green');
        setIcon('check');
        setTimeout(() => {
            setCartbg('purple');
            setIcon('cart');
        }, 1000);
    }

    const changeBackgound = () => {
        cartbg === 'purple' && setCartbg('dark-purple');
        cartbg === 'dark-purple' && setCartbg('purple');
    }

    return(
        <div className="product-container">
            <div className="image">
                <img src={img} alt=""/>
            </div>

            <div className="category">
                {categories.map((category, index) => (
                    <span key={index}>{category}</span>   
                ))}
            </div>

            <div className="text">
                <span className='name'>{name}</span>
                <span className='description'>{description}</span>
            </div>

            <div className="buy">
                <div className="price">
                    R$ <span>{price}</span>
                </div>
                <div className="actions">
                    <div className="counter">
                        <Icon onClick={decrease} icon='minus' color='purple' size={14}/>
                        <span>{quantity}</span>
                        <Icon onClick={increase} icon='plus' color='purple' size={14}/>
                    </div>
                    <div className="cart-button" onClick={addToCart} onMouseEnter={changeBackgound} onMouseLeave={changeBackgound} >
                        <Icon icon={icon} color='white' background={cartbg} size={22}  />
                    </div>
                </div>
            </div>
        </div>
    )
}