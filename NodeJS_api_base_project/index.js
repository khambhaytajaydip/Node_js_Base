require('dotenv').config();
const express = require('express');
const log4js = require('log4js');
const https = require('https');
const http = require('http');
const fs = require('fs');

const appConstants = require('./config/app.constants');
const appConfig = require('./config/app.config');

const app = express();
appConfig(app);

// var privateKey  = fs.readFileSync('/var/www/instrucko_front/api/cert/privkey.pem', 'utf8');
// var certificate = fs.readFileSync('/var/www/instrucko_front/api/cert/fullchain.pem', 'utf8');
//var credentials = {key: privateKey, cert: certificate};


// Listen both http & https ports
const httpsServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

//httpServer.listen(8080, () => {
  //  console.log('HTTP Server running on port 80');
//});

httpsServer.listen(8080, () => {
    console.log('HTTPS Server running on  localhost:8080/api-doc');
});

//httpsServer.listen(8443);

module.exports = app;
