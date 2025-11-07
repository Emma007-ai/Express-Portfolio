var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res) {
  res.render('home', { title: 'Home | Emmanuel Uzoma-Akonye' });
});

// About
router.get('/about', function(req, res) {
  res.render('about', { title: 'About | Emmanuel Uzoma-Akonye' });
});

// Projects
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects | Emmanuel Uzoma-Akonye' });
});

// Contact
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact | Emmanuel Uzoma-Akonye' });
});
router.get('/',       (req,res)=> res.render('home',     { title: 'Home | Emmanuel Uzoma-Akonye' }));
router.get('/about',  (req,res)=> res.render('about',    { title: 'About | Emmanuel Uzoma-Akonye' }));
router.get('/projects',(req,res)=> res.render('projects',{ title: 'Projects | Emmanuel Uzoma-Akonye' }));
router.get('/contact',(req,res)=> res.render('contact',  { title: 'Contact | Emmanuel Uzoma-Akonye' }));
module.exports = router;
