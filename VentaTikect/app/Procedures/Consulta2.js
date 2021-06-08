var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function Consulta2 (idchofer,idboleto) {
    try{
  
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  

         .input('idchofer'	,	idchofer	)
         .input('idboleto'	,	idboleto	)
     
        .execute('Consulta2')
      
    return resulta.recordsets;
    } catch(err)
    {
      console.log(err);
   }
     }
   //}
   
   module.exports ={
       Consulta2 : Consulta2
   }