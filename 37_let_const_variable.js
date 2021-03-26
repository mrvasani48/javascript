var a="this var scope is global";
document.write(a+"<br>");
if(true){
let a="this var scope is local and death this variable ";
document.write(a+"<br>");
}
const pi="this var scope is global but ones assigned naver change";
document.write(pi+"<br>");