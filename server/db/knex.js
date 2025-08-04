const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.PG_HOST || 'localhost',
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'postgres',
    database: process.env.PG_DATABASE || 'island_grill',
    port: process.env.PG_PORT || 5173,
  },
});

module.exports = db; 