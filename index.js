var express = require('express')
var Unblocker = require('unblocker');

var app = express();
var unblocker = new Unblocker({prefix: '/proxy/'});

app.use(unblocker);

app.get('/', function(req, res) {
});

app.listen(process.env.PORT || 8080).on('upgrade', unblocker.onUpgrade);