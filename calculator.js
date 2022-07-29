const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res) {

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result after adding these two numbers is: " + result);
})

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.w1);
  var height = parseFloat(req.body.h1);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
})
