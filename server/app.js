const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./api/routes/product');
const commandRoutes = require('./api/routes/command');
const userRoutes = require('./api/routes/user');


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.alwpmdy.mongodb.net/?retryWrites=true&w=majority`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/product', productRoutes);
app.use('/command', commandRoutes);
app.use('/user', userRoutes);
app.use((req, res, next) => {
    const error = new Error;
    error.status = 404;
    error.message = 'NOT FOUND'
    res.json(error)
});

module.exports = app;