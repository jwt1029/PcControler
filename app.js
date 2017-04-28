var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var utf8 = require('utf8');
var net = require('net');

var user;

var RESTserver = app.listen(5926, function () {
    console.log("Express server has started on port 5926")
})
app.use(bodyParser.json());

app.all('/', function (req, res) {
    console.log(req.path);
    res.send("Hello World!");

    user.write('[LOC]\n');
    console.log("Mute");
});


var server = net.createServer(function (client) {
    console.log('Client connected');
    user = client;

    client.write('[LGN]3141592\n');

    client.on('data', function (data) {
        console.log('Client sent ' + data.toString());
    });
    client.on('end', function () {
        console.log('Client disconnected');
    });

});
server.listen(3141, function () { console.log('Server listening for connection'); });