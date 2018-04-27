const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

module.exports = app;