import Product from "../Models/Product.js";

import coffees from "../db/db.js";

const db = coffees; // depois vai mudar pra fetch no banco de dados

export const getProducts = (req, res) => {
    const productsArray = [];

    db.forEach((product) => {
        productsArray.push(new Product(product.id, product.name, product.price, product.description, product.categories, product.img));
    })

    res.status(200).send(productsArray);
}

export const addProduct = (req, res) => {
    const { name, price, description, categories, image } = req.body;

    const product = new Product(db.length + 1, name, price, description, categories, image);

    db.push(product);

    console.log(db)

    res.status(201).send(product);
}