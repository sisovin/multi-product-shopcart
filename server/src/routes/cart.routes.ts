import { Router } from 'express';
import CartController from '../controllers/cart.controller';

const router = Router();

router.post('/add', CartController.addItem);
router.post('/remove', CartController.removeItem);
router.get('/view/:userId', CartController.viewCart);

export default router;
