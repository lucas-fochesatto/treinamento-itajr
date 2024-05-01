import React from 'react';
import logo from '../assets/logo.svg';
import Icon from './Icon';

import '../styles/Header.css';

export default function Header() {
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
                <div className="cart">
                    <Icon icon='cart' color='orange' size={22} background='off-yellow'/>
                </div>
                <div className="add">
                    <Icon icon='plus' color='dark-gray' size={22} background='off-yellow'/>
                </div>
            </div>
        </div>
    )
}