var express = require("express");
var app = express();

app.use("/data", express.static(__dirname + "/data"));
app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.listen(8000);