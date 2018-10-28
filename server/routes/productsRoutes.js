const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController.js');

/*
 * GET
 */
router.get('/', productsController.list);

/*
 * GET
 */
router.get('/:id', productsController.show);

/*
 * POST
 */
router.post('/', productsController.create);

/*
 * PUT
 */
router.put('/:id', productsController.update);

/*
 * DELETE
 */
router.delete('/:id', productsController.remove);

module.exports = router;
