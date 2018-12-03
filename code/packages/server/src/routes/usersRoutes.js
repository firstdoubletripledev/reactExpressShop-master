// import express module
import express from 'express';
import usersController from '../controllers/User';

const router = express.Router();

/*
 * GET
 */
router.get('/', usersController.list);
router.get('/me', usersController.me);
router.get('/logout', usersController.logout);
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
