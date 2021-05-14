var sql = require('mssql');
var config= require('../Configuration/dbconfig');
async function Accesos (tabla,id,iduser,worsatation,active,username,pass,description,fname,lname,role,name,desgasma,castinma,wair,wwater,result,judgement,note,idfo,machine,tiempo) {
    try{
   
     let conn = await sql.connect(config);
    let resulta=   await conn.request()  
         .input('tabla'	,tabla	)
         .input('id'	,	id	)
         .input('id_user'	, iduser	)
         .input('workstation'	,	worsatation	)
         .input('active', 	active	)
         .input('username'	, 	username	)
         
         .input('pass'	, pass	)
            .input('description',	description	)
         .input('fname', 	fname	)
         .input('lname', 	lname	)
         .input('role', 	role	)
         .input('name', 	name	)
         .input('desgas_machine', 	desgasma	)
        .input('cast_machine', 	castinma	)
         .input('weight_air',	wair	)
         .input('weight_water', 	wwater	)
         .input('result', 	result	)
         .input('judgement'	, 	judgement	)
        .input('note', 	note	)
         .input('inspector', 	idfo	)
         .input('machine', 	machine	)
         .input('delivered_time', 	tiempo	)
        .execute('Altas')
      
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