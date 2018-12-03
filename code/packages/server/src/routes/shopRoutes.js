// import express module
import express from 'express';

// import cartController for cartController
import shopController from '../controllers/shopController';

// Create new express Router
const router = express.Router();

/*
 * GET
 */
// Router get / to get all shop
router.get('/', shopController.list);

/*
 * GET
 */
// Router get /:id to get shop which id
router.get('/:id', shopController.show);

/*
 * POST
 */
// router post / to create new shop
router.post('/', shopController.create);

/*
 * PUT
 */
// router put /:id to update shop
router.put('/:id', shopController.update);

/*
 * DELETE
 */
// Router delete /:id to delete which shop id
router.delete('/:id', shopController.remove);

// export router
export default router;
