import { useEffect, useRef, useState } from "react"
import { useParams } from 'react-router-dom';
import Product from '../components/Product'
import "../styles/ProductPage.css"
import selectArrow from '../assets/chevron-down.svg'
import PlusButton from "../components/PlusButton";


export default function ProductPage({database}) {
    const params = useParams();
    const id = params.id || "";
    
    const [product, setProduct] = useState({});

    const [isFocused, setIsFocused] = useState(false);

    const selectRef = useRef(null);

    const fetchProduct = async () => {
        setProduct(database[Number(id)-1]);
        console.log(database[Number(id)-1])
    }

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleChange = () => {
        console.log("EU MUDEI!")
        setIsFocused(false);
        selectRef.current.blur();
    }

    useEffect(() => {
        fetchProduct(); 
    }, [])

    return (
        <div className="contentProduct">
            <div className="pink">
                <Product productName={product.productName} isDiscount={product.isDiscount}/>
                <h1>{product.price}R$</h1>
            </div>
            <div className="blue">
                <h1>{product.description}</h1>
                <div className="select-content">
                    <div className="select">
                        <label htmlFor="quantity">Quantidade</label>
                        <div className="select-body">
                            <select name="quantity" id="quantity" ref={selectRef} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div className="arrow-box">
                                <img src={selectArrow} alt="" className={`${isFocused ? 'focused' : ''}`}/>
                            </div>
                        </div>
                    </div>
                    <PlusButton />
                </div>
            </div>
        </div>
    )
    
}