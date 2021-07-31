const pg = require("pg");

let pool;
if (process.env.NODE_ENV === "production") {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new pg.Pool({
    database: "feed_me",
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
  });
}

module.exports = pool;
