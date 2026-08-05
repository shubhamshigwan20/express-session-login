const { Pool } = require("pg");

const db = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  port: 5432,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
});

module.exports = db;
