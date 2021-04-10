
//concet method

var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(array.concat(d2array) +"<br>");

//join method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(array.join("*") +"<br>");

//reverse method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(array.reverse() +"<br>");

//slice method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(array.slice(1,2) +"<br>");

//to string method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(array.toString() +"<br>");
document.write(typeof(array) +"<br>");


//Array.isArray method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(Array.isArray(d2array) +"<br>");//true


//splice method
var array = [ 0,"ak", 2,2,3,1,5,5 ];
var d2array = [ 3,"pas", 6 ];
document.write(array.splice(0,2) +"<br>");
document.write(array.splice(0,1) +"<br>");
document.write(array.splice(0,5) +"<br>");

//indexof method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(d2array.indexOf(2) +"<br>");// 2 is not find array  then return -1
document.write(d2array.indexOf("pas") +"<br>");

//fill method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(d2array.fill("kishan") +"<br>");
document.write(d2array +"<br>");//its update the main array

//push method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
d2array.push("kishan")
document.write(d2array +"<br>");

//pop method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
document.write(d2array +"<br>");
d2array.pop()
document.write(d2array +"<br>");

//unshift method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
d2array.unshift("kishan")
document.write(d2array +"<br>");

//push method
var array = [ 0,"ak", 2 ];
var d2array = [ 3,"pas", 6 ];
d2array.push()
document.write(d2array +"<br>");
