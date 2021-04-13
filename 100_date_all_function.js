//create date object
var today = new Date();
document.write(today+"<br>");

//milisecond
var today =new Date(456154156416);
document.write(today+"<br>");
var today =new Date(4585465456416);
document.write(today+"<br>");

//year,month,day,hour,minute,second,milisecond
var today =new Date(2020,5,25,6,59,20,00 );
document.write(today+"<br>");
var today =new Date(2020,5,25,6,59,20 );
document.write(today+"<br>");
var today =new Date(2020,5,25,6,59 );
document.write(today+"<br>");
var today =new Date(2020,5,25,6);
document.write(today+"<br>");
var today =new Date(2020,5,25 );
document.write(today+"<br>");
var today =new Date(2020,10);
document.write(today+"<br>");
var today =new Date(5959598);
document.write(today+"<br>");


//output
/*
Tue Apr 13 2021 18:15:00 GMT+0530 (India Standard Time)
Fri Jun 15 1984 18:59:16 GMT+0530 (India Standard Time)
Tue Apr 23 2115 17:54:16 GMT+0530 (India Standard Time)

Thu Jun 25 2020 06:59:20 GMT+0530 (India Standard Time)
Thu Jun 25 2020 06:59:20 GMT+0530 (India Standard Time)
Thu Jun 25 2020 06:59:00 GMT+0530 (India Standard Time)
Thu Jun 25 2020 06:00:00 GMT+0530 (India Standard Time)
sun nov 25 2020 00:00:00 GMT+0530 (India Standard Time)
Mon Jun 01 2020 00:00:00 GMT+0530 (India Standard Time)
Thu Jan 01 1970 07:09:19 GMT+0530 (India Standard Time)


*/
//date string 


var today = new Date("may 8 ,   2025 10:45:45");
document.write(today+"<br>");
//Thu May 08 2025 10:45:45 GMT+0530 (India Standard Time)

//iso date 
var today = new Date("2025-02-08 ");
document.write(today+"<br>");
//Sat Feb 08 2025 00:00:00 GMT+0530 (India Standard Time)

//short date
var today = new Date("2025/02/08");
document.write(today+"<br>");
//Sat Feb 08 2025 00:00:00 GMT+0530 (India Standard Time)

//long date
var today = new Date("2001 nov 25");
document.write(today+"<br>");
//Sun Nov 25 2001 00:00:00 GMT+0530 (India Standard Time)