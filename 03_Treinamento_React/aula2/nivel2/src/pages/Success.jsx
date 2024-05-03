import '../styles/Success.css';
import { useState } from 'react';
import { useEffect } from 'react';

import Icon from '../components/Icon';

import successImage from '../assets/success.png';

export default function Success() {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    useEffect(() => {
        const order = JSON.parse(localStorage.getItem('order'));

        setAddress(order.address);
        setPaymentMethod(order.paymentMethod);
    }, [])

    return(
        <div className='success-page'>
            <span className="uhu">Uhu! Pedido confirmado</span>
            <span className="subtitle">Agora é só aguardar que logo o café chegará até você</span>
            <div className="success-content">
                <div className="order-info-wrap">
                    <div className="order-info">
                        <div className='item'>
                            <Icon icon='location' background='purple' size={16} color='white' rounded/>
                            <div className='item-info'>
                                <p>Entrega em <span>{address.street + ', ' + address.number}</span></p>
                                <p>{address.district + ' - ' + address.city + ', ' + address.state}</p>
                            </div>
                        </div>
                        <div className='item'>
                            <Icon icon='clock' background='yellow' size={16} color='white' rounded/>
                            <div className='item-info'>
                                <p>Previsão de entrega</p>
                                <p><span>20 min - 30 min</span></p>
                            </div>
                        </div>
                        <div className='item'>
                            <Icon icon='dollar' background='orange' size={16} color='white' rounded/>
                            <div className='item-info'>
                                <p>Pagamento na entrega</p>
                                <p><span>
                                    {paymentMethod == 1 && 'Cartão de crédito'}
                                    {paymentMethod == 2 && 'Cartão de débito'}
                                    {paymentMethod == 3 && 'Dinheiro'}    
                                </span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="success-img">
                    <img src={successImage} alt="" />
                </div>
            </div>
        </div>
    )
}