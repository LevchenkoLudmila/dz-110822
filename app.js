const express = require('express');
const server = express();

const fs = require('fs');
const mainRouter = require('./routes/main.js');

server.set('view engine', 'ejs');
server.set('views','./views');

server.use(express.static('./public'));
server.use('/', mainRouter);

server.listen (3000);