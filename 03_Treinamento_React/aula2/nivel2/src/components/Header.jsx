import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import Icon from './Icon';

import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigator = useNavigate();

    const [quantity, setQuantity] = useState(0);
    const [cartbg, setCartbg] = useState('off-yellow');

    const changeBackgound = () => {
        cartbg === 'off-yellow' && setCartbg('yellow');
        cartbg === 'yellow' && setCartbg('off-yellow');
    }

    useEffect(() => {
        const updateQuantity = () => {
            let tempItems = JSON.parse(localStorage.getItem('itemsAdded')) || [];
            let counter = 0;
            for(let i = 0; i < tempItems.length; i++){
                counter += tempItems[i].quantity;
            }
            setQuantity(counter)
        }

        window.addEventListener('storage', updateQuantity);

        return () => {
            window.removeEventListener('storage', updateQuantity)
        }
    }, [])

    return (
        <div className="header">
            <div className="logo" onClick={() => {navigator('/')}}>
                <img src={logo} alt="" />
            </div>
            <div className="options">
                <div className="location">
                    <Icon icon='location' color='purple' size={22}/>
                    <span>Porto Alegre, RS</span>
                </div>
                <div onClick={() => {navigator('/checkout')}} onMouseEnter={changeBackgound} onMouseLeave={changeBackgound} className="cart">
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