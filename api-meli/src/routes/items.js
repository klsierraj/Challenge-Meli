const express = require('express');
const router = express.Router();
const { searchProducts, getProductDetails } = require('../controllers/items');

router.get('/', searchProducts);
router.get('/:id', getProductDetails);

module.exports = router;