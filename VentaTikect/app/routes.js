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
  <a href="/UsuarioActivo" class="navbar-brand">NombreUser</a>
  <a href="/Cerrar" class="navbar-brand">Cerrar Sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/ID">Home</a></li>
    <li><a href="/Venta/ID">Comprar boleta</a></li>
    <li><a href="/ConsultaH/ID">Historial de  boleto</a></li>
    <li><a href="/Hitoria/ID">Historial de movimientos</a></li>
    <li><a href="/Altau/ID">Alta usuario </a></li>
    <li><a href="/about/ID">About</a></li>
    <li><a href="/contact/ID">Contact</a></li>
  </ul>
</nav>
</header>`;
comun=`<header>
<nav class="navbar navbar-inverse">
<a href="/UsuarioActivo" class="navbar-brand">NombreUser</a>
<a href="/Cerrar" class="navbar-brand">Cerrar Sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/ID">Home</a></li>
    <li><a href="/Venta/ID">Comprar boleta</a></li>
    <li><a href="/ConsultaH/ID">Historial de  boleto</a></li>
    <li><a href="/about/ID">About</a></li>
    <li><a href="/contact/ID">Contact</a></li>
  </ul>
</nav>
</header>`;
chofer=`<header>
<nav class="navbar navbar-inverse">
<a href="/UsuarioActivo" class="navbar-brand">NombreUser</a>
<a href="/Cerrar" class="navbar-brand">Cerrar Sesion</a>
  <ul class="nav navbar-nav">
    <li><a href="/ID">Home</a></li>
    <li><a href="/Captura/ID">Capturar boleto</a></li>
    <li><a href="/TotalBoleto/ID">Total Boletos</a></li>
    <li><a href="/about/ID">About</a></li>
    <li><a href="/contact/ID">Contact</a></li>
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
var  activeuser=[];
var ids;
//Sesion default
router.get('/', function(req, res) {
    de=`<a href="/" class="btn btn-lg btn-primary">Solicitar Boleto</a>
    <a href="/contact" class="btn btn-lg btn-primary">Cotactanos</a>`;
    dbConsulta.Consulta('Catalogo').then(result52=>{
      console.log(result52)
    res.render('pages/home',{def:defaults,df:de,catalogo:result52[0]});
  });
  });
  router.get('/Sesion', function(req, res) {
    
    res.render('pages/Sesion',{def:defaults});
  });
  router.get('/about', function(req, res) {
    res.render('pages/about',{def:defaults});
  });
  router.get('/contact', function(req, res) {
    res.render('pages/contact',{def:defaults});
  });
