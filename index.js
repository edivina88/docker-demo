var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
  res.send('Hello World Manny Divina(v1.0.3)!');
=======
  res.send('Hello World Manny Divina v1.0.3!');
>>>>>>> c4296b80ba87622c990995b7669b5cc0181ba6c4
=======
  res.send('Hello World Manny Divina (Master)!');
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
