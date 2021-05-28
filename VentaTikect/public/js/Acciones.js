function clickaction( b ){ 
  
    switch( b.id ){
      
       case "Olvido":
//form1.action=form1.action;
form1.method="GET";
form1.action="/olvido";

                        break;
       case "Nuevo":
         console.log("Creacion")
        form1.method="GET";
        form1.action="/usernew"; 
                        break;
       case "Preview2":

                        break;
      }
    }
   