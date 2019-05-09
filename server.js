var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
  host:conf.host,
  user:conf.user,
  password:conf.password,
  port:conf.port,
  database:conf.database
});

connection.connect(function(err){
  if(err){
    console.log(err);
  }
  console.log('connected database!');
});

// const customer = [
//     {
//         'id':1,
//         'image':"https://placeimg.com/64/64/1",
//         'name':'sehoon',
//         'birthday':'940424',
//         'gender':'male',
//         'job':'student'
//       },
//       {
//         'id':2,
//         'image':"https://placeimg.com/64/64/2",
//         'name':'binhee',
//         'birthday':'950110',
//         'gender':'female',
//         'job':'student'
//       },
//       {
//         'id':3,
//         'image':"https://placeimg.com/64/64/3",
//         'name':'john',
//         'birthday':'970424',
//         'gender':'male',
//         'job':'student'
//       },
//       {
//         'id':4,
//         'image':"https://placeimg.com/64/64/4",
//         'name':'jon',
//         'birthday':'970424',
//         'gender':'male',
//         'job':'student'
//       },
//       {
//         'id':5,
//         'image':"https://placeimg.com/64/64/5",
//         'name':'jon',
//         'birthday':'970424',
//         'gender':'male',
//         'job':'student'
//       }
// ];

app.get('/api/customers',(req,res)=>{
    var sql = 'SELECT * FROM CUSTOMER';
    connection.query(sql,function(err,rows,fields){
      res.send(rows);
    })
});

app.listen(port, ()=>{
    console.log('server is running on '+port+'port');
});