import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
    const navigator = useNavigate();

    const goToHome = () => {
        navigator('/');
    }

    return(
        <div className='header'>
            <div className='logo'>
                <p>Sugar Rush</p>
            </div>
            <div className='nav'>
                <p onClick={goToHome}>Home</p> | <p>Carrinho</p>
            </div>
        </div>
    )
}