const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express()

app.use(express.json())


//routes
app.get('/', (req,res) =>{
    res.send("hello node api");
});

app.get('/blog', (req,res) =>{
    res.send("hello node api blog");
});

app.get('/products', async (req,res) => {
    try{
        const products = await Product.find({});
        console.log(req.body);
        res.status(200).json(products);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
})

app.get('/products/:id', async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id);
        console.log(req.body);
        res.status(200).json(product);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
})

app.post('/product', async (req,res) => {
    try{
        const product = await Product.create(req.body)
        console.log(req.body);
        res.status(200).json(product);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
})

app.put('/products/:id', async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "cannot find product"})
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body);

        console.log(req.body);
        res.status(200).json(updatedProduct);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
})

app.delete('/products/:id', async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        console.log(req.body);
        res.status(200).json(product);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
})



mongoose.connect('mongodb+srv://admin:admin@cluster0.w60u71u.mongodb.net/nodetutorial?retryWrites=true&w=majority').then(() => {
    console.log("Connected to mongodb")
    app.listen(3000, ()=> {
        console.log('Node is running on port 3000');
    });
}).catch((error) => {
    console.log(error)
})