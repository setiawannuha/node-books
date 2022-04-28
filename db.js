const { Client } = require("pg");
const {
  DB_HOSTNAME,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  NODE_ENV,
} = require("./env");
const db = new Client({
  user: DB_USERNAME,
  host: DB_HOSTNAME,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  ssl: {
    rejectUnauthorized: NODE_ENV === "prod" ? false : true,
  },
});
db.connect((err) => {
  if (err) {
    console.log("failed connect db", err);
  } else {
    console.log("db connected");
  }
});

module.exports = db;
