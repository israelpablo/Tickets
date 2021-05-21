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
      res.render('pages/home');
    break;
    case 'Admin':
      res.render('pages/Sesion');
      break;
      case 'Chofer':
         res.render('pages/Sesion');
        break;
        case 'Default':
          res.render('pages/Sesion');
          break;
   
    
    }
      //pages/Search',{extra:result[0], Fechas:prueba1,hora1:hora1,hora2:hora2,mquin:maquina,sele1:select1,sele2:select2 });
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