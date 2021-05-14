//Import Modules
const express=require('express');
const patj= require('path');
// create a router object
const router= express.Router();
// export our router
module.exports=router;
// route for our homepage
router.get('/', function(req, res) {
    res.render('pages/home');
  });
  router.get('/Sesion', function(req, res) {
    res.render('pages/Sesion');
  });
  router.get('/about', function(req, res) {
    res.render('pages/about');
  });
  router.get('/contact', function(req, res) {
    res.render('pages/contact');
  });
  router.get('/Venta', function(req, res) {
    res.render('pages/Compra');
  });
  router.get('/Consulta', function(req, res) {
    res.render('pages/Consulta');
  });
  router.get('/usernew', function(req, res) {
    res.render('pages/usernew');
  });