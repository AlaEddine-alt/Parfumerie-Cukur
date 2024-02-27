const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const auth = require('../../middleware/auth');




// GET all products
router.get('/', productController.getAllProducts);

// GET a specific product by ID
router.get('/:productId', productController.getProductById);

// POST a new product
router.post('/',auth, productController.createProduct);

// PATCH/update a product by ID
router.patch('/:productId',auth, productController.updateProduct);

// DELETE a product by ID
router.delete('/:productId',auth, productController.deleteProduct);




module.exports = router; 