//sesion todo los demas
var tipouser;
bandera=false;
var iduse,nombreuse;
  const dbAcceso = require('../app/Procedures/Accesos');
  const dbConsulta=require('../app/Procedures/Consulta');
  const dbAlta=require('../app/Procedures/AltaEmpleado');
  const dbAltaUsers=require('../app/Procedures/AltaUsuario');
  router.post('/Sesion', function(req, res) {
   
var menu;

    pass=req.body.Pass_TXT;
    users=req.body.User_txt;
    dbAcceso.Accesos(users,pass).then(result=>{
    act(result);

console.log(nombreuse)
banderas= false;
     counter=0;
 /*  revisar=activeuser;
revisar.forEach(IndexConexion); */
de=`<a href="/`+iduse+`" class="btn btn-lg btn-primary">Solicitar Boleto</a>
<a href="/contact/`+iduse+`" class="btn btn-lg btn-primary">Cotactanos</a>`;
 /*     if(banderas==true)
{      activeuser.splice(counter,1);}
*/
dbConsulta.Consulta('Catalogo').then(result52=>{
    switch(tipouser)
    {
      case 'Comun':
      
        menu=comun;
        menu=menu.replace('NombreUser',nombreuse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        dbConsulta.Consulta('Catalogo').then(result52=>{

        res.render('pages/home',{def:menu,df:de,catalogo:result52[0]});
      });
    break;
    case 'Admin':
      menu=admin;
      menu=menu.replace('NombreUser',nombreuse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      menu=menu.replace('ID',iduse);
      dbConsulta.Consulta('Catalogo').then(result52=>{

      res.render('pages/home',{def:menu,df:de,catalogo:result52[0]});
    });
      break;
      case 'Chofer':
        menu=chofer;
        menu=menu.replace('NombreUser',nombreuse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        menu=menu.replace('ID',iduse);
        dbConsulta.Consulta('Catalogo').then(result52=>{

        res.render('pages/home',{def:menu,df:de,catalogo:result52[0]});
      });
        break;
        case 'Default':
          de=`<a href="/" class="btn btn-lg btn-primary">Solicitar Boleto</a>
          <a href="/contact" class="btn btn-lg btn-primary">Cotactanos</a>`;
          res.render('pages/home',{def:defaults,df:de,catalogo:result52});
          break;
   
    
    }
      });
    });
    
  });
function IndexConexion(element,index,array)
{
  if (element.IdUsuario==ids)
  {
    banderas=true;
     return counter;
  } 
  else
  {
   counter=counter+1
  }      
}
  function act(recibir)
  {
  activo=recibir;
  activo[0].forEach(logArrayElements2);
  }
  function logArrayElements2(element, index, array) {
    const contact={
      ID_USER: element.IdUsuario,
      USERNAME: element.Usuario,
      PASS: element.Pass,
      FNAME: element.Nombre,
    LNAME: element.ApellidoP,
    LNAME2:element.ApellidoM,
      ROLE:element.IdAcceso
    };
    activeuser.push(contact);
       tipouser= element.NombreAcceso;
       iduse=element.IdUsuario;
       nombreuse=element.Usuario;
   }
   router.get('/Cerrar', function(req, res) {
    banderas= false;
    counter=0;
  revisar=activeuser;
revisar.forEach(IndexConexion); 
     if(banderas==true)
{      activeuser.splice(counter,1);}
de=`<a href="/" class="btn btn-lg btn-primary">Solicitar Boleto</a>
<a href="/contact" class="btn btn-lg btn-primary">Cotactanos</a>`;
dbConsulta.Consulta('Catalogo').then(result52=>{
  console.log(result52)
res.render('pages/home',{def:defaults,df:de,catalogo:result52[0]});
});
  });
  router.get('/olvido', function(req, res) {
    res.render('pages/home',{def:defaults});
  });
  router.get('/usernew', function(req, res) {
    res.render('pages/usernew',{def:defaults});
  });
  router.post('/usernew', function(req, res) {

    nombre= req.body.nombre;
    ApellidoP=req.body.apellido1;
    ApellidoM=req.body.apellido2;
    Usuario=req.body.Usuario;
    contraseña =req.body.Contras1;
    Correo=req.body.correo;
   Rol=3;
   dbAltaUsers.AltaUsuario(nombre,ApellidoP,ApellidoM,Correo,Usuario,contraseña,Rol).then(resultado=>{
    res.render('pages/thank-you',{def:defaults,no:nombre+ ' ' +ApellidoP + ' ' + ApellidoM,usu:Usuario});
  });
  });
router.get('/Altau/:id',function(req,res){
form= '<form action="/Altau/idusuario" class="form1" method="POST" id="form1">';
form =form.replace('idusuario',req.params.id);


res.render('pages/AltaUser',{def:admin,forma:form});
});
var ids;
var bander;
router.post('/Altau/:id',function(req,res){
  ids=req.params.id;
  console.log(ids);
  bander=false;
revision= activeuser;
console.log('activeuser')
console.log(activeuser)
revision.forEach(Indexs);
var menu;
console.log(role);
if (bander==true)
{
switch(role)
{
  case 1:
menu=admin;
    break;
    case 2:
    menu=chofer;
      break;
      case 3:
menu= comun;
        break;
        case 4:
    menu=defaults;
          break;
}
menu=menu.replace('NombreUser',usernames);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
menu=menu.replace('ID',idusers);
console.log(menu);
 nombre= req.body.nombre;
 ApellidoP=req.body.apellido1;
 ApellidoM=req.body.apellido2;
 Usuario=req.body.Usuario;
 contraseña =req.body.Contras1;
Rol=req.body.select;
switch(Rol)
{
    case 'value2':
      Rol=1
      break;
      case 'value3':
        Rol=2
        break;
}
form= '<form action="/Altau/idusuario" class="form1" method="POST" id="form1">';
form =form.replace('idusuario',req.params.id);
dbAlta.AltaEm(nombre,ApellidoP,ApellidoM,Usuario,contraseña,Rol).then(resultado=>{
res.render('pages/AltaUser',{def:menu,forma:form});
});
}
  });
  var idusers,usernames,role;
  function Indexs(element, index, array) {
    
    console.log('paso en index antes de if');
    console.log(element.ID_USER)
    if (element.ID_USER==ids)
    {
      console.log('paso en index');
      console.log(element.ROLE);
      idusers= element.ID_USER,
     usernames= element.USERNAME,
     role=element.ROLE
      bander=true;
   return counter;
    } 
    else
    {
     counter=counter+1
    }      
   }
  





 /* router.get('/:hola', function(req, res) {
    res.render('pages/home',{def:comun});
  });*/
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
 // router.get('/usernew', function(req, res) {
  //  res.render('pages/usernew');
 // });
  //revision de captura
  router.get('/Captura/:ID', function(req, res) {
    res.render('pages/Boletos',{def:defaults});
  });