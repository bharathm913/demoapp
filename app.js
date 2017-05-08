var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Welcome Friends !! You have just completed build automation...");
});

app.listen(4000);