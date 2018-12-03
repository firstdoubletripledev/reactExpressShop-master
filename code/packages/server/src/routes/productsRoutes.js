// import express module
import express from 'express';
import productsController from '../controllers/productsController';

const router = express.Router();

/*
 * GET
 */
router.get('/', productsController.list);
router.get('/search/:searchvalue', productsController.listSearchByName);

/*
 * GET
 */
router.get('/page/:page', productsController.listPartition);
router.get('/perpage/:perpage', productsController.listPartition);
router.get('/sortname/:page', productsController.listPartitionSortByName);
router.get('/sortnamedesc/:page', productsController.listPartitionSortByNameDesc);
router.get('/price/:page', productsController.listPartitionSortByPrice);
router.get('/pricedesc/:page', productsController.listPartitionSortByPrice);

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
