const express= require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded());
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req, res){
	if(req.body) {
		var num1 = req.body.num1;
		var num2 = req.body.num2;
		var result = parseInt(num1 )+ parseInt(num2);
	}
	res.send("Your calculted result is " + result);
})
app.listen(3000,function(){console.log("server is running on 3000 port")})