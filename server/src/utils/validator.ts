import { body, param } from 'express-validator';

export const validateUserRegistration = [
  body('username').isString().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const validateUserLogin = [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const validateProduct = [
  body('name').isString().isLength({ min: 3 }).withMessage('Product name must be at least 3 characters long'),
  body('description').isString().isLength({ min: 10 }).withMessage('Product description must be at least 10 characters long'),
  body('price').isFloat({ gt: 0 }).withMessage('Product price must be greater than 0'),
  body('stock').isInt({ gt: 0 }).withMessage('Product stock must be greater than 0')
];

export const validateCartItem = [
  body('userId').isUUID().withMessage('User ID must be a valid UUID'),
  body('productId').isUUID().withMessage('Product ID must be a valid UUID'),
  body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be greater than 0')
];

export const validateOrder = [
  body('userId').isUUID().withMessage('User ID must be a valid UUID'),
  body('productIds').isArray().withMessage('Product IDs must be an array'),
  body('productIds.*').isUUID().withMessage('Each product ID must be a valid UUID'),
  body('status').isString().isIn(['pending', 'completed', 'cancelled']).withMessage('Order status must be one of: pending, completed, cancelled')
];

export const validateOrderId = [
  param('id').isUUID().withMessage('Order ID must be a valid UUID')
];
