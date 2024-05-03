import {Product} from "../Models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor" });
    }
}

export const addProduct = async (req, res) => {
    try {
        const { name, price, description, categories, img } = req.body;
    
        const productData = { name, price, description, categories, img };
    
        const newProduct = await Product.create({...productData});
    
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send(error);
    }
}