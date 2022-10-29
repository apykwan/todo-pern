const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;