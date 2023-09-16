const express = require("express");
const mongoose = require('mongoose');
const app = express()


//routes
app.get('/', (req,res) =>{
    res.send("hello node api");
});

app.get('/blog', (req,res) =>{
    res.send("hello node api blog");
});






mongoose.connect('mongodb+srv://admin:admin@cluster0.w60u71u.mongodb.net/nodetutorial?retryWrites=true&w=majority').then(() => {
    console.log("Connected to mongodb")
    app.listen(3000, ()=> {
        console.log('Node is running on port 3000');
    });
}).catch((error) => {
    console.log(error)
})