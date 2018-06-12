var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Hello World!');
=======
  res.send('Hello World Manny v1.0.1!');
>>>>>>> v1.0.1
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
