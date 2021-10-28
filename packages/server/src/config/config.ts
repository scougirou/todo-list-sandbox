export const PORT = parseInt(process.env.PORT, 10) || 3000;
export const HOST = process.env.HOST || 'localhost';
export const SCHEME = process.env.SCHEME || 'http';

export const DB_HOST = process.env.DB_HOST || 'postgres';
export const DB_PORT = process.env.DB_PORT || '5432';
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
export const DB_DATABASE = process.env.DB_DATABASE || 'todolist';
