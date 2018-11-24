const express = require('express');

const router = express.Router();
const cartController = require('../controllers/cartController.js');


router.get('/', cartController.shoppingcart);

router.get('/add-to-cart/:id', cartController.addToCart);

router.get('/reduce/:id', cartController.reduce);

router.get('/remove/:id', cartController.remove);

module.exports = router;
