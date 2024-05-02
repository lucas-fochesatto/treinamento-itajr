import React, { useState } from 'react';
import Icon from './Icon';

import '../styles/CoffeeCheckout.css';

export default function CoffeeCheckout({img, name, quantity, price, id}) {
    const [thisQuantity, setThisQuantity] = useState(quantity);

    const decrease = () => {
        if(thisQuantity > 1){
            setThisQuantity(thisQuantity - 1);
        }
    }

    const increase = () => {    
        setThisQuantity(thisQuantity + 1);
    }

    return (
        <div className="checkout-item">
            <div className='content'>
                <img src={img} alt="" />
                <div className='coffee-info'>
                    <p>{name}</p>
                    <div className='options'>
                        <div className="counter">
                            <Icon onClick={decrease} icon='minus' color='purple' size={14}/>
                            <span>{thisQuantity}</span>
                            <Icon onClick={increase} icon='plus' color='purple' size={14}/>
                        </div>
                        <div className="remove">
                            <Icon icon='trash' color='purple' size={16}/>
                            <span>REMOVER {id}</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className='price'>{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
        </div>
    )
}