var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function Consulta (tabla) {
    try{
   console.log('Paso?')
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  

         .input('tabla'	,	tabla	)
     
        .execute('Consulta')
      
    return resulta.recordsets;
    } catch(err)
    {
      console.log(err);
   }
     }
   //}
   
   module.exports ={
       Consulta : Consulta
   }