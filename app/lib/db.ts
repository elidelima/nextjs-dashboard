import { Pool } from 'pg';

export const dbClient = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'next',
    password: 'root',
    port: 5432,
});