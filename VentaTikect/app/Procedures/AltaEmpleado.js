var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function AltaEm (Nombre,app,apm,usuario,pass,idacceso) {
    try{
   
      console.log(usuario);
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  
         .input('Nombre'	,Nombre	)
         .input('app'	,	app	)
         .input('apm'	, apm	)
         .input('usuario'	,	usuario	)
         .input('pass', 	pass	)
         .input('idacceso'	, 	idacceso	)
         .execute('AltaEmp')
      
    return resulta.recordsets;
    } catch(err)
    {
      console.log(err);
   }
     }
   //}
   
   module.exports ={
       AltaEm : AltaEm
   }