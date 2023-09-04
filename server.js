require('dotenv').config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());  

const db = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/api/getmenu',(req,res)=>{
    const sql = "select * from users";
    db.query(sql,(err,result)=>{
        return res.json(result)
    })
})


app.get('/api/getmsg',(req,res)=>{
    db.query((err,result)=>{
        return res.json("Hey I'm alive")
    })
})

const PORT = process.env.PORT || 5533

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})