import '../styles/AddCoffee.css'
import { useState } from 'react'

import Icon from '../components/Icon'

import img1 from '../assets/add1.png'
import img2 from '../assets/add2.png'
import arrowRight from '../assets/arrow-right.svg'

export default function AddCoffee({coffees}) {
    const [icon, setIcon] = useState('plus');
    const [color, setColor] = useState('gray');
    const [iconBg, setIconBg] = useState('dark-gray');

    const [image, setImage] = useState(0);
    const [coffeeName, setCoffeeName] = useState('');
    const [state, setState] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [tags, setTags] = useState('');

    const handleCoffeeNameChange = (e) => {
        setCoffeeName(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const handleSubmit = () => {
        if(image != 0 && coffeeName && state && description && price && tags){
            const newCoffee = {
                image: image == 1 ? img1 : img2,
                name: coffeeName,
                description,
                price: Number(price),
                categories: tags.split(',').map(tag => tag.trim().toUpperCase())
            }
            
            coffees.push(newCoffee);

            setImage(0);
            setCoffeeName('');
            setState('');
            setDescription('');
            setPrice('');
            setTags('');

            setIconBg('green');
            setIcon('check');
            setTimeout(() => {
                setIconBg('dark-gray');
                setIcon('plus');
            }, 1000);
        } else {
            console.log('TA FALTANO');
        }
    }

    return(
        <div className="add-container">
            <p>Escolha um ícone para seu produto.</p>

            <div className="add-images">
                <div className="images">
                    <div className={`coffee-image ${image == 1 ? 'checked' : ''}`}>
                        <input type="radio" value={1} checked={image == 1} name='coffee-image' id='img1'  className='hidden'/>
                        <label htmlFor="img1" onClick={() => {setImage(1)}} >
                            <img src={img1} alt="" />
                        </label>
                        <img src={arrowRight} alt="" className={`arrow ${image == 1 ? '' : 'hidden'}`} />
                    </div>
                    <div className={`coffee-image ${image == 2 ? 'checked' : ''}`}>
                        <input type="radio" value={2} checked={image == 2} name='coffee-image' id='img2'  className='hidden'/>
                        <label htmlFor="img2" onClick={() => {setImage(2)}} >
                            <img src={img2} alt="" />
                        </label>
                        <img src={arrowRight} alt="" className={`arrow ${image == 2 ? '' : 'hidden'}`} />
                    </div>
                </div>
                <Icon onClick={handleSubmit} icon={icon} color={color} size={24} background={iconBg} rounded/>
            </div>
            <div className="add-form form-box">
                <div className="title">
                    <Icon icon='coffee' color='dark-gray' size={22} />
                    <div className="title-text">
                        <h1>Novo tipo de café</h1>
                        <p>Informe as características do novo café que será exibido na loja!</p>
                    </div>
                </div>
                <div className="new-coffee-info">
                    <input
                        className="name"
                        type="text"
                        placeholder="Nome"
                        value={coffeeName}
                        onChange={handleCoffeeNameChange}
                    />
                    <input
                        className="state"
                        type="text"
                        placeholder="Estado de entrega"
                        value={state}
                        onChange={handleStateChange}
                    />
                    <input
                        className="description"
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <input
                        className="price"
                        type="number"
                        placeholder="Preço"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    <input
                        className="tags"
                        type="text"
                        placeholder="Tags - Separe com vírgula"
                        value={tags}
                        onChange={handleTagsChange}
                    />
                </div>
            </div>
        </div>
    )
}