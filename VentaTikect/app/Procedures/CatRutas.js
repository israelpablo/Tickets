var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function Ruta (tabla) {
    try{
   console.log('Paso?')
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  

         .input('id'	,	'id'	)
     
        .execute('rutas')
      
    return resulta.recordsets;
    } catch(err)
    {
      console.log(err);
   }
     }
   //}
   
   module.exports ={
       Ruta: Ruta
   }