import * as DotEnv from 'dotenv';
import path from 'path';

DotEnv.config();

export const templates = process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '..', 'src', 'templates')
    : path.resolve(__dirname, 'templates');
