const express = require('express');
const server = express();

const fs = require('fs');

const mainRouter = require('./routes/main.js');
const mainListJsonRouter = require('./routes/list.js');

server.use(express.static('./public'));

server.set('view engine', 'ejs');
server.set('views','./views');

server.use('/', mainRouter);
server.use('/list', mainListJsonRouter);

server.listen (3000);
