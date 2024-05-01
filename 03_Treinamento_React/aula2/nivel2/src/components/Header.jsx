import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';
import Icon from './Icon';

import '../styles/Header.css';

export default function Header({itemsAdded}) {
    const [quantity, setQuantity] = useState(0);

    const [cartbg, setCartbg] = useState('off-yellow');

    const changeBackgound = () => {
        cartbg === 'off-yellow' && setCartbg('yellow');
        cartbg === 'yellow' && setCartbg('off-yellow');
    }

    useEffect(() => {
        let counter = 0;
        for(let i = 0; i < itemsAdded.length; i++){
            counter += itemsAdded[i].quantity;
        }
        setQuantity(counter)
    }, [itemsAdded.length])

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="options">
                <div className="location">
                    <Icon icon='location' color='purple' size={22}/>
                    <span>Porto Alegre, RS</span>
                </div>
                <div onClick={() => {console.log(itemsAdded)}} onMouseEnter={changeBackgound} onMouseLeave={changeBackgound} className="cart">
                    <div className={`quantity ${quantity == 0 && 'hidden'}`}>{quantity > 0 && quantity}</div>
                    <Icon icon='cart' color='orange' size={22} background={cartbg}/>
                </div>
                <div  className="add" style={{display: 'none'}}>
                    <Icon icon='plus' color='dark-gray' size={22} background='off-yellow'/>
                </div>
            </div>
        </div>
    )
}