import dotenv from 'dotenv'
dotenv.config();

export const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'default-secret-key';
