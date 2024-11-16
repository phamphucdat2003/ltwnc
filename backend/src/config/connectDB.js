import mysql from "mysql2";
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "ltwnc",
    password: "",
});
const pool = connection.promise()
export default pool;

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv/config.js';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

export {sequelize,pool};
