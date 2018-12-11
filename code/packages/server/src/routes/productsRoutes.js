// import express module
import express from 'express';

// import cartController for cartController
import productsController from '../controllers/productsController';

const router = express.Router();

/*
 * GET
 */
// Router get / to get all products
router.get('/', productsController.list);

// Router get /search/:searchvalue to search all products by value
router.get('/search/:searchvalue', productsController.listSearchByName);

/*
 * GET
 */
// Router get /page/:page to get product by page
router.get('/page/:page', productsController.listPartition);

// Router get /perpage/:perpage to get number product for page
router.get('/perpage/:perpage', productsController.listPartition);

// Router get /sortname/:page to get product by name and page
router.get('/sortname/:page', productsController.listPartitionSortByName);

// Router get /sortnamedesc/:page to get product by name and page DESC
router.get('/sortnamedesc/:page', productsController.listPartitionSortByNameDesc);

// Router get /price/:page to get product by page and price
router.get('/price/:page', productsController.listPartitionSortByPrice);

// Router get /pricedesc/:page to get product by page and pricedesc DESC
router.get('/pricedesc/:page', productsController.listPartitionSortByPrice);

// Router get /:id to get products which id
router.get('/:id', productsController.show);

/*
 * POST
 */
// router post / to create new products
router.post('/', productsController.create);

/*
 * PUT
 */
// router put /:id to update products
router.put('/:id', productsController.update);

/*
 * DELETE
 */
// Router delete /:id to delete which products id
router.delete('/:id', productsController.remove);

// export router
export default router;
