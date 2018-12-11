// import express module
import express from 'express';

// import cartController for cartController
import ordersController from '../controllers/ordersController';

const router = express.Router();

/*
 * GET
 */

// Router get /userorders to get all user orders by session
router.get('/userorders', ordersController.showuserorders);

// Router get / to get all order
router.get('/', ordersController.list);

// Router get /:id to get order which id
router.get('/:id', ordersController.show);

/*
 * POST
 */
// router post / to create new order
router.post('/', ordersController.create);

/*
 * PUT
 */
// router put /:id to update order
router.put('/:id', ordersController.update);

/*
 * DELETE
 */
// Router delete /:id to delete which order id
router.delete('/:id', ordersController.remove);

// export router
export default router;
