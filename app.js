const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');

const userRoutes = require('./routes/user.routes');
const bankRoutes = require('./routes/bank.routes');
const productsRoutes = require('./routes/product.routes');

const app = express();
app.use(morgan('dev'));
app.use(parser.json());
app.use('/users', userRoutes);
app.use('/banks', bankRoutes);
app.use('/products', productsRoutes);

module.exports = app; 