var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
  res.send('Hello World Manny1 v1.0.1!');
=======
<<<<<<< HEAD
  res.send('Hello World Manny Divina (Master)!');
=======
  res.send('Hello World Manny Divina (v1.0.2)!');
>>>>>>> 90b63fa7b5d711b472474b32bffe61245f6d892e
=======
  res.send('Hello World Master!');
>>>>>>> 48a5da6c6e8c336863420e8e771cb209493116f0
>>>>>>> be00ab3bb49dcb9e6af8017c8951ae21ad5d937c
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
