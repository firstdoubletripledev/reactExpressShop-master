var express = require('express');
var router = express.Router();
var categoriesController = require('../controllers/categoriesController.js');

/*
 * GET
 */
router.get('/', categoriesController.list);

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
