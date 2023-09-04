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

app.get('/api/getmenu',(req,res)=>{
    const sql = "select * from menu";
    db.query(sql,(err,result)=>{
      if(err){
        res.json("error")
      }
      else{
        return res.json("data received")
      }
    })
})

app.get('/api/getmenuitems',(req,res)=>{
    const sql = "select * from menuitems";

    db.query(sql,(err,result)=>{
      if(err){
        res.json("error")
      }
      else{
        return res.json(result)
      }
    })
})

app.get('/api/getmsg',(req,res)=>{
    db.query((err,result)=>{
        return res.json("Hey I'm alive")
    })
})

const port = 6752;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})