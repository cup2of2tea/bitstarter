var express = require('express');

var app = express.createServer(express.logger());


var s1= fs.readFileSync("index.html");


app.get('/', function(request, response) {
  response.send(s1.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
