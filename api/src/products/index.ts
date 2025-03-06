import {Router} from 'express';

//Product endpoints
const router = Router();

router.get('/products', (req,res) => {
    res.send("A list of products");
});

router.get('/products/:id', (req,res) => {
    console.log(req.params);
    res.send('A product');
});

router.post('/products', (req,res) => {
    res.send('New product created');
});

export default router;