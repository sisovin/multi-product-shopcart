import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrder(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get order', error });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error });
  }
};
