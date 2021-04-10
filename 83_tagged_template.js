var mtikit= 1 ; 
var prise=200;
var btikit=6   ;
var dprise=50;

/*document.write(`are you buy 1 movie ticket the prise is 200 rupis 
if you buy 5 movie tikit to discount 50 rupies each tikit `);*/
 function myfunction (theory, mtikit,prise,btikit,dprise)
 {
            
            if (btikit<5)
            {
                   dprise=0;
                   return  theory[0] + mtikit+theory[1]+prise+theory[2]+btikit+theory[3]+dprise+theory[4];
            }
           else
           {
               return theory[0] + mtikit+theory[1]+prise+theory[2]+btikit+theory[3]+dprise+theory[4];
           }
 };

document.write(myfunction`are you buy ${mtikit} movie tikit the prise is ${prise}
if you buy ${btikit} movie tikit to discount ${dprise} rupies each tikit `);
            