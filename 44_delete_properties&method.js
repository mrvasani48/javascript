var person = {};
person.fname = "kishan";
person.lname = "vasani";
person.city = "surat";
document.write(person.fname + " d " + person.lname + "<br>" + person.city + "<br>")
person.clg = function () {
    return ("goverment engineering college rajkot");
};
person.no = 9265171523;
console.log(person);
console.log(person.clg());
document.write(person.clg() + "<br>")
delete person.city;
document.write(  "city = " + person.city + "<br>")  //delete properties is city
delete person.clg();
document.write(  "college = " + person.clg() + "<br>")  //delete properties method
console.log(person.clg());
///revise 
function marks(){
      for (var i=9 ;i>=0 ; i--)
      {
          document.write(arguments[i] +"</br>");
      }
}
marks(1,2,3,4,5,6,7,8,9,10)
function marks(){
    for (var i=0 ;i<arguments.length ; i++)
    {
        
        document.write(arguments[i] +"</br>");
    }
}
marks(1,2,3,4,5,6,7,8,9,10)