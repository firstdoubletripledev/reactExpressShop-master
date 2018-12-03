// import express module
import express from 'express';

import categoriesController from '../controllers/categoriesController';

const router = express.Router();

/*
 * GET
 */
router.get('/', categoriesController.list);
router.get('/topthree', categoriesController.topThree);
router.get('/page/:page', categoriesController.listPage);
router.get('/search/:name/:value/:page', categoriesController.listSearchByName);
router.get('/search/:name/:value', categoriesController.listSearchByName);
router.get('/:id', categoriesController.show);

/*
 * POST
 */
router.post('/', categoriesController.create);

/*
 * PUT
 */
router.put('/:id', categoriesController.update);

/*
 * DELETE
 */
router.delete('/:id', categoriesController.remove);

module.exports = router;
