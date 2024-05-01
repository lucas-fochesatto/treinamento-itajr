import Cart from './svg/Cart'
import Clock from './svg/Clock'
import Coffee from './svg/Coffee'
import Dollar from './svg/Dollar'
import Minus from './svg/Minus'
import Package from './svg/Package'
import Plus from './svg/Plus'
import Location from './svg/Location'

import '../styles/Icon.css'

export default function Icon({icon, color = 'white', background = 'none', rounded=false, size = 16}) {
    
    function getColor(color) {
        switch(color) {
            case 'orange':
                return 'hsla(36, 79%, 43%, 1)'
            case 'yellow':
                return 'hsla(44, 71%, 52%, 1)'
            case 'off-yellow':
                return 'hsla(48, 59%, 87%, 1)'
            case 'dark-gray':
                return 'hsla(13, 6%, 32%, 1)'
            case 'purple':
                return 'hsla(259, 92%, 63%, 1)'
            case 'off-purple':
                return 'hsla(259, 63%, 94%, 1)'
            case 'gray':
                return 'hsla(0, 3%, 95%, 1)'
            case 'white':
                return '#ffffff'
            case 'dark-purple':
                return 'hsla(259, 57%, 37%, 1)'
            case 'none':
                return 'transparent'
            default:
                return '#000000'
        }
    }

    return(
        <div style={{backgroundColor: getColor(background)}} className={`icon-container ${rounded ? 'rounded' : ''}`}>
            {icon === 'cart' && <Cart size={size} color={getColor(color)}/>}
            {icon === 'clock' && <Clock size={size} color={getColor(color)}/>}
            {icon === 'coffee' && <Coffee size={size} color={getColor(color)}/>}
            {icon === 'dollar' && <Dollar size={size} color={getColor(color)}/>}
            {icon === 'minus' && <Minus size={size} color={getColor(color)}/>} 
            {icon === 'package' && <Package size={size} color={getColor(color)}/>}
            {icon === 'plus' && <Plus size={size} color={getColor(color)}/>}
            {icon === 'location' && <Location size={size} color={getColor(color)}/>}
        </div>
    )
}