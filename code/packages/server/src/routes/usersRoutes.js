const express = require('express');

const router = express.Router();
const usersController = require('../controllers/User');

/*
 * GET
 */
router.get('/', usersController.list);
router.get('/me', usersController.me);
router.get('/logout', usersController.logout);

/*
 * GET
 */
router.get('/:id', usersController.show);

/*
 * POST
 */
router.post('/', usersController.create);
router.post('/login', usersController.login);
router.post('/update', usersController.update);
/*
 * PUT
 */


/*
 * DELETE
 */
router.delete('/:id', usersController.remove);

module.exports = router;
