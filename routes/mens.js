const express = require('express');
const routerMan = express.Router();

routerMan.get('/',(req,res) =>{
   const clous = [
      {id:1, prodact: 'mens boots', color: 'waite', img: './img/1.jpg'},
      {id:2, prodact: 'wimen boots', color: 'red', img: './img/1.jpg'},
      {id:3, prodact: 'chaild boots', color: 'green', img: './img/1.jpg'}
   ]
   res.render('main',{clous: clous});
});

module.exports = routerMan;