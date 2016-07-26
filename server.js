// environment variables
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.NODE_HTTPS_PORT = process.env.NODE_HTTPS_PORT || 8082;
process.env.NODE_FORECAST_API = process.env.NODE_FORECAST_API || '6759d789feae04ffe702654289b21bff';

var Utilities = require('./app/models/utilities.server.model'),
    express = require('./config/express'),
    https = require('https');

// initialise express web server
var app = express();

// initialse a https server
var httpsServer = https.createServer(Utilities.getSslCertificate(), app);

// set port to the web server
httpsServer.listen(process.env.NODE_HTTPS_PORT);

// this helps to run tests on the server
module.exports = app;

console.log('App now is running at https://localhost:' + process.env.NODE_HTTPS_PORT + "/");
