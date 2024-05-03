import express from 'express';

import router from './Routes/router.js';

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});