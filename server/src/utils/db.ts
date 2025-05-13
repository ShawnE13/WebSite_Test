import { ConnectionPool } from 'mssql';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true, // Change to true for local dev / self-signed certs
    },
};

let pool: ConnectionPool;

export const connectToDatabase = async () => {
    if (!pool) {
        pool = new ConnectionPool(config);
        await pool.connect();
    }
    return pool;
};

export const closeDatabaseConnection = async () => {
    if (pool) {
        await pool.close();
        pool = undefined;
    }
};