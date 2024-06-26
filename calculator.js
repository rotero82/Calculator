const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" ,function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(height*height);
  res.send("Your BMI is "+result);
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is "+result+".");
});

app.post("/", function(req, res){
  res.send("Thanks for posting that!");
});

app.listen(3000, function(){
  console.log("Server is running in port 3000!");
});
