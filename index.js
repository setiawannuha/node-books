const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const { APP_PORT } = require("./env");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
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

const PORT = APP_PORT || 3003;
app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
