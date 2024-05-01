import '../styles/Checkout.css';

import { useState } from 'react';

import locationIcon from '../assets/location.svg';
import dollarIcon from '../assets/dollar.svg';
import creditCardIcon from '../assets/credit-card.svg';
import bankIcon from '../assets/bank.svg';
import cashIcon from '../assets/cash.svg';
import CoffeeCheckout from '../components/CoffeeCheckout';

import img0 from '../db/images/0.png'

export default function Checkout({itemsAdded}) {
    const [paymentMethod, setPaymentMethod] = useState(0);

    const [complement, setComplement] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleComplementChange = (e) => {
        setComplement(e.target.value);
    }

    const handlePostalCodeChange = (e) => {
        setPostalCode(e.target.value);
    }

    const handleStreetChange = (e) => {
        setStreet(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    return (
        <div className="checkout-container">
            <div className="order-info">
                <h1>Complete seu pedido</h1>
                <div className="address">
                    <div className="title">
                        <div className="location-icon">
                            <img src={locationIcon} alt="" />
                        </div>
                        <div className="title-text">
                            <h1>Endereço de entrega</h1>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <div className="address-info">
                        <input
                            className="postal-code"
                            type="text"
                            placeholder="CEP"
                            value={postalCode}
                            onChange={handlePostalCodeChange}
                        />
                        <input
                            className="street"
                            type="text"
                            placeholder="Rua"
                            value={street}
                            onChange={handleStreetChange}
                        />
                        <input
                            className="number"
                            type="text"
                            placeholder="Número"
                            value={number}
                            onChange={handleNumberChange}
                        />
                        <div className="complement-container complement">
                            {complement === "" && <span>Opcional</span>}
                            <input
                                value={complement}
                                onChange={handleComplementChange}
                                type="text"
                                placeholder="Complemento"
                            />
                        </div>
                        <input
                            className="district"
                            type="text"
                            placeholder="Bairro"
                            value={district}
                            onChange={handleDistrictChange}
                        />
                        <input
                            className="city"
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={handleCityChange}
                        />
                        <input
                            className="state"
                            type="text"
                            placeholder="UF"
                            value={state}
                            onChange={handleStateChange}
                        />
                    </div>
                </div>
                <div className="payment">
                    <div className="title">
                        <div className="location-icon">
                            <img src={dollarIcon} alt="" />
                        </div>
                        <div className="title-text">
                            <h1>Pagamento</h1>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                    <div className="options">
                        <div className="option">
                            <input value={1} checked={paymentMethod == 1} type="radio" name="payment" id="credit-card" className='hidden'/>
                            <label htmlFor="credit-card" onClick={() => {setPaymentMethod(1)}} className={`${paymentMethod == 1 && 'checked'}`}>
                                <img src={creditCardIcon} alt="" />
                                <span>Cartão de crédito</span>
                            </label>
                        </div>
                        <div className="option">
                            <input value={2} checked={paymentMethod == 2} type="radio" name="payment" id="debit-card" className='hidden'/>
                            <label htmlFor="debit-card" onClick={() => {setPaymentMethod(2)}} className={`${paymentMethod == 2 && 'checked'}`}>
                                <img src={bankIcon} alt="" />
                                <span>Cartão de débito</span>
                            </label>
                        </div>
                        <div className="option">
                            <input value={3} checked={paymentMethod == 3} type="radio" name="payment" id="money" className='hidden' />
                            <label htmlFor="money" onClick={() => {setPaymentMethod(3)}} className={`${paymentMethod == 3 && 'checked'}`}>
                                <img src={cashIcon} alt="" />
                                <span>Dinheiro</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="selected-coffees">
                <h1>Cafés selecionados</h1>
                <div className="buying-coffees">
                    <CoffeeCheckout img={img0} name='Expresso Tradicional' quantity={1} price={9.9} /> 
                </div>
            </div>
        </div>
    );
}