var a= 12.45454;
document.write(a.toExponential()+"<br>");
var a= 12.45454;
document.write(a.toExponential(2)+"<br>");
var a= 12.45454;
document.write(a.toExponential(4)+"<br>");
var a= 12.45454;
document.write(a.toExponential(6)+"<br>");

//to fixed
var a= 12.45454;
document.write(a.toFixed()+"<br>");
var a= 12.45454;
document.write(a.toFixed(2)+"<br>");
var a= 12.45454;
document.write(a.toFixed(4)+"<br>");
var a= 12.45454;
document.write(a.toFixed(6)+"<br>");

//to pricision
var a= 12.45454;
document.write(a.toPrecision()+"<br>");
var a= 12.45454;
document.write(a.toPrecision(2)+"<br>");
var a= 12.45454;
document.write(a.toPrecision(4)+"<br>");
var a= 12.45454;
document.write(a.toPrecision(6)+"<br>");


//numbet.isinteger
var a= 12.45454;
document.write(Number.isInteger(a)+"<br>");
document.write(Number.isInteger(12)+"<br>");
document.write(Number.isInteger(12.12)+"<br>");
document.write(Number.isInteger("a")+"<br>");
document.write(Number.isInteger(12.0)+"<br>");

//numbet.issafeinteger   2^56-1 , -2^56-1 
var a= 12.45454;
document.write(Number.isSafeInteger(a)+"<br>");
document.write(Number.isSafeInteger(12)+"<br>");
document.write(Number.isSafeInteger(12.12)+"<br>");
document.write(Number.isSafeInteger("a")+"<br>");
document.write(Number.isSafeInteger(12111111)+"<br>");

//number
var a= 12.45454;
document.write(Number(a)+"<br>");
document.write(Number(12)+"<br>");
document.write(Number(12.12)+"<br>");
document.write(Number("a")+"<br>");
document.write(Number(12111111)+"<br>");

//parseint
var a= 12.45454;
document.write(parseInt(a)+"<br>");
document.write(parseInt(12)+"<br>");
document.write(parseInt(12.12)+"<br>");
document.write(parseInt("a")+"<br>");
document.write(parseInt(12111111)+"<br>");
document.write("<br>");

//parsefloat
var a= 12.45454;
document.write(parseFloat(a)+"<br>");
document.write(parseFloat(12)+"<br>");
document.write(parseFloat(12.12)+"<br>");
document.write(parseFloat("a",2)+"<br>");
document.write(parseFloat(121111111)+"<br>");
