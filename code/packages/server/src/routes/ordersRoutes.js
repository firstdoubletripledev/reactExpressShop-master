const express = require('express');

const router = express.Router();
const ordersController = require('../controllers/ordersController.js');

/*
 * GET
 */
router.get('/userorders', ordersController.showuserorders); // chỗ này để dưới get "/" thì k chạy
router.get('/', ordersController.list);

/*
 * GET
 */
router.get('/:id', ordersController.show);


/*
 * GET
 */


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
