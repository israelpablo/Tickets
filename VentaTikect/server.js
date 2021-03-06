//
const express= require('express');
const app= express();
const bodyParser= require('body-parser');

const port= process.env.PORT || 80;
const expressLayouts= require('express-ejs-layouts');
//use ejs and express layouts
app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('public'));
//use body parser
app.use(bodyParser.urlencoded({extended: true}));
// route our app
const router=require('./app/routes');
app.use('/',router);
//start the server
app.listen(port,function(){
    console.log('app started in port 80');
});