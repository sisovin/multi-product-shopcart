import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.DB_URL || 'postgresql://localhost:5432/mydatabase';
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
