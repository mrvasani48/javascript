var person = {};
person.fname = "kishan";
person.lname = "vasani";
person.city = "surat";
document.write(person.fname + " d " + person.lname + "<br>" + person.city + "<br>")
person.clg = function () {
    return ("goerment engineering college rajkot");
};
person.no = 9265171523;
console.log(person);
console.log(person.clg());
document.write(person.clg() + "<br>")
