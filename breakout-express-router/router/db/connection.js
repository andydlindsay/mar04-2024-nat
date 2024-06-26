const pg = require('pg');
// const Client = pg.Client;
const Pool = pg.Pool;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
};

const client = new Pool(config);

// client.connect(() => {
//   console.log('connected to database');
// });

module.exports = client;
