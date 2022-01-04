<<<<<<< HEAD
const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);

async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}

module.exports = {
  query
=======
const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);

async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}

module.exports = {
  query
>>>>>>> 11a13e31f64404cb37f696f075f510b7a5489777
}