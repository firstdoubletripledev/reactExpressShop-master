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
