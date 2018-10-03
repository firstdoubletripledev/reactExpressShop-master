var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController.js');

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
