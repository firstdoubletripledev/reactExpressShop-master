// import express module
import express from 'express';

// import cartController for cartController
import usersController from '../controllers/User';

// Create new express Router
const router = express.Router();

/*
 * GET
 */
// Router get / to get all user
router.get('/', usersController.list);

// Router get /me to get one user in session
router.get('/me', usersController.me);

// Router get /logout to delete all session for user
router.get('/logout', usersController.logout);

// Router get /:id to get user which id
router.get('/:id', usersController.show);

/*
 * POST
 */
// router post / to create new user
router.post('/', usersController.create);

// router post /login to login which user info
router.post('/login', usersController.login);

// router post /update to update which user info
router.post('/update', usersController.update);
/*
 * PUT
 */

/*
 * DELETE
 */
// Router delete /:id to delete which user id
router.delete('/:id', usersController.remove);

// export router
export default router;
