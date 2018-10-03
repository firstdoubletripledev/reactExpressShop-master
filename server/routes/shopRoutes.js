import express from 'express';
const router = express.Router();
import shopController from '../controllers/shopController.js';

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
