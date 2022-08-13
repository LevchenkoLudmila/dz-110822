const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views','./views');
server.use(express.static('./public'));

server.get('/',(req,res) =>{
   const arrey = [
      {id:1,
      prodact: 'book',
      img: '/1.jpg'
   },
   {id:2,
      prodact: 'book',
      img: '/1.jpg'
   },
   {id:3,
      prodact: 'book',
      img: '/1.jpg'
   }
]
   res.render('home',{arrey: arrey});

});














server.listen (3000);