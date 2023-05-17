const Pool = require('pg').Pool;
require('dotenv').config();
const pool =new Pool({
    user: 'postgres',
    password: 'postgres',
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: "todoapp"
})

module.exports= pool;
