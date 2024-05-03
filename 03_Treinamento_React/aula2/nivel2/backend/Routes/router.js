import express from 'express';

import { addProduct, getProducts } from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/add', addProduct);

export default router;