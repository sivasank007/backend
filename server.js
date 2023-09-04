require('dotenv').config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

const db = mysql.createConnection(urlDB);

app.get('/getexample',(req,res)=>{
    const sql = "select * from menu";
    db.query(sql,(err,result)=>{
        return res.json(result)
    })
})

const port =  6752;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})