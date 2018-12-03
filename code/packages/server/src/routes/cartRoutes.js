// import express module
import express from 'express';

import cartController from '../controllers/cartController';

const router = express.Router();

/*
 * GET
 */
router.get('/', cartController.shoppingcart);

/*
 * POST
 */
router.get('/add-to-cart/:id', cartController.addToCart);

/*
 * PUT
 */
router.get('/reduce/:id', cartController.reduce);

/*
 * DELETE
 */
router.get('/remove/:id', cartController.remove);

module.exports = router;
