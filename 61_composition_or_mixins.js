var eating={
    eat: "i can eating"
};
var walking={
    walk: "i can walking"
};
var talking={
    talk: "i can talking"
};
var person = Object.assign({},eating,walking,talking);
document.write("person says"+"<br>");
document.write(person.eat+"<br>");
document.write(person.walk +"<br>");
document.write(person.talk +"<br>");

var animale = Object.assign({},eating,walking,talking);

document.write("animale  says"+"<br>");
document.write(animale.eat+"<br>");
document.write(animale.walk +"<br>");
document.write(animale.talk +"<br>");

var robot = Object.assign({},walking,talking);
document.write("robot says"+"<br>");
document.write(robot.walk +"<br>");
document.write(robot.talk +"<br>");
/*
// we using mix function
function mix (target, ...sources){
    Object.assign(target, ...sources)
};
*/
var human = function(){
  return  Object.assign({},eating,walking,talking) ;
};
var kishan = human();
document.write(kishan.eat+"<br>");
document.write(kishan.walk +"<br>");
document.write(kishan.talk +"<br>");

var robot1 = function(){
    return  Object.assign({},walking,talking) ;
  };
  var robox = robot1();
  //document.write(robox.eat+"<br>"); optput undefind
  document.write(robox.walk +"<br>");
  document.write(robox.talk +"<br>");

