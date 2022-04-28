const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const { PORT } = require("./env");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    message: "success",
  });
});
app.get("/books", (req, res) => {
  try {
    db.query(`SELECT * FROM tbl_books`, (err, result) => {
      if (err) {
        throw err;
        return;
      }
      res.json(result.rows);
    });
  } catch (error) {
    res.json(error);
  }
});

const APP_PORT = PORT || 3003;
app.listen(APP_PORT, () => {
  console.log(`service running at port ${APP_PORT}`);
});
