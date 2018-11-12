const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categoriesController.js');

/*
 * GET
 */
router.get('/', categoriesController.list);

/*
 * GET
 */
router.get('/page/:page', categoriesController.listPage);

router.get('/search/:name/:value/:page', categoriesController.listSearchByName);
router.get('/search/:name/:value', categoriesController.listSearchByName);

/*
 * GET
 */
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
