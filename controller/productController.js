const Product = require('../models/productModel');


const getProducts = async (req,res) => {
    try{
        const products = await Product.find({});
        console.log(req.body);
        res.status(200).json(products);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
}

const getProduct = async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id);
        console.log(req.body);
        res.status(200).json(product);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
}

const createProduct = async (req,res) => {
    try{
        const product = await Product.create(req.body)
        console.log(req.body);
        res.status(200).json(product);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
}

const updateProduct = async (req,res) => {
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
    
}

const deleteProduct = async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        console.log(req.body);
        res.status(200).json(product);
    } catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}