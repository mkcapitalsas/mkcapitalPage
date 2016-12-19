var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.use('/', express.static(__dirname + '/'));
app.listen(port);

console.log('Aplicación corriendo en: http://localhost:' + port);
