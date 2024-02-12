const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/product');
const commandRoutes = require ('./api/routes/command');


//mongoose.connect('mongodb+srv://alaeddinebenmimoun:2HLVGkii4th2Y8xj@cluster0.alwpmdy.mongodb.net/?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/command', commandRoutes);
app.use((req, res, next) => {
    const error = new Error;
    error.status = 404;
    error.message = 'NOT FOUND'
    res.json(error)
});

module.exports = app;