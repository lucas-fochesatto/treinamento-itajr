import React, { useState } from 'react';
import Icon from './Icon';

import '../styles/CoffeeCheckout.css';

export default function CoffeeCheckout({img, name, quantity, price, id}) {
    const [thisQuantity, setThisQuantity] = useState(quantity);

    const decrease = () => {
        const itemsAdded = JSON.parse(localStorage.getItem('itemsAdded')) || [];
        let newData = [...itemsAdded]

        if(thisQuantity > 1){
            newData[id].quantity = thisQuantity - 1;
            localStorage.setItem('itemsAdded', JSON.stringify(newData));

            setThisQuantity(thisQuantity - 1);

            window.dispatchEvent(new Event("storage"));
        }
    }

    const increase = () => {    
        const itemsAdded = JSON.parse(localStorage.getItem('itemsAdded')) || [];
        let newData = [...itemsAdded]

        newData[id].quantity = thisQuantity + 1;
        localStorage.setItem('itemsAdded', JSON.stringify(newData));

        setThisQuantity(thisQuantity + 1);

        window.dispatchEvent(new Event("storage"));
    }

    const remove = () => {
        const itemsAdded = JSON.parse(localStorage.getItem('itemsAdded')) || [];
        let newData = [...itemsAdded]

        newData.splice(id, 1);
        localStorage.setItem('itemsAdded', JSON.stringify(newData));

        window.dispatchEvent(new Event("storage"));
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
                        <div className="remove" onClick={remove}>
                            <Icon icon='trash' color='purple' size={16}/>
                            <span>REMOVER</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className='price'>{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
        </div>
    )
}