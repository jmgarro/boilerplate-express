require('dotenv').config();
let express = require('express');
let app = express();
app.use("/public", express.static(__dirname + '/public'));
app.use(function(req, res, next){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});
app.get("/now", function(req, res, next){
    req.time=new Date().toString();
    next();
}, function(req, res){
    res.json({"time": req.time});
});
app.get("/", function (req, res){
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});
app.get("/json", function (req, res){
    message="Hello json";
    if(process.env.MESSAGE_STYLE=='uppercase'){
        message=message.toUpperCase();
    }
    res.json({"message": message});
});
module.exports = app;




































 module.exports = app;
