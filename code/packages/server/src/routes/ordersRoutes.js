// import express module
import express from 'express';

import ordersController from '../controllers/ordersController';

const router = express.Router();

/*
 * GET
 */
router.get('/userorders', ordersController.showuserorders); // chỗ này để dưới get "/" thì k chạy
router.get('/', ordersController.list);
router.get('/:id', ordersController.show);

/*
 * POST
 */
router.post('/', ordersController.create);

/*
 * PUT
 */
router.put('/:id', ordersController.update);

/*
 * DELETE
 */
router.delete('/:id', ordersController.remove);

module.exports = router;
