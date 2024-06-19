const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

router.get('/:categoryname/products', productsController.getProducts);
router.get('/:categoryname/products/:productid', productsController.getProductDetails);

module.exports = router;
