//Import Modules
const express=require('express');
const patj= require('path');
// create a router object
const router= express.Router();
// export our router
module.exports=router;
// route for our homepage

admin=`<header>
<nav class="navbar navbar-inverse">
  <a href="/Sesion" class="navbar-brand">Inicio de sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/Venta">Comprar boleta</a></li>
    <li><a href="/ConsultaH">Historial de  boleto</a></li>
    <li><a href="/Hitoria">Historial de movimientos</a></li>
    <li><a href="/Alto">Alta usuario </a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
</header>`;
comun=`<header>
<nav class="navbar navbar-inverse">
  <a href="/Sesion" class="navbar-brand">Inicio de sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/Venta">Comprar boleta</a></li>
    <li><a href="/ConsultaH">Historial de  boleto</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
</header>`;
chofer=`<header>
<nav class="navbar navbar-inverse">
  <a href="/Sesion" class="navbar-brand">Inicio de sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/Captura">Capturar boleto</a></li>
    <li><a href="/HistorialC">Total Boletos</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
</header>`;
defaults=`<header>
<nav class="navbar navbar-inverse">
  <a href="/Sesion" class="navbar-brand">Inicio de sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/ConsultaH">Historial de  boleto</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
</header>`;




router.get('/', function(req, res) {
    res.render('pages/home',{def:defaults});
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
  var tipouser
  const dbAcceso = require('../app/Procedures/Accesos');
  router.post('/Sesion', function(req, res) {
   
    pass=req.body.Pass_TXT;
    users=req.body.User_txt;
    dbAcceso.Accesos(users,pass).then(result=>{
    act(result);
console.log(tipouser)
    switch(tipouser)
    {
      case 'Comun':
        res.render('pages/home',{def:comun});
    break;
    case 'Admin':
      res.render('pages/home',{def:admin});
      break;
      case 'Chofer':
        res.render('pages/home',{def:chofer});
        break;
        case 'Default':
          res.render('pages/home',{def:defaults});
          break;
   
    
    }
      })
    
  });
  function act(recibir)
  {
  activo=recibir;
  activo[0].forEach(logArrayElements2);
  }
  function logArrayElements2(element, index, array) {
       tipouser= element.NombreAcceso;
   }