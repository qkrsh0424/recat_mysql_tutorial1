var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.listen(port, ()=>{
    console.log('server is running on '+port+'port');
});