import '../styles/Home.css';
import landingImage from '../assets/landing.png';
import Icon from '../components/Icon';
import Product from '../components/Product';

export default function Home() {
    return (
        <div className="home">
            <div className="landing">
                <div className="info">
                    <div className="title">
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <div className="items">
                        <div className="item">
                            <Icon icon='cart' background='orange' size={16} rounded />
                            <span>Compra simples e segura</span>
                        </div>
                        <div className="item">
                            <Icon icon='package' background='dark-gray' size={16} rounded />
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div className="item">
                            <Icon icon='clock' background='yellow' size={16} rounded />
                            <span>Entrega rápida e rastreada</span>
                        </div><div className="item">
                            <Icon icon='coffee' background='purple' size={16} rounded />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </div>
                <div className="landing-image">
                    <img src={landingImage} alt="" />
                </div>
            </div>

            <div className="coffees">
                <h1>Nossos cafés</h1>
                <Product />
            </div>
        </div>
    )
}