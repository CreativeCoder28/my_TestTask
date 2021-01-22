const express = require('express');
const path = require('path');

//Init App
const app =express();

// Load view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
   res.render('home');
});

// Dasboard Route
app.get('/', function(req, res){
  res.render('dashboard');
  title: 'Dashboard'
});


app.listen(3000, function(){
  console.log('port is 3000');
})