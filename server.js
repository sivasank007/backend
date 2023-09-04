const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Replace with your database hostname
  user: process.env.DB_USER,       // Replace with your database username
  password: process.env.DB_PASS,   // Replace with your database password
  database: process.env.DB_NAME,   // Replace with your database name
});

// Check the database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

app.get('/api/getusers', (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Database query error:", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(result);
  });
});

app.get('/api/getmsg', (req, res) => {
  res.json("I'm alive")
});

const port = process.env.PORT || 3306; // Use the PORT environment variable if available

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
