const pg = require('pg')

let pool;
if (process.env.NODE_ENV === 'production') {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  pool = new pg.Pool({
    database: 'my_local_database_name',
    password: 'optional_password'
  })
}

module.exports = pool