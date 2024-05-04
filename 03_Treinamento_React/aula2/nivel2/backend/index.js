import express from 'express';
import cors from 'cors';
import path from 'path';

import router from './Routes/router.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join('db', 'images')));

app.use('/', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});