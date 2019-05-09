var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const customer = [
    {
        'id':1,
        'image':"https://placeimg.com/64/64/1",
        'name':'sehoon',
        'birthday':'940424',
        'gender':'male',
        'job':'student'
      },
      {
        'id':2,
        'image':"https://placeimg.com/64/64/2",
        'name':'binhee',
        'birthday':'950110',
        'gender':'female',
        'job':'student'
      },
      {
        'id':3,
        'image':"https://placeimg.com/64/64/3",
        'name':'john',
        'birthday':'970424',
        'gender':'male',
        'job':'student'
      },
      {
        'id':4,
        'image':"https://placeimg.com/64/64/4",
        'name':'jon',
        'birthday':'970424',
        'gender':'male',
        'job':'student'
      },
      {
        'id':5,
        'image':"https://placeimg.com/64/64/5",
        'name':'jon',
        'birthday':'970424',
        'gender':'male',
        'job':'student'
      }
];

app.get('/api/customers',(req,res)=>{
    res.send(customer);
});

app.listen(port, ()=>{
    console.log('server is running on '+port+'port');
});