const express = require('express');

const router = express.Router();
const ordersController = require('../controllers/ordersController.js');

/*
 * GET
 */
router.get('/', ordersController.list);

/*
 * GET
 */
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
