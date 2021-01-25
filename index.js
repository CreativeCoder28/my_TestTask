const express = require('express');
const path = require('path');
const PORT= 3000;


const router = express.Router();

//Init App
const app =express();

// Load view Pug Engine
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))


// Home Route
app.get('', function(req, res){
   res.render('home');
   title: 'Home'
});

// About us Route
app.get('/about-us', function(req, res){
  res.render('about-us');
  title: 'About Us'
});


// Contact us Route
app.get('/contact-us', function(req, res){
  res.render('contact-us');
  title: 'Contact Us'
});



app.listen(PORT, function(){
  console.log("Server Started on http://localhost:3000");
})