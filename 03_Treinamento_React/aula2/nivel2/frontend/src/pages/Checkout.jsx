import '../styles/Checkout.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import locationIcon from '../assets/location.svg';
import dollarIcon from '../assets/dollar.svg';
import creditCardIcon from '../assets/credit-card.svg';
import bankIcon from '../assets/bank.svg';
import cashIcon from '../assets/cash.svg';
import CoffeeCheckout from '../components/CoffeeCheckout';

export default function Checkout() {
    const navigator = useNavigate();

    const [itemsAdded, setItemsAdded] = useState([]);

    const [paymentMethod, setPaymentMethod] = useState(0);

    const [complement, setComplement] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [coffeesTotal, setCoffeesTotal] = useState(0);
    const [total, setTotal] = useState(3.5);

    const handleComplementChange = (e) => {
        setComplement(e.target.value);
    }

    const handlePostalCodeChange = (e) => {
        setPostalCode(e.target.value);

        if(e.target.value.length == 5) {
            e.target.value += '-'
            setPostalCode(e.target.value);
        }

        if(e.target.value.length == 9){
            const cep = e.target.value.replace('-', '');
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    setStreet(data.logradouro);
                    setDistrict(data.bairro);
                    setCity(data.localidade);
                    setState(data.uf);
                })
                .catch(error => {
                    console.log(error);
                })
        }
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

    const submitForm = () => {
        if(postalCode && street && number && district && city && state && paymentMethod != 0 && itemsAdded.length != 0) {
            const address = {
                postalCode,
                street,
                number,
                complement,
                district,
                city,
                state
            }
    
            const order = {
                itemsAdded,
                address,
                paymentMethod
            }
    
            console.log(order);

            localStorage.setItem('order', JSON.stringify(order));
            localStorage.setItem('itemsAdded', JSON.stringify([]));
            window.dispatchEvent(new Event("storage"));

            navigator('/success');
        } else {
            console.log("ALGUM CAMPO INCOMPLETO!")
        }

    }

    const updateCart  = () => {
        let tempTotal = 0;        
        let tempItemsAdded = JSON.parse(localStorage.getItem('itemsAdded')) || [];

        tempItemsAdded.forEach(item => {
            tempTotal += item.price * item.quantity;
        });

        setCoffeesTotal(tempTotal);
        setTotal(tempTotal + 3.5);
        setItemsAdded(tempItemsAdded);
    }

    useEffect(() => {
        updateCart();

        window.addEventListener('storage', updateCart);

        return () => {
            window.removeEventListener('storage', updateCart);
        };
    }, [])

    return (
        <div className="checkout-container">
            <div className="order-info">
                <h1>Complete seu pedido</h1>
                <div className="form-box">
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
                <div className="selected-coffees-content">
                    <div className="buying-coffees">
                        {itemsAdded.length != 0 ? itemsAdded.map((item, index) => (
                            <CoffeeCheckout
                                key={index}
                                id={index}
                                img={item.image}
                                name={item.name}
                                quantity={item.quantity}
                                price={item.price}
                            />
                        )) : <span className='total'>Nenhum item foi adicionado</span>}
                    </div>
                    <div className="paying">
                        <div className="money">
                            <span className='label'>Total de itens</span>
                            <span className='value'>{coffeesTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </div>
                        <div className="money">
                            <span className='label'>Entrega</span>
                            <span className='value'>R$ 3,50</span>
                        </div>
                        <div className="money">
                            <span className='total'>Total</span>
                            <span className='total'>{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </div>
                    </div>
                    <div className="confirm-button">
                        <button onClick={submitForm}>CONFIRMAR PEDIDO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}