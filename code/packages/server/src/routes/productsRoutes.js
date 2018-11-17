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
router.get('/page/:page', productsController.listPartition);
router.get('/sortname/:page', productsController.listPartitionSortByName);
router.get('/sortnamedesc/:page', productsController.listPartitionSortByNameDesc);
router.get('/price/:page', productsController.listPartitionSortByPrice);
router.get('/pricedesc/:page', productsController.listPartitionSortByPrice);
// router.get('/page/:page/color/:color', productsController.listByColor);

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
