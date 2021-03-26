document.write("arrow function"+"<br>");

//no parameter
  var a=()=>{
 	document.write("arrow function"+"<br>");
 }
 a();
 // with single parameter
  var b=(s)=>{
 	document.write(s+"<br>");
 }
 b(12);
 /*other methid and only write this method in single function*/
  var c =(s1)=> document.write(s1+"<br>");
 c(11);

//onther one
var claa=(s1)=> s1;
 claa("i am the arrow function");
//two parameter
 var two=(f,g)=>{
 	document.write(f+g+"<br>");
 }
 two(11,11);
 //pass tp parametre in function
  var pass=function myfuction(s){
 	return s(11,12) ;
 }
pass((a,b)=>{
 	document.write( a+b+"<br>");
 });
//return on function
var ret=function myfuction(){
 	return (a,b)=>{
 		return a+b;
 	};
 }
var  ter= ret();
document.write(ter(12,45));
//thank you