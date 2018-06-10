var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Hello World Manny Divina (v1.0.4)!');
=======
  res.send('Hello World Master!');
>>>>>>> 48a5da6c6e8c336863420e8e771cb209493116f0
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
