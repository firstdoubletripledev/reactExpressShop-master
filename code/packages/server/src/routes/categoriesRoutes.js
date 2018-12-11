// import express module
import express from 'express';

// import cartController for cartController
import categoriesController from '../controllers/categoriesController';

const router = express.Router();

/*
 * GET
 */
// Router get / to get all categories
router.get('/', categoriesController.list);

// Router get /topthree to get top three categories
router.get('/topthree', categoriesController.topThree);

// Router get /page/:page to get by page
router.get('/page/:page', categoriesController.listPage);

// Router get /search/:name/:value/:page to get all categories by search name and page
router.get('/search/:name/:value/:page', categoriesController.listSearchByName);

// Router get /search/:name/:value to get all categories by search name
router.get('/search/:name/:value', categoriesController.listSearchByName);

// Router get /:id to get categories which id
router.get('/:id', categoriesController.show);

/*
 * POST
 */
// router post / to create new categories
router.post('/', categoriesController.create);

/*
 * PUT
 */
// router put /:id to update categories
router.put('/:id', categoriesController.update);

/*
 * DELETE
 */
// Router delete /:id to delete which categories id
router.delete('/:id', categoriesController.remove);

// export router
export default router;
