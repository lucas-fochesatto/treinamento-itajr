import React from 'react';
import '../styles/PlusButton.css';
import plus from '../assets/plus.svg';

const PlusButton = (props) => {
    return (
        <button {...props} className="plus">
            <img src={plus} />
        </button>
    );
};

export default PlusButton;