var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function AltaBoleto (idusuario,idruta) {
    try{
   
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  

         .input('idUsuario', idusuario	)
         .input('idRuta', 	idruta	)
        .execute('BoletoAlta')
      
    return resulta.recordsets;
    } catch(err)
    {
      console.log(err);
   }
     }
   //}
   
   module.exports ={
       AltaBoleto : AltaBoleto
   }