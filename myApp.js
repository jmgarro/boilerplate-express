require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
app.use(bodyParser.urlencoded({extended: false}));
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
app.get("/:word/echo", function (req, res){
    res.json({"echo": req.params.word});
});

app.route('/name')
  .get((req, res) => {
    const { first, last } = req.query;
    if (!first || !last) {
      return res.status(400).json({ error: 'Debe enviar ambos nombres' });
    }
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const { first, last } = req.body;
    if (!first || !last) {
      return res.status(400).json({ error: 'Debe enviar ambos nombres' });
    }
    res.json({ name: `${first} ${last}` });
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
