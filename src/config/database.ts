import { Pool } from 'pg';

const pool = new Pool({
    user: 'YOUR_USERNAME', // replace with your database username
    host: 'YOUR_HOST', // replace with your database host
    database: 'YOUR_DATABASE', // replace with your database name
    password: 'YOUR_PASSWORD', // replace with your database password
    port: 5432,
});

export default pool;
