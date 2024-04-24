import { useEffect, useState } from "react";
import Product from "../components/Product"
import "../styles/Home.css"
import plus from "../assets/plus.svg"
import { useNavigate } from "react-router-dom";
import PlusButton from "../components/PlusButton";

let nextid = 3;

export default function Home({database}) {
    const navigator = useNavigate();

    const [valueName, setValueName] = useState("");
    const [valuePrice, setValuePrice] = useState("");
    const [valueDescription, setValueDescription] = useState("");

    const [products, setProducts] = useState(database);

    const handleNameChange = (e) => {
        setValueName(e.target.value);
    }  

    const handlePriceChange = (e) => {
        setValuePrice(e.target.value);
    } 

    const handleDescriptionChange = (e) => {
        setValueDescription(e.target.value);
    } 

    const handleSubmit = () => {
        const newProduct = {
            productName: valueName,
            description: valueDescription,
            price: valuePrice,
            isDiscount: false,
            id: nextid++
        }
        setProducts([
            ...products,
            newProduct
        ])

        database.push(newProduct)
        console.log(products)
    }

    // <button className="plus" onClick={handleSubmit}><img src={plus} /></button>
    
    return (
        <div className="content">
            <div className="landing">
                <p className="welcome">Welcome</p>  
                <p className="craving">CRAVING SUGAR?</p>
            </div>
            <div className="products">
                {products.map((product) => {
                    const {productName, isDiscount, id} = product
                    return(
                        <div onClick={() => {navigator(`/product/${id}`)}}> 
                            <Product key={id} productName={productName} isDiscount={isDiscount}/>
                        </div>
                    )
                }) }
            </div>
            <div className="add-product">
                <div className="inputs">
                    <div className="input-area">
                        <label htmlFor="name">Nome do produto</label>
                        <input type="text" value={valueName} onChange={handleNameChange} id="name"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="price">Preço</label>
                        <input type="text" value={valuePrice} onChange={handlePriceChange} id="price"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="description">Descrição</label>
                        <input type="text" value={valueDescription} onChange={handleDescriptionChange} id="description"/>
                    </div>
                    <PlusButton onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}