<<<<<<< HEAD
const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'kesavan.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'tbiltenr',
    password: env.DB_PASSWORD || 'JStxQl_MKKDaaDJXA7ZHvRbV4OX83Lej',
    database: env.DB_NAME || 'tbiltenr',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

=======
const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'kesavan.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'tbiltenr',
    password: env.DB_PASSWORD || 'JStxQl_MKKDaaDJXA7ZHvRbV4OX83Lej',
    database: env.DB_NAME || 'tbiltenr',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

>>>>>>> 11a13e31f64404cb37f696f075f510b7a5489777
module.exports = config;