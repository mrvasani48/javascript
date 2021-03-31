// object literal method 
var person = {};
 person.clg="goverment engineering college rajkot";
 person.fname="kishan";
 person.mname="d";
 person.lname="vasani";
 person.no=180200107118;
 person["mobile no"]=9265171523;
 person.detaile=total();
 function total ()
 {
    return (person.fname + " " + person.mname + " " + person.lname + "<br>" + person.no + "<br>" + person.clg + "<br>"+person["mobile no"] +"<br>" );
 }
 document.write( person.detaile);
 
 //constructer method
var person = new Object ();
person.clg="goverment engineering college rajkot";
 person.fname="kishan";
 person.mname="d";
 person.lname="vasani";
 person.no=180200107118;
 person["mobile no"]=9265171523;
 person.detaile=total();
 function total ()
 {
    return (person.fname + " " + person.mname + " " + person.lname + "<br>" + person.no + "<br>" + person.clg + "<br>"+person["mobile no"] );
 }
 document.write( person.detaile);
