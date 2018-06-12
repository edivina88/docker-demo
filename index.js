var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
  res.send('Hello World Manny Divina (v1.0.3)!');
=======
  res.send('Hello World! v1.0.3');
>>>>>>> 804233745037230deb2b7cb9c6c5aab2afed3107
=======
  res.send('Hello World Manny (v1.0.4)!');
>>>>>>> v1.0.4
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
