import express, {Router} from 'express';
import productRoutes from './products/index';

const port = 3000
const app = express()

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.use('/', productRoutes);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});