import { Request, Response } from 'express';
import CartService from '../services/cart.service';

class CartController {
  async addItem(req: Request, res: Response) {
    try {
      const { userId, productId, quantity } = req.body;
      const cartItem = await CartService.addItem(userId, productId, quantity);
      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ message: 'Error adding item to cart', error });
    }
  }

  async removeItem(req: Request, res: Response) {
    try {
      const { userId, productId } = req.body;
      await CartService.removeItem(userId, productId);
      res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
      res.status(500).json({ message: 'Error removing item from cart', error });
    }
  }

  async viewCart(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const cart = await CartService.viewCart(userId);
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: 'Error viewing cart', error });
    }
  }
}

export default new CartController();
