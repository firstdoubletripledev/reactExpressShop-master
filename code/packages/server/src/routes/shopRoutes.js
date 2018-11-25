import express from 'express';

import shopController from '../controllers/shopController';

const router = express.Router();

/*
 * GET
 */
router.get('/', shopController.list);

/*
 * GET
 */
router.get('/:id', shopController.show);

/*
 * POST
 */
router.post('/', shopController.create);

/*
 * PUT
 */
router.put('/:id', shopController.update);

/*
 * DELETE
 */
router.delete('/:id', shopController.remove);

export default router;
