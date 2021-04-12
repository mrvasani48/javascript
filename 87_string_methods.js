//trim method space delete in string
var str = "kishan  d vasani";
var str2 = str.trim();
document.write(str2);

//replace method replace  string
var str = "kishan  d vasani";
var str2 = str.replace("d"," ");
document.write(str2+"<br>");

//typeof in string
var str = "kishan  d vasani";
console.log(typeof(str));

//search method   string
var str = "kishan d vasani";
var str2 = str.search("d");
document.write(str2+"<br>");

//slice method   string
var str = "kishan d vasani";
var str2 = str.slice(0,8);
document.write(str2+"<br>");

//split method   string
var str = "kishan d vasani";
var str2 = str.split(" ");
document.write(str2[0]+"<br>");
console.log(typeof(str2));

//search method   string
var str = "kishan d vasani";
var str2 = str.search("vasani");
document.write(str2+"<br>");

//sunstring method   string
var str = "kishan d vasani";
var str2 = str.substring(2,16);
document.write(str2+"<br>");

//substr method   string  
//substr(start,no of char)
var str = "kishan d vasani";
var str2 = str.substr(0,8);
document.write(str2+"<br>");






