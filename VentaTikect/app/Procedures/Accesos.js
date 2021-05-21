var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function Accesos (users,pass) {
    try{
   
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  

         .input('users'	,	users	)
         .input('pass'	, pass	)
     
        .execute('Acces')
      
    return resulta.recordsets;
    } catch(err)
    {
      console.log(err);
   }
     }
   //}
   
   module.exports ={
       Accesos : Accesos
   }