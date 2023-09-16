require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware")

const app = express()

const MONGO_URL= process.env.MONGO_URL

app.use(express.json())

app.use("/api/products", productRoute);

app.use(errorMiddleware);


mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to mongodb")
    app.listen(3000, ()=> {
        console.log('Node is running on port 3000');
    });
}).catch((error) => {
    console.log(error)
})