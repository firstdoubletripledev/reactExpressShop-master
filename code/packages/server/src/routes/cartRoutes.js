// import express module
import express from 'express';

// import cartController for cartController
import cartController from '../controllers/cartController';

const router = express.Router();

/*
 * GET
 */
// Router get / to get all cart in session
router.get('/', cartController.shoppingcart);

// Router get /add-to-cart/:id to add to cart in session
router.get('/add-to-cart/:id', cartController.addToCart);

// Router get /reduce/:id to reduce cart in session
router.get('/reduce/:id', cartController.reduce);

// Router get /remove/:id to remove cart in session
router.get('/remove/:id', cartController.remove);

/*
 * POST
 */

/*
 * PUT
 */

/*
 * DELETE
 */

// export router
export default router;
