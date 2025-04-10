import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CartService {
  async addItem(userId: string, productId: string, quantity: number) {
    const cartItem = await prisma.cartItem.create({
      data: {
        userId,
        productId,
        quantity,
      },
    });
    return cartItem;
  }

  async removeItem(userId: string, productId: string) {
    await prisma.cartItem.deleteMany({
      where: {
        userId,
        productId,
      },
    });
  }

  async viewCart(userId: string) {
    const cart = await prisma.cartItem.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
      },
    });
    return cart;
  }
}

export default new CartService();
