const errorMiddleware = (err, req, res, next) => {
    console.log("error middleware");
    res.json({message: err.message})
}

module.exports = errorMiddleware