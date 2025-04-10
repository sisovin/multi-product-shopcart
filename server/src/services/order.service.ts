import { Order } from '../models/Order';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOrder = async (orderData: any) => {
  try {
    const order = await prisma.order.create({
      data: orderData,
    });
    return order;
  } catch (error) {
    throw new Error('Failed to create order');
  }
};

export const getOrder = async (orderId: string) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
    });
    return order;
  } catch (error) {
    throw new Error('Failed to get order');
  }
};

export const updateOrder = async (orderId: string, orderData: any) => {
  try {
    const order = await prisma.order.update({
      where: { id: orderId },
      data: orderData,
    });
    return order;
  } catch (error) {
    throw new Error('Failed to update order');
  }
};
