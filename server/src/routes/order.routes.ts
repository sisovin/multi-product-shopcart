import { Router } from 'express';
import { createOrder, getOrder, updateOrder } from '../controllers/order.controller';

const router = Router();

router.post('/', createOrder);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);

export default router;
