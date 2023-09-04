const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	host:process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

app.get('/getexample',(req,res)=>{
    const sql = "select * from menu";
    db.query(sql,(err,result)=>{
        return res.json(result)
    })
})

const port = process.env.PORT || 6752;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});