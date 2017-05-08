var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World !!! Welcome to Mr.Bharath");
});

app.listen(4000);