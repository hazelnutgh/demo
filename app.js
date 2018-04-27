const express = require('express');
const app = express();

const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const routes = require('./routes/routes');

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

module.exports = app;