  var express=require("express");
  var app=express();
  var path=require('path');
  app.use(express.static(path.join(__dirname,"public")));
  var port = process.env.PORT || 3000;
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
  res.status(300).sendFile(path.join(__dirname,"drumpad.html"));
});

//--------------------------------------------------------------------------------------------------------
app.listen(port);