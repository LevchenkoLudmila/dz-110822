const express = require('express');
const server = express();

const fs = require('fs');

const mainRouter = require('./routes/main.js');
const mainListRouter = require('./routes/list.js');
const routerMan = require('./routes/mens.js');
const routerWimen = require('./routes/wimen.js');

server.use(express.static('./public'));

server.set('view engine', 'ejs');
server.set('views','./views');

server.use('/', mainRouter);
server.use('/list', mainListRouter );

server.listen (3000);
