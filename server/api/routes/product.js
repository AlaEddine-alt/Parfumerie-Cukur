const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const auth = require('../../middleware/auth');
const rbacMiddleware = require('../../middleware/rbacMiddleware');





// GET all products
router.get('/', productController.getAllProducts);

// GET a specific product by ID
router.get('/:productId', productController.getProductById);

// POST a new product
router.post('/',auth,rbacMiddleware.checkPermission('add_product'), productController.createProduct);

// PATCH/update a product by ID
router.patch('/:productId',auth,rbacMiddleware.checkPermission('update_product') ,productController.updateProduct);

// DELETE a product by ID
router.delete('/:productId',auth,rbacMiddleware.checkPermission('delete_product') , productController.deleteProduct);




module.exports = router; 