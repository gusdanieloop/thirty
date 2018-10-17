var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    // Add headers
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    consign()
        .include('controllers')
        .then('persistence')
        .into(app);

    return app;
}
