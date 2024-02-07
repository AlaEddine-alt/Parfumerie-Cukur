const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const productController = require('../controller/product');



// GET all products
router.get('/', productController.getAllProducts);

// GET a specific product by ID
router.get('/:productId', productController.getProductById);

// POST a new product
router.post('/', productController.createProduct);

// PATCH/update a product by ID
router.patch('/:productId', productController.updateProduct);

// DELETE a product by ID
router.delete('/:productId', productController.deleteProduct);




module.exports = router; 