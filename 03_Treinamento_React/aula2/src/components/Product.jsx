import "../styles/Product.css"
import cupcake from '../assets/cupcake.svg';

export default function Product({productName, isDiscount = false}) {
    return(
        <div className={`card ${isDiscount ? 'discount' : ''}`}>
            <p className={`${isDiscount ? 'value' : 'hidden'}`}>-30%</p>
            <img src={cupcake} alt="" />
            <p>{productName}</p>
        </div>
    )
